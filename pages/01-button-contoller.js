document.addEventListener('DOMContentLoaded', () => {
    const App = window.Capacitor?.Plugins?.App;
    if (!App) return console.warn('App plugin not available');
    console.log('✅ Listener siap');
    App.addListener('backButton', () => {
        const currentPage = window.location.pathname;
        const level1 = ['alquran.html', 'doa.html', 'hadist.html', 'maulid.html', 'praktek_ibadah.html', 'sholawat.html', 'sunnah.html', 'jadwal_solat.html', 'stream.html', 'tentang.html'];
        const level2 = ['alquran', 'doa', 'hadist', 'maulid', 'praktek_ibadah', 'sholawat', 'sunnah'];
        const level3 = ['lain_lain', 'terikat_waktu', 'umum'];
        if (level1.some(x => currentPage.includes(x))) {
            window.location.href = './dashboard.html';
        }
        else if (currentPage.includes('lain_lain') && currentPage.includes('doa')) {
            window.location.href = `../../doa.html`;
        }
        else if (level3.some(x => currentPage.includes(x)) && currentPage.includes('sunnah')) {
            window.location.href = `../../sunnah.html`;
        }
        else if (level2.some(x => currentPage.includes(x))) {
            const segments = currentPage.split('/');
            const parentPage = segments[segments.length - 2] + '.html';
            window.location.href = `../${parentPage}`;
        }
        else {
            Swal.fire({
                title: 'Keluar Aplikasi?',
                text: 'Apakah kamu yakin mau keluar?',
                showCancelButton: true,
                confirmButtonText: 'Keluar',
                cancelButtonText: 'Batal'
            }).then((result) => {
                if (result.isConfirmed) {
                    App.exitApp();
                }
            });
        }
    });
});