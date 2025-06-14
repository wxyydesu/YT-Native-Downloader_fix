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

  fetch("https://api.github.com/repos/wxyydesu/YT-Native-Downloader_fix/releases/latest")
    .then(response => response.json())
    .then(data => {
      console.log("GitHub API response:", data); // Debug log

      // Ambil versi terbaru dan hilangkan awalan "v" kalau ada
      const latestVersionRaw = data.tag_name || data.name || "";
      const latestVersion = latestVersionRaw.replace(/^v/i, "").trim();

      const localVersion = "1.1";
      updateStatus.textContent = "Latest: " + latestVersion;

      // Jika update tersedia
      if (latestVersion !== localVersion) {
        updateStatus.textContent += " 🚀 Update tersedia!";

        // Hapus tombol sebelumnya jika ada
        const existingBtn = document.getElementById("update-button");
        if (existingBtn) existingBtn.remove();

        // Tambah tombol update
        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Download Update";
        updateBtn.className = "button";
        updateBtn.id = "update-button";
        updateBtn.style.marginTop = "8px";
        updateBtn.onclick = () => {
          chrome.tabs.create({ url: data.html_url });
        };

        updateStatus.appendChild(document.createElement("br"));
        updateStatus.appendChild(updateBtn);
      } else {
        updateStatus.textContent += " ✅ Kamu sudah pakai versi terbaru.";
      }
    })
    .catch(err => {
      updateStatus.textContent = "Gagal cek update 😢";
      console.error(err);
    });
});
