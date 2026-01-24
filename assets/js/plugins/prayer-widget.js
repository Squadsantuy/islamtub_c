// Konfigurasi Default (Jika GPS mati)
const defaultLoc = { city: "Jakarta", lat: -6.2088, lon: 106.8456 };

async function initPrayerWidget() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (p) => { 
        getPrayerTimes(p.coords.latitude, p.coords.longitude); 
        getCityName(p.coords.latitude, p.coords.longitude); 
      },
      () => { useDefault(); }
    );
  } else { useDefault(); }
}

function useDefault() {
  getPrayerTimes(defaultLoc.lat, defaultLoc.lon);
  document.getElementById('cityDisplay').innerText = defaultLoc.city;
}

async function getCityName(lat, lon) {
  try {
    const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`);
    const d = await r.json();
    let name = d.address.city || d.address.town || d.address.county || d.address.village || "Lokasi Anda";
    document.getElementById('cityDisplay').innerText = name.replace("Kota ", "").replace("Kabupaten ", "").toUpperCase();
  } catch (e) { document.getElementById('cityDisplay').innerText = "LOKASI ANDA"; }
}

async function getPrayerTimes(lat, lon) {
  try {
    const r = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=11`);
    const d = await r.json();
    const t = d.data.timings;
    const dt = d.data.date;

    document.getElementById('hijriPart').innerText = `${dt.hijri.day} ${dt.hijri.month.en} ${dt.hijri.year}`;
    document.getElementById('gregPart').innerText = dt.readable;

    renderPrayers(t);
    startClock(t);
  } catch (e) { console.error("API Error:", e); }
}

function renderPrayers(t) {
  const list = [
    {id:'Fajr', n:'Subuh'}, {id:'Dhuhr', n:'Dzuhur'}, 
    {id:'Asr', n:'Ashar'}, {id:'Maghrib', n:'Maghrib'}, {id:'Isha', n:'Isya'}
  ];
  document.getElementById('timesContainer').innerHTML = list.map(p => `
    <div class="pr-box" id="box-${p.id}">
      <span class="pr-name">${p.n}</span>
      <span class="pr-time">${t[p.id]}</span>
    </div>
  `).join('');
}

function startClock(t) {
  const pMap = [
    {k:'Fajr', n:'Subuh'}, {k:'Dhuhr', n:'Dzuhur'}, 
    {k:'Asr', n:'Ashar'}, {k:'Maghrib', n:'Maghrib'}, {k:'Isha', n:'Isya'}
  ];

  setInterval(() => {
    const now = new Date();
    let next = null;
    let diff = Infinity;

    for (let p of pMap) {
      const [h, m] = t[p.k].split(':').map(Number);
      const target = new Date();
      target.setHours(h, m, 0, 0);
      let d = target - now;
      if (d > 0 && d < diff) { diff = d; next = p; }
    }

    if (!next) {
      next = pMap[0];
      const [h, m] = t['Fajr'].split(':').map(Number);
      const tom = new Date(); tom.setDate(tom.getDate() + 1);
      tom.setHours(h, m, 0, 0);
      diff = tom - now;
    }

    const h = Math.floor((diff / 3600000) % 24).toString().padStart(2,'0');
    const m = Math.floor((diff / 60000) % 60).toString().padStart(2,'0');
    const s = Math.floor((diff / 1000) % 60).toString().padStart(2,'0');

    document.getElementById('countdownTimer').innerText = `${h}:${m}:${s}`;
    document.getElementById('nextPrayerName').innerText = `Menuju ${next.n}`;

    document.querySelectorAll('.pr-box').forEach(b => b.classList.remove('active'));
    const activeBox = document.getElementById(`box-${next.k}`);
    if(activeBox) activeBox.classList.add('active');
  }, 1000);
}

initPrayerWidget();
