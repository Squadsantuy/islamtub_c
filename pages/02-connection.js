document.addEventListener("DOMContentLoaded", async () => {
    const { Network } = Capacitor.Plugins;
    const status = await Network.getStatus();
    if (!status.connected) {
        Swal.fire({
            title: '🚨 Error 🚨',
            text: 'Kamu sedang offline. Pastikan Internet aktif dulu ya 🙏😁',
            confirmButtonText: 'Kembali'
        });
    } else {
        console.log("✅ Online:", status.connectionType);
    }
    Network.addListener("networkStatusChange", (status) => {
        console.log("Network status:", status);
        if (!status.connected) {
            Swal.fire({
                title: '⚠️ Offline ⚠️',
                text: 'Koneksi internet kamu terputus🙏😁',
                confirmButtonText: 'OK'
            });
        }
    });
});
