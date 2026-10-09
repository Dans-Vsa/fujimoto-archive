/* Fujimoto Archive: render hub (index.html) dan halaman karya (karya.html) */
(() => {
  document.documentElement.classList.add("js");
  const UI = {
    id: {
      skip: "Lewati ke konten",
      "nav.works": "Karya", "nav.oneshots": "One-shot", "nav.timeline": "Linimasa",
      "nav.adaptations": "Adaptasi", "nav.awards": "Penghargaan", "nav.back": "Semua karya",
      "hero.dek": "Semua karyanya di satu rak. Arahkan kursor ke punggung buku.",
      "hero.dekTouch": "Semua karyanya di satu rak. Ketuk punggung buku.",
      "lamp.on": "Nyalakan lampu", "lamp.off": "Matikan lampu",
      "shelf.major": "Serial dan one-shot panjang", "shelf.short": "Cerpen 17-21, 22-26, dan lainnya",
      detail: "Detail karya",
      "profile.title": "Profil",
      "works.title": "Rak karya",
      "works.dek": "Karya yang punya blog sendiri langsung tersambung. Sisanya menyusul.",
      "oneshots.title": "One-shot dan karya awal",
      "oneshots.dek": "Delapan cerita pendek terkumpul di dua volume, dinamai sesuai usia Fujimoto saat menggambarnya.",
      "timeline.title": "Linimasa 2011 sampai 2026",
      "adapt.title": "Di layar",
      "awards.title": "Penghargaan",
      "footer.note": "Situs fan tidak resmi. Semua karya milik Tatsuki Fujimoto dan Shueisha. Gambar sampul dari Chainsaw Man Fandom Wiki. Data dari Wikipedia, dicek Oktober 2026.",
      "footer.read": "Baca legal di MANGA Plus",
      type: { serial: "Serial", "oneshot-long": "One-shot panjang", oneshot: "One-shot", collection: "Kumpulan cerpen", unpublished: "Tidak terbit" },
      blogLive: "Buka blog", blogSoon: "Blog segera hadir",
      vol: "Volume", other: "Lainnya", inVol: "Ada di volume",
      synopsis: "Sinopsis", dates: "Tanggal penting", adaptations: "Adaptasi", awards: "Penghargaan",
      venue: "Terbit di", size: "Format", years: "Tahun",
      prev: "Sebelumnya", next: "Berikutnya", notFound: "Karya tidak ditemukan.", back: "Kembali ke semua karya",
      blogLiveLong: "Karya ini punya blog sendiri, lengkap dengan fun fact, karakter, arc, dan galeri.",
      blogSoonLong: "Blog khusus karya ini sedang disiapkan. Untuk sekarang, ini ringkasannya.",
      awardTiles: [
        { n: "3×", t: "Harvey Award, Best Manga", s: "Chainsaw Man, 2021, 2022, 2023", id: "chainsaw-man" },
        { n: "66", t: "Shogakukan Manga Award ke-66", s: "Chainsaw Man, kategori shōnen, 2021", id: "chainsaw-man" },
        { n: "#1", t: "Kono Manga ga Sugoi!, pembaca pria", s: "Chainsaw Man (2021) dan Look Back (2022)", id: "look-back" }
      ],
      awardRest: "Sebelum debut, one-shot lombanya sudah menang tiga kali di Shueisha Crown Newcomers' Award (2013): Love is Blind, Kami Hikōki, dan Sasaki Stopped a Bullet."
    },
    en: {
      skip: "Skip to content",
      "nav.works": "Works", "nav.oneshots": "One-shots", "nav.timeline": "Timeline",
      "nav.adaptations": "Adaptations", "nav.awards": "Awards", "nav.back": "All works",
      "hero.dek": "His whole body of work on one shelf. Hover over a spine.",
      "hero.dekTouch": "His whole body of work on one shelf. Tap a spine.",
      "lamp.on": "Turn the lights on", "lamp.off": "Turn the lights off",
      "shelf.major": "Serials and long one-shots", "shelf.short": "Short stories 17-21, 22-26, and more",
      detail: "Work details",
      "profile.title": "Profile",
      "works.title": "The shelf",
      "works.dek": "Works with their own blog link straight to it. The rest are on the way.",
      "oneshots.title": "One-shots and early work",
      "oneshots.dek": "Eight short stories collected in two volumes, named after the age Fujimoto was when he drew them.",
      "timeline.title": "Timeline, 2011 to 2026",
      "adapt.title": "On screen",
      "awards.title": "Awards",
      "footer.note": "Unofficial fan site. All works belong to Tatsuki Fujimoto and Shueisha. Cover images from the Chainsaw Man Fandom Wiki. Data from Wikipedia, checked October 2026.",
      "footer.read": "Read legally on MANGA Plus",
      type: { serial: "Serial", "oneshot-long": "Long one-shot", oneshot: "One-shot", collection: "Short story collection", unpublished: "Unpublished" },
      blogLive: "Open blog", blogSoon: "Blog coming soon",
      vol: "Volume", other: "Other", inVol: "Collected in volume",
      synopsis: "Synopsis", dates: "Key dates", adaptations: "Adaptations", awards: "Awards",
      venue: "Published in", size: "Format", years: "Years",
      prev: "Previous", next: "Next", notFound: "Work not found.", back: "Back to all works",
      blogLiveLong: "This work has its own blog, with fun facts, characters, arcs, and a gallery.",
      blogSoonLong: "A dedicated blog for this work is in the making. For now, here is the overview.",
      awardTiles: [
        { n: "3×", t: "Harvey Award, Best Manga", s: "Chainsaw Man, 2021, 2022, 2023", id: "chainsaw-man" },
        { n: "66", t: "66th Shogakukan Manga Award", s: "Chainsaw Man, shōnen category, 2021", id: "chainsaw-man" },
        { n: "#1", t: "Kono Manga ga Sugoi!, male readers", s: "Chainsaw Man (2021) and Look Back (2022)", id: "look-back" }
      ],
      awardRest: "Before his debut, his contest one-shots won three times at Shueisha's Crown Newcomers' Award (2013): Love is Blind, Kami Hikōki, and Sasaki Stopped a Bullet."
    }
  };

  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  let lang = localStorage.getItem("fa-lang") || "id";

  const t = (k) => UI[lang][k];
  const L = (o) => (o && typeof o === "object" ? o[lang] : o);
  const byId = Object.fromEntries(WORKS.map((w) => [w.id, w]));
  const years = (w) => (w.end ? `${w.year}-${w.end}` : `${w.year}`);
  const byYear = [...WORKS].sort((a, b) => a.year - b.year || (b.end || 0) - (a.end || 0));
  const href = (w) => `karya.html?id=${w.id}`;
  const volCover = (v) => `assets/covers/${v}.webp`;
  const fmtDate = (d) => d.length === 4 ? d : new Date(d + "T00:00:00").toLocaleDateString(lang === "id" ? "id-ID" : "en-GB", { day: "numeric", month: "long", year: "numeric" });

  const img = (src, alt, cls = "cover") => `<img class="${cls}" src="${src}" alt="${esc(alt)}" loading="lazy" decoding="async" width="764" height="1200">`;
  const blog = (w, big) => w.blog
    ? `<a class="btn btn--accent${big ? "" : " btn--sm"}" href="${w.blog}" target="_blank" rel="noopener">${t("blogLive")} <span aria-hidden="true">↗</span></a>`
    : `<span class="soon">${t("blogSoon")}</span>`;

  /* ── Perpustakaan (hero) ─────────────────────── */
  const SHELF = ["chainsaw-man", "fire-punch", "look-back", "goodbye-eri", "17-26"];
  // Rak atas: karya besar. Rak bawah: cerpen per volume, lalu karya lain & naskah lomba.
  const ROWS = [
    { key: "shelf.major", ids: ["fire-punch", "chainsaw-man", "look-back", "goodbye-eri", "17-26"] },
    { key: "shelf.short", ids: ["chickens", "sasaki", "love-is-blind", "shikaku", "|", "mermaid-rhapsody", "nayuta", "woke-up-as-a-girl", "sisters", "|", "just-listen", "kami-hikoki", "seigi-no-mikata"] }
  ];
  const lib = { sel: localStorage.getItem("fa-book") || "chainsaw-man", lampOn: false, hoverTimer: 0 };
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  function renderLibrary() {
    if (!byId[lib.sel]) lib.sel = "chainsaw-man";
    let n = 0;
    $("#shelves").innerHTML = ROWS.map((row) => `
      <div class="shelf">
        <span class="shelf__label mono">${t(row.key)}</span>
        <ul class="shelf__books">
          ${row.ids.map((id) => {
            if (id === "|") return `<li class="gap" aria-hidden="true"></li>`;
            const w = byId[id], s = w.spine;
            return `<li class="slot" style="--i:${n++}">
              <button class="spine${w.type === "unpublished" ? " spine--ms" : ""}" data-id="${w.id}"
                style="--bg:${s.bg};--fg:${s.fg};--w:${s.w}px;--h:${s.h}px"
                aria-pressed="${w.id === lib.sel}" tabindex="${w.id === lib.sel ? 0 : -1}"
                aria-label="${esc(w.title)}, ${years(w)}">
                <span class="spine__band" aria-hidden="true"></span>
                <span class="spine__jp" lang="ja" aria-hidden="true">${esc(w.jp.replace(/[「」]/g, " "))}</span>
                <span class="spine__yr mono" aria-hidden="true">${String(w.year).slice(2)}</span>
              </button>
            </li>`;
          }).join("")}
          <li class="bookend" aria-hidden="true"></li>
        </ul>
      </div>`).join("");
    fillShelves();
    renderDesk(lib.sel, false);
    syncLamp();
    requestAnimationFrame(() => aimSpot(lib.sel));
  }

  // Buku lain di perpustakaan: dekorasi abu-abu yang mengisi sisa rak (tidak interaktif)
  const FILL_TONES = ["#24262b", "#2a2724", "#1f2828", "#2a2329", "#26282e", "#2e2b26", "#1d2024", "#2b2e2a"];
  function fillShelves() {
    let seed = 7;
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    document.querySelectorAll(".shelf__books").forEach((ul, row) => {
      const end = ul.querySelector(".bookend");
      let used = [...ul.children].reduce((s, li) => s + li.offsetWidth + 3, 0);
      const room = ul.clientWidth - 8;
      const frag = document.createDocumentFragment();
      while (used < room) {
        const wpx = Math.round(14 + rnd() * 20), h = Math.round((row ? 168 : 188) + rnd() * 52);
        if (used + wpx > room) break;
        const li = document.createElement("li");
        li.className = "filler";
        li.setAttribute("aria-hidden", "true");
        li.style.cssText = `--w:${wpx}px;--h:${h}px;--bg:${FILL_TONES[Math.floor(rnd() * FILL_TONES.length)]}${rnd() > 0.82 ? ";--lean:-6deg" : ""}`;
        frag.appendChild(li);
        used += wpx + 3;
      }
      ul.insertBefore(frag, end);
    });
  }

  // Meja baca: karya yang sedang disorot
  function deskArt(w) {
    const src = w.cover || (w.col && volCover(w.col));
    if (!src) {
      return `<div class="desk__art desk__art--ms" style="--bg:${w.spine.bg};--fg:${w.spine.fg}">
        <span class="desk__ms-title">${esc(w.title)}</span><span class="desk__ms-jp" lang="ja">${esc(w.jp)}</span>
        <span class="desk__ms-yr mono">${w.year}</span></div>`;
    }
    const pair = w.cover2 ? `<img class="desk__img desk__img--back" src="${w.cover2}" alt="" width="764" height="1200">` : "";
    return `<div class="desk__art">${pair}<img class="desk__img" src="${src}" alt="${esc(w.title)}" width="764" height="1200"></div>`;
  }

  function renderDesk(id, animate = true) {
    const w = byId[id], desk = $("#desk");
    const note = !w.cover && w.col ? `<p class="desk__note">${t("inVol")} ${w.col}</p>` : "";
    const html = `
      <div class="desk__tilt" id="tilt">${deskArt(w)}</div>
      <div class="desk__info">
        <p class="meta">${t("type")[w.type]}<span>${years(w)}</span></p>
        <h2 class="desk__title">${esc(w.title)}</h2>
        <p class="desk__tag">${esc(L(w.tagline))}</p>
        ${note}
        <div class="desk__actions">
          <a class="btn btn--ghost btn--sm" href="${href(w)}">${t("detail")}</a>
          ${blog(w, false)}
        </div>
      </div>`;
    desk.innerHTML = html;
    desk.dataset.id = id;
    desk.classList.toggle("is-swap", animate && !reduceMotion);
  }

  function select(id, { focus = false, persist = true } = {}) {
    if (!byId[id]) return;
    const changed = id !== $("#desk").dataset.id;
    if (persist) {
      lib.sel = id;
      localStorage.setItem("fa-book", id);
      document.querySelectorAll(".spine").forEach((b) => {
        const on = b.dataset.id === id;
        b.setAttribute("aria-pressed", on);
        b.tabIndex = on ? 0 : -1;
        if (on && focus) b.focus({ preventScroll: true });
      });
    }
    if (changed) renderDesk(id);
  }

  // Lampu sorot: posisi disimpan di CSS var --mx/--my (di-animate lewat @property)
  function aimSpot(id) {
    const stacks = $("#stacks"), b = document.querySelector(`.spine[data-id="${id}"]`);
    if (!stacks || !b) return;
    const r = stacks.getBoundingClientRect(), br = b.getBoundingClientRect();
    stacks.style.setProperty("--mx", `${br.left - r.left + br.width / 2}px`);
    stacks.style.setProperty("--my", `${br.top - r.top + br.height * 0.45}px`);
  }

  function syncLamp() {
    const btn = $("#lamp");
    if (!btn) return;
    $(".library").classList.toggle("is-lit", lib.lampOn);
    btn.setAttribute("aria-pressed", lib.lampOn);
    btn.textContent = t(lib.lampOn ? "lamp.off" : "lamp.on");
  }

  function bindLibrary() {
    const stacks = $("#stacks"), shelves = $("#shelves"), desk = $("#desk");
    if (!stacks) return;
    let raf = 0, px = 0, py = 0;

    stacks.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      const r = stacks.getBoundingClientRect();
      px = e.clientX - r.left; py = e.clientY - r.top;
      stacks.classList.add("is-tracking");
      if (!raf) raf = requestAnimationFrame(() => {
        stacks.style.setProperty("--mx", `${px}px`);
        stacks.style.setProperty("--my", `${py}px`);
        raf = 0;
      });
    });
    stacks.addEventListener("pointerleave", () => {
      stacks.classList.remove("is-tracking");
      clearTimeout(lib.hoverTimer);
      if ($("#desk").dataset.id !== lib.sel) renderDesk(lib.sel);
      aimSpot(lib.sel);
    });

    // Hover = pratinjau di meja; klik = pilih (tersimpan)
    shelves.addEventListener("pointerover", (e) => {
      const b = e.target.closest(".spine");
      if (!b || !canHover) return;
      clearTimeout(lib.hoverTimer);
      lib.hoverTimer = setTimeout(() => select(b.dataset.id, { persist: false }), 90);
    });
    shelves.addEventListener("click", (e) => {
      const b = e.target.closest(".spine");
      if (!b) return;
      select(b.dataset.id);
      if (!canHover) aimSpot(b.dataset.id);
      if (!canHover && innerWidth < 900) desk.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
    });
    shelves.addEventListener("focusin", (e) => {
      const b = e.target.closest(".spine");
      if (b && !stacks.classList.contains("is-tracking")) aimSpot(b.dataset.id);
    });

    // Navigasi keyboard di rak (roving tabindex)
    shelves.addEventListener("keydown", (e) => {
      const books = [...document.querySelectorAll(".spine")];
      const i = books.indexOf(document.activeElement);
      if (i < 0) return;
      const go = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: books.length - 1 }[e.key];
      if (go === undefined) {
        if (e.key === "Enter" && e.shiftKey) location.href = href(byId[books[i].dataset.id]);
        return;
      }
      e.preventDefault();
      const nb = books[(go + books.length) % books.length];
      select(nb.dataset.id, { focus: true });
      aimSpot(nb.dataset.id);
    });

    // Sampul di meja miring mengikuti kursor
    desk.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse" || reduceMotion) return;
      const tilt = $("#tilt"); if (!tilt) return;
      const r = tilt.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
      tilt.style.setProperty("--ry", `${(x * 14).toFixed(2)}deg`);
      tilt.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
      tilt.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
    });
    desk.addEventListener("pointerleave", () => {
      const tilt = $("#tilt"); if (!tilt) return;
      ["--rx", "--ry"].forEach((p) => tilt.style.setProperty(p, "0deg"));
    });

    $("#lamp").addEventListener("click", () => { lib.lampOn = !lib.lampOn; syncLamp(); });
    let rt = 0, lastW = innerWidth;
    addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        if (Math.abs(innerWidth - lastW) > 40) { lastW = innerWidth; document.querySelectorAll(".filler").forEach((f) => f.remove()); fillShelves(); }
        aimSpot(lib.sel);
      }, 150);
    }, { passive: true });
  }

  // Bagian lain muncul halus saat masuk layar
  function bindReveal() {
    const els = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -10% 0px" });
    els.forEach((el) => io.observe(el));
  }

  /* ── Hub ─────────────────────────────────────── */

  function renderHub() {
    renderLibrary();

    $("#bio").textContent = L(PROFILE.bio);
    $("#profile-facts").innerHTML = PROFILE.facts.map((f) => `<div><dt>${L(f.k)}</dt><dd>${L(f.v)}</dd></div>`).join("");

    // Indeks one-shot per volume
    const groups = [
      { key: "17-21", items: WORKS.filter((w) => w.col === "17-21") },
      { key: "22-26", items: WORKS.filter((w) => w.col === "22-26") },
      { key: null, items: WORKS.filter((w) => !w.col && !SHELF.includes(w.id)) }
    ];
    $("#index").innerHTML = groups.map((g) => `
      <div class="vol">
        <div class="vol__head">
          ${g.key ? `<a href="${href(byId["17-26"])}">${img(volCover(g.key), `${t("vol")} ${g.key}`, "vol__cover")}</a>` : ""}
          <h3 class="vol__title">${g.key ? `${t("vol")} <span class="mono">${g.key}</span>` : t("other")}</h3>
        </div>
        <ol class="vol__list">
          ${g.items.sort((a, b) => a.year - b.year).map((w) => `
            <li><a class="entry" href="${href(w)}">
              <span class="mono entry__year">${w.year}</span>
              <span class="entry__title">${esc(w.title)}<small lang="ja">${esc(w.jp)}</small></span>
              <span class="entry__venue">${esc(L(w.venue))}</span>
            </a></li>`).join("")}
        </ol>
      </div>`).join("");

    renderBand();

    // Di layar: poster Reze + daftar
    const adapts = WORKS.flatMap((w) => w.adaptations.map((a) => ({ ...a, w })))
      .filter((a) => !/Episode/.test(a.id)).sort((a, b) => a.year - b.year);
    const feat = adapts.find((a) => a.poster);
    $("#screen-grid").innerHTML = `
      <figure class="screen__feat">
        <img src="${feat.poster}" alt="Poster Chainsaw Man the Movie: Reze Arc" loading="lazy" width="1000" height="1414">
        <figcaption><span class="mono">${feat.year}</span> ${esc(L(feat))}</figcaption>
      </figure>
      <ol class="screen__list">
        ${adapts.filter((a) => a !== feat).map((a) => `
          <li><span class="mono">${a.year}</span>
            <div><a href="${href(a.w)}">${esc(a.w.title)}</a><p>${esc(L(a))}</p></div></li>`).join("")}
      </ol>`;

    $("#award-grid").innerHTML = t("awardTiles").map((a) => `
      <a class="award" href="${href(byId[a.id])}">
        <span class="award__n">${a.n}</span>
        <span class="award__t">${a.t}</span>
        <span class="award__s">${a.s}</span>
      </a>`).join("");
    $("#award-rest").textContent = t("awardRest");
  }

  // Linimasa: pita tahun horizontal, tiap karya di jalurnya sendiri
  function renderBand() {
    const Y0 = 2011, Y1 = 2026, lanes = [];
    const items = byYear.map((w) => {
      const s = w.year - Y0, e = (w.end || w.year) - Y0;
      let lane = lanes.findIndex((end) => end < s);
      if (lane < 0) { lane = lanes.length; lanes.push(-1); }
      lanes[lane] = e;
      return { w, s, e, lane };
    });
    const cols = Y1 - Y0 + 1;
    $("#band").innerHTML = `
      <div class="band__grid" style="--cols:${cols};--rows:${lanes.length}">
        ${Array.from({ length: cols }, (_, i) => `<span class="band__year mono" style="grid-column:${i + 1}">${Y0 + i}</span>`).join("")}
        ${items.map(({ w, s, e, lane }) => `
          <a class="band__item${w.end ? " band__item--run" : ""}" href="${href(w)}" title="${esc(w.title)} (${years(w)})"
             style="grid-column:${s + 1} / ${e + 2};grid-row:${lane + 2}">${esc(w.title)}</a>`).join("")}
      </div>`;
  }

  /* ── Detail ──────────────────────────────────── */
  function renderDetail() {
    const id = new URLSearchParams(location.search).get("id");
    const i = byYear.findIndex((w) => w.id === id);
    const main = $(".detail");
    if (i < 0) {
      main.innerHTML = `<div class="container section"><p class="lede">${t("notFound")}</p><a class="btn btn--ink" href="index.html#works">${t("back")}</a></div>`;
      return;
    }
    const w = byYear[i], prev = byYear[i - 1], next = byYear[i + 1];
    document.title = `${w.title}: Fujimoto Archive`;

    const cover = w.cover
      ? `<div class="detail__cover">${w.cover2 ? `<div class="pair">${img(w.cover, "17-21")}${img(w.cover2, "22-26")}</div>` : img(w.cover, w.title)}</div>`
      : w.col
        ? `<div class="detail__cover">${img(volCover(w.col), `${t("vol")} ${w.col}`)}<p class="detail__note">${t("inVol")} <a href="${href(byId["17-26"])}">${w.col}</a></p></div>`
        : "";
    const list = (title, items, fn) => items.length ? `<h2 class="h3">${title}</h2><ol class="facts-list">${items.map(fn).join("")}</ol>` : "";

    main.innerHTML = `
      <article class="container detail__grid${cover ? "" : " detail__grid--solo"}">
        ${cover}
        <div class="detail__body">
          <p class="meta">${t("type")[w.type]}<span>${years(w)}</span></p>
          <h1 class="detail__title">${esc(w.title)}</h1>
          <p class="hero__jp" lang="ja">${esc(w.jp)}</p>
          <p class="lede">${esc(L(w.tagline))}</p>
          <div class="blogbox${w.blog ? " blogbox--live" : ""}"><p>${w.blog ? t("blogLiveLong") : t("blogSoonLong")}</p>${blog(w, true)}</div>
          <dl class="profile__facts">
            <div><dt>${t("venue")}</dt><dd>${esc(L(w.venue))}</dd></div>
            <div><dt>${t("size")}</dt><dd>${esc(L(w.size))}</dd></div>
          </dl>
          <h2 class="h3">${t("synopsis")}</h2>
          <p class="prose">${esc(L(w.synopsis))}</p>
          ${list(t("dates"), w.dates, (d) => `<li><span class="mono">${fmtDate(d.d)}</span><span>${esc(L(d))}</span></li>`)}
          ${list(t("adaptations"), w.adaptations, (a) => `<li><span class="mono">${a.year}</span><span>${esc(L(a))}</span></li>`)}
          ${list(t("awards"), w.awards, (a) => `<li><span class="mono">${w.year}</span><span>${esc(L(a))}</span></li>`)}
          <nav class="pager" aria-label="${t("prev")} / ${t("next")}">
            ${prev ? `<a href="${href(prev)}"><small>${t("prev")}</small>${esc(prev.title)}</a>` : "<span></span>"}
            ${next ? `<a class="pager__next" href="${href(next)}"><small>${t("next")}</small>${esc(next.title)}</a>` : ""}
          </nav>
        </div>
      </article>`;
  }

  /* ── Shared ──────────────────────────────────── */
  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n === "hero.dek" && !canHover ? "hero.dekTouch" : el.dataset.i18n;
      const v = UI[lang][key];
      if (typeof v === "string") el.textContent = v;
    });
    document.querySelectorAll(".lang__btn").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    if ($("#shelves")) renderHub(); else renderDetail();
  }

  document.addEventListener("click", (e) => {
    const lb = e.target.closest(".lang__btn");
    if (lb) { lang = lb.dataset.lang; localStorage.setItem("fa-lang", lang); applyLang(); }
  });

  applyLang();
  if ($("#shelves")) { bindLibrary(); bindReveal(); }
})();
