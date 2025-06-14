document.getElementById("download").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab && tab.url.includes("youtube.com/watch")) {
    chrome.runtime.sendNativeMessage("com.yt.host", { url: tab.url }, (response) => {
      console.log("Native response:", response);
    });
  } else {
    alert("Buka video YouTube dulu.");
  }
});

document.getElementById("checkUpdate").addEventListener("click", () => {
  const updateStatus = document.getElementById("update-status");
  updateStatus.textContent = "Checking...";

  fetch("https://github.com/wxyydesu/YT-Native-Downloader_fix/releases/latest")
    .then(response => response.json())
    .then(data => {
      const latestVersion = data.tag_name || data.name;
      updateStatus.textContent = "Latest: " + latestVersion;

      // Bandingkan dengan versi lokal
      const localVersion = "1.1"; // Atur versi lokal manual di sini
      if (latestVersion && latestVersion !== localVersion) {
        updateStatus.textContent += " 🚀 Update tersedia!";
      } else {
        updateStatus.textContent += " ✅ Kamu sudah pakai versi terbaru.";
      }
    })
    .catch(err => {
      updateStatus.textContent = "Gagal cek update 😢";
      console.error(err);
    });
});
