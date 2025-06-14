<p align="center">
  <img src="https://raw.githubusercontent.com/bugarwahyu/yt-native-downloader/main/assets/logo.svg" alt="Logo" width="150" />
</p>

<h1 align="center">YT Native Downloader</h1>

<p align="center">
  🎥 Chrome Extension + Python Native Messaging untuk mengunduh video/audio dari YouTube secara lokal (MP4 & MP3), tanpa server!
</p>

<p align="center">
  <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg?logo=python" /></a>
  <a href="https://github.com/yt-dlp/yt-dlp"><img src="https://img.shields.io/badge/yt--dlp-powered-lightgrey?logo=youtube" /></a>
  <a href="https://www.gyan.dev/ffmpeg/builds/"><img src="https://img.shields.io/badge/FFmpeg-enabled-brightgreen?logo=ffmpeg" /></a>
  <img src="https://img.shields.io/badge/platform-Windows-lightblue" />
</p>

---

## ⚙️ Fitur
- ✅ Download video/audio dari YouTube dengan sekali klik
- 🧠 Terintegrasi dengan `yt-dlp` dan `ffmpeg`
- 🔒 Proses berjalan lokal 100% (tanpa API/server)
- 🧩 Komunikasi antara Chrome ↔ Python (Native Messaging)
- 🖥️ Dirancang untuk sistem Windows

---

## 🔧 Cara Instalasi

### 1. Install FFmpeg
- Unduh: [ffmpeg-release-essentials.zip](https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip)
- Ekstrak ke folder: `C:\ffmpeg\`
- Tambahkan ke PATH:
Control Panel > System > Environment Variables > Edit Path > New
Tambahkan: C:\ffmpeg\bin

markdown
Copy
Edit

### 2. Download yt-dlp
- Unduh versi terbaru dari:
[https://github.com/yt-dlp/yt-dlp/releases](https://github.com/yt-dlp/yt-dlp/releases)

### 3. Konfigurasi Native Messaging
- Pindahkan file `com.yt-dlp.yt-dlp.json` ke:
C:\Users<NAMA_KAMU>\AppData\Local\Google\Chrome\User Data\NativeMessagingHosts\

yaml
Copy
Edit
- Edit bagian:
- `"path"` → arahkan ke lokasi `host.py`
- `"allowed_origins"` → sesuaikan dengan ID ekstensi kamu

### 4. Jalankan File Registry
- Jalankan `com.yt-dlp.yt-dlp.reg` untuk mendaftarkan host

### 5. Load Ekstensi di Chrome
- Buka `chrome://extensions/`
- Aktifkan **Developer Mode**
- Klik **Load unpacked**, lalu pilih folder `extension/`

---

## 🖼️ Screenshot

<p align="center">
<img src="https://raw.githubusercontent.com/bugarwahyu/yt-native-downloader/main/assets/screenshot-popup.png" width="450" alt="Popup UI Preview" />
<img src="https://raw.githubusercontent.com/wxyydesu/YT-Native-Downloader_fix/main/assets/InSELECT.png" width="450" alt="Popup UI Preview" />
</p>

---

## 📁 Sumber Utama
- 🧰 yt-dlp: [yt-dlp/releases](https://github.com/yt-dlp/yt-dlp/releases)
- 🎞️ FFmpeg (Windows): [gyan.dev](https://www.gyan.dev/ffmpeg/builds/)
- 🐧 FFmpeg (Linux): [johnvansickle.com](https://johnvansickle.com/ffmpeg/releases/)

---

## 💻 Lisensi

MIT © [Bugar Wahyu](https://github.com/bugarwahyu)