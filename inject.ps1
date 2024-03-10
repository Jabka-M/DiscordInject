$code = [System.IO.File]::ReadAllText("code.js")
$app = Get-ChildItem -Path "$env:LOCALAPPDATA\Discord" -Filter app-* | Where-Object {return $(Get-ChildItem $_.FullName).Length -gt 0}
if ($app -eq $null) {
    Write-Output "Cannot find discord app-* folder in $($pwd.Path)"
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
    }
} else {
    Write-Output "Injected code from code.js ($($code.Length) bytes)"
    Set-Content -Path $index.FullName -Value $code
    Add-Content -Path $index.FullName -Value "module.exports = require('./core.asar');"
}