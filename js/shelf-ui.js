/* Teks UI rak 3D (index.html) dalam ID/EN + katalog statis cadangan.
   Dimuat sebelum modul Three.js; modul membaca window.SHELF_T dan window.SHELF_LANG. */
(() => {
  const LANG = localStorage.getItem("fa-lang") === "en" ? "en" : "id";
  const T = {
    id: {
      identitySub: "Semua karya Tatsuki Fujimoto",
      navArchive: "Arsip lengkap",
      edition: "Arsip fan · 2011-2026",
      microBrowse: "Roda mouse · panah · pilih",
      open: "Buka",
      prevVolume: "Karya sebelumnya",
      nextVolume: "Karya berikutnya",
      markersLabel: "Pilih karya",
      indexLabel: "Indeks karya",
      browseLabel: "Navigasi rak",
      closeDetail: "Kembalikan buku ke rak",
      dtVenue: "Terbit di",
      dtFormat: "Format",
      dtYears: "Tahun",
      dtJp: "Judul Jepang",
      pagesLabel: "Lihat halaman contoh",
      prevPage: "Halaman sebelumnya",
      nextPage: "Halaman berikutnya",
      pageClosed: "Tertutup",
      pageHint: "Klik buku untuk membuka",
      openBook: "Buka buku",
      closeBook: "Tutup buku",
      resetView: "Atur ulang tampilan",
      microClosed: "Seret sampul atau klik sekali untuk membuka · Seret latar untuk memutar",
      microOpen: "Seret halaman · Seret sampul untuk menutup · Seret latar untuk memutar",
      detailPage: "Detail karya",
      openBlog: "Buka blog",
      blogSoon: "Blog segera hadir",
      loading: "Menyusun rak",
      fallbackKicker: "Fujimoto Archive · Katalog statis",
      fallbackTitle: "Enam belas karya, satu rak.",
      fallbackStatus: "Katalog lengkap tetap bisa dibaca selama rak interaktif disiapkan.",
      fallbackFoot1: "Situs fan tidak resmi. Semua karya milik Tatsuki Fujimoto dan Shueisha. Sampul volume dari Chainsaw Man Fandom Wiki; sampul one-shot dari key visual anime Tatsuki Fujimoto 17-26 dan key art Shōnen Jump+.",
      fallbackFoot2: "Rak 3D diadaptasi dari ThreeUI Complete Shelf (Three.js r165).",
      volume: "Volume",
      type: { serial: "Serial", "oneshot-long": "One-shot panjang", oneshot: "One-shot", collection: "Kumpulan cerpen", unpublished: "Tidak terbit" },
      chapters: ["Premis", "Sinopsis", "Jejak"],
      spread: ["Halaman judul", "Plat", "Catatan", "Sistem", "Kolofon"],
      chapterTex: "BAB",
      plate1: "PLAT 01  /  MOTIF",
      plate2: "PLAT 02  /  LINIMASA",
      notesTex: "CATATAN",
      colophonTex: "KOLOFON",
      fanEdition: "EDISI ARSIP FAN",
      colophonNote: "Disusun untuk Fujimoto Archive, arsip fan yang bukan edisi resmi.",
      noLegacy: "Belum ada adaptasi atau penghargaan yang tercatat.",
      selectVolume: (i, t) => `Pilih karya ${i}: ${t}`,
      openTitle: (t) => `Buka ${t}`,
      selectedLive: (i, n, t, note) => `Karya ${i} dari ${n} dipilih: ${t}. ${note}`,
      pageLive: (i, n, label) => `Halaman ${i} dari ${n}: ${label}.`,
      openedLive: (t) => `${t} terbuka di halaman judul. Seret halaman ke samping atau pakai tombol panah untuk membaca.`,
      closedLive: (t) => `${t} ditutup. Seret sampul, klik buku, atau pakai Buka buku untuk mulai membaca.`,
      openingLive: (t) => `Membuka ${t}. Seret sampul, klik buku, atau pakai Buka buku untuk mulai membaca.`,
      returningLive: (t) => `Mengembalikan ${t} ke rak.`,
      returnedLive: (t) => `${t} sudah kembali ke rak.`,
      resetLive: (t) => `Tampilan ${t} diatur ulang.`,
      webglFail: "WebGL tidak tersedia di browser ini. Katalog statis lengkap tetap tersedia.",
      ctxLost: "Tampilan 3D berhenti karena konteks grafis hilang. Katalog statis tetap tersedia; muat ulang untuk memulihkan.",
      prepFail: "Rak interaktif gagal disiapkan. Katalog statis lengkap tetap tersedia."
    },
    en: {
      identitySub: "Every work by Tatsuki Fujimoto",
      navArchive: "Full archive",
      edition: "Fan archive · 2011-2026",
      microBrowse: "Wheel · arrows · select",
      open: "Open",
      prevVolume: "Previous work",
      nextVolume: "Next work",
      markersLabel: "Choose a work",
      indexLabel: "Work index",
      browseLabel: "Shelf navigation",
      closeDetail: "Return book to the shelf",
      dtVenue: "Published in",
      dtFormat: "Format",
      dtYears: "Years",
      dtJp: "Japanese title",
      pagesLabel: "Browse sample pages",
      prevPage: "Previous page",
      nextPage: "Next page",
      pageClosed: "Closed",
      pageHint: "Click book to open",
      openBook: "Open book",
      closeBook: "Close book",
      resetView: "Reset view",
      microClosed: "Drag cover or click once to open · Background to orbit",
      microOpen: "Drag pages · Drag cover to close · Background to orbit",
      detailPage: "Work details",
      openBlog: "Open blog",
      blogSoon: "Blog coming soon",
      loading: "Arranging the shelf",
      fallbackKicker: "Fujimoto Archive · Static catalog",
      fallbackTitle: "Sixteen works, one shelf.",
      fallbackStatus: "The complete catalog remains readable while the interactive shelf is prepared.",
      fallbackFoot1: "Unofficial fan site. All works belong to Tatsuki Fujimoto and Shueisha. Volume covers via the Chainsaw Man Fandom Wiki; one-shot covers from the Tatsuki Fujimoto 17-26 anime key visuals and Shōnen Jump+ key art.",
      fallbackFoot2: "3D shelf adapted from ThreeUI Complete Shelf (Three.js r165).",
      volume: "Volume",
      type: { serial: "Serial", "oneshot-long": "Long one-shot", oneshot: "One-shot", collection: "Short story collection", unpublished: "Unpublished" },
      chapters: ["Premise", "Synopsis", "Legacy"],
      spread: ["Title page", "Plate", "Notes", "System", "Colophon"],
      chapterTex: "CHAPTER",
      plate1: "PLATE 01  /  MOTIF",
      plate2: "PLATE 02  /  TIMELINE",
      notesTex: "NOTES",
      colophonTex: "COLOPHON",
      fanEdition: "FAN ARCHIVE EDITION",
      colophonNote: "Compiled for Fujimoto Archive, a fan archive and not an official edition.",
      noLegacy: "No adaptations or awards recorded yet.",
      selectVolume: (i, t) => `Select work ${i}: ${t}`,
      openTitle: (t) => `Open ${t}`,
      selectedLive: (i, n, t, note) => `Selected work ${i} of ${n}: ${t}. ${note}`,
      pageLive: (i, n, label) => `Page ${i} of ${n}: ${label}.`,
      openedLive: (t) => `${t} opened to its title page. Drag a page horizontally or use the arrow controls to read.`,
      closedLive: (t) => `${t} closed. Drag the cover, click the book, or use Open book to begin reading.`,
      openingLive: (t) => `Opening ${t}. Drag the cover, click the book, or use Open book to begin reading.`,
      returningLive: (t) => `Returning ${t} to the shelf.`,
      returnedLive: (t) => `${t} returned to the shelf.`,
      resetLive: (t) => `Inspection view reset for ${t}.`,
      webglFail: "WebGL is unavailable in this browser. The complete static catalog remains available.",
      ctxLost: "The 3D view paused after losing its graphics context. The static catalog remains available; reload to restore inspection.",
      prepFail: "The interactive shelf could not be prepared. The complete static catalog remains available."
    }
  }[LANG];

  window.SHELF_LANG = LANG;
  window.SHELF_T = T;
  document.documentElement.lang = LANG;

  document.querySelectorAll("[data-t]").forEach((el) => { el.textContent = T[el.dataset.t]; });
  document.querySelectorAll("[data-t-aria]").forEach((el) => { el.setAttribute("aria-label", T[el.dataset.tAria]); });

  // Bahasa disimpan bersama halaman lain; muat ulang agar tekstur 3D ikut berganti bahasa.
  document.querySelectorAll(".lang-toggle button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === LANG));
    button.addEventListener("click", () => {
      if (button.dataset.lang === LANG) return;
      localStorage.setItem("fa-lang", button.dataset.lang);
      location.reload();
    });
  });

  // Katalog statis: tampil bila WebGL tidak tersedia
  const grid = document.querySelector(".fallback__grid");
  if (grid && typeof WORKS !== "undefined") {
    SHELF_ORDER.forEach((id) => {
      const w = WORKS.find((x) => x.id === id);
      const v = SHELF_VISUALS[id];
      const a = document.createElement("a");
      a.className = "fallback-book";
      a.href = `karya.html?id=${w.id}`;
      a.style.cssText = `--book-color:${v.color};--book-foil:${v.foil};--book-height:${Math.round(v.height * 240)}px`;
      if (w.cover) {
        const img = document.createElement("img");
        img.src = w.cover; img.alt = ""; img.loading = "lazy"; img.width = 764; img.height = 1200;
        a.append(img);
      }
      const year = document.createElement("span"); year.textContent = w.end ? `${w.year}-${w.end}` : `${w.year}`;
      const title = document.createElement("strong"); title.textContent = w.title;
      a.append(year, title);
      grid.append(a);
    });
  }
})();
