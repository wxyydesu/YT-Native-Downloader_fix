@echo off
setlocal enabledelayedexpansion

REM Ambil URL dari clipboard
for /f "delims=" %%i in ('powershell -command "Get-Clipboard"') do set "yturl=%%i"

REM Validasi input
if "%yturl%"=="" (
    echo URL tidak ditemukan!
    pause
    exit /b
)

REM Lokasi yt-dlp.exe
set "YTDLP_PATH=C:\xampp\htdocs\YT-Native-Downloader_fix\yt-dlp.exe"

REM Pilih format
echo.
echo ==== PILIH TIPE DOWNLOAD ====
echo 1. Video (.mp4)
echo 2. Audio (.mp3)
echo =============================
set /p choice=Masukkan pilihan (1/2):

if "%choice%"=="1" (
    echo Mendownload video...
    "%YTDLP_PATH%" -f mp4 -o "mp4/%%(title)s [%%(id)s].%%(ext)s" "%yturl%"
) else if "%choice%"=="2" (
    echo Mendownload audio...
    "%YTDLP_PATH%" -f bestaudio --extract-audio --audio-format mp3 -o "mp3/%%(title)s [%%(id)s].%%(ext)s" "%yturl%"
) else (
    echo Pilihan tidak valid!
)

pause
