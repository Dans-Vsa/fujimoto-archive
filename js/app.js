/* Fujimoto Archive: render hub (index.html) dan halaman karya (karya.html) */
(() => {
  const UI = {
    id: {
      skip: "Lewati ke konten",
      "nav.works": "Karya", "nav.oneshots": "One-shot", "nav.timeline": "Linimasa",
      "nav.adaptations": "Adaptasi", "nav.awards": "Penghargaan", "nav.back": "Semua karya",
      "hero.dek": "Semua karyanya dalam satu rak, dari one-shot lomba di usia 17 sampai Chainsaw Man.",
      "hero.cta": "Lihat karya",
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
      "hero.dek": "His whole body of work on one shelf, from a contest one-shot at 17 to Chainsaw Man.",
      "hero.cta": "See the works",
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

  /* ── Hub ─────────────────────────────────────── */
  const SHELF = ["chainsaw-man", "fire-punch", "look-back", "goodbye-eri", "17-26"];

  function renderHub() {
    // Hero: tumpukan sampul asli
    const stack = ["22-26", "17-21", "goodbye-eri", "look-back", "fire-punch", "chainsaw-man"];
    $("#stack").innerHTML = stack.map((c, i) => `<img class="stack__item" style="--i:${i}" src="assets/covers/${c}.webp" alt="" width="764" height="1200"${i === stack.length - 1 ? ' fetchpriority="high"' : ""}>`).join("");

    $("#bio").textContent = L(PROFILE.bio);
    $("#profile-facts").innerHTML = PROFILE.facts.map((f) => `<div><dt>${L(f.k)}</dt><dd>${L(f.v)}</dd></div>`).join("");

    // Rak karya
    $("#shelf").innerHTML = SHELF.map((id) => {
      const w = byId[id];
      const wide = id === "chainsaw-man" || id === "goodbye-eri" || id === "17-26";
      const covers = w.cover2
        ? `<div class="pair">${img(w.cover, `${w.title} 17-21`)}${img(w.cover2, `${w.title} 22-26`)}</div>`
        : img(w.cover, `${w.title}, ${t("vol")} 1`);
      return `
        <article class="book${wide ? " book--wide" : ""}${w.blog ? " book--live" : ""}">
          <a class="book__cover" href="${href(w)}" tabindex="-1" aria-hidden="true">${covers}</a>
          <div class="book__body">
            <p class="meta">${t("type")[w.type]}<span>${years(w)}</span></p>
            <h3 class="book__title"><a href="${href(w)}">${esc(w.title)}</a></h3>
            <p class="book__tag">${esc(L(w.tagline))}</p>
            ${wide ? `<p class="book__syn">${esc(L(w.synopsis))}</p>` : ""}
            <div class="book__foot">${blog(w, wide && !!w.blog)}</div>
          </div>
        </article>`;
    }).join("");

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
      const v = UI[lang][el.dataset.i18n];
      if (typeof v === "string") el.textContent = v;
    });
    document.querySelectorAll(".lang__btn").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    if ($("#shelf")) renderHub(); else renderDetail();
  }

  document.addEventListener("click", (e) => {
    const lb = e.target.closest(".lang__btn");
    if (lb) { lang = lb.dataset.lang; localStorage.setItem("fa-lang", lang); applyLang(); }
  });

  applyLang();
})();
