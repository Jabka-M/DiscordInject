$app = Get-ChildItem -Path "$env:LOCALAPPDATA\Discord" -Filter app-* | Where-Object {return $(Get-ChildItem $_.FullName).Length -gt 0}
if ($app -eq $null) {
    Write-Output "Cannot find discord app-* folder in $env:LOCALAPPDATA\Discord"
    pause
    exit
}

$core = Get-ChildItem -Path $app.FullName -Recurse | Where-Object {return $_.Name -eq "discord_desktop_core"}
if ($core -eq $null) {
    Write-Output "Cannot find discord_desktop_core folder in $($app.FullName)"
    pause
    exit
}

Set-Location $core.FullName

$index = $core.GetFiles() | Where-Object {return $_.Name -eq "index.js"}
if ($index -eq $null) {
    Write-Output "Cannot find discord core loader (file index.js is missing in folder $($core.FullName))"
    pause
    exit
}

$content = [System.IO.File]::ReadAllText($index.FullName)
if ($content.Trim() -ne "module.exports = require('./core.asar');") {
    Write-Output "Already injected"
    Write-Output "Do you want to restore default file? (y/n)"

    do {
        $choice = [System.Console]::ReadKey($true).Key
    } while ($choice -ne "Y" -and $choice -ne "N")

    if ($choice -eq "N") {
        exit
    } else {
        Write-Output "Restored default $($index.FullName)"
        Set-Content -Path $index.FullName -Value "module.exports = require('./core.asar');"
        pause
        exit
    }
} else {
    $codefiles = Get-ChildItem -Path $(Join-Path $PSScriptRoot "jsfiles") -ErrorAction SilentlyContinue | ? {$_.Extension -eq ".js"}
    if ($codefiles -eq $null -or $codefiles.length -eq 0) {
        Write-Output "No .js files detected in jsfiles directory!"
        pause
        exit
    } elseif ($codefiles.length -eq 1) {
        $code = [System.IO.File]::ReadAllText($codefiles[0])
    } else {
        do {
            Clear-Host
            Write-Output "Multiple .js files detected!"
            Write-Output "Select the one you want to inject:"
            $i = 0
            $codefiles | % {
                $i++
                Write-Output "[$i] $($_.Name)"
            }
            $filen = [System.Console]::ReadLine() -as [uint32]
        } while ($filen -eq $null -or $filen -gt $codefiles.length -or $filen -lt 1)
        $selfile = $codefiles[$filen-1]
        Write-Output "Selected: $($selfile.Name)"
        $code = [System.IO.File]::ReadAllText($selfile.FullName)
    }
    Write-Output "Injected $($code.Length) bytes"
    Set-Content -Path $index.FullName -Value $code
    Add-Content -Path $index.FullName -Value "module.exports = require('./core.asar');"
    pause
    exit
}