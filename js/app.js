/* Fujimoto Archive — render hub (index.html) & halaman karya (karya.html) */
(() => {
  const UI = {
    id: {
      skip: "Lewati ke konten",
      "nav.profile": "Profil", "nav.works": "Karya", "nav.timeline": "Linimasa",
      "nav.adaptations": "Adaptasi", "nav.awards": "Penghargaan", "nav.back": "← Semua karya",
      "hero.eyebrow": "Arsip fan · 2011 — 2026",
      "hero.dek": "Semua karya, dari one-shot lomba di usia 17 sampai Chainsaw Man. Pilih satu karya untuk masuk ke blognya sendiri.",
      "profile.eyebrow": "Profil mangaka", "profile.title": "Siapa Fujimoto?",
      "works.eyebrow": "Karya", "works.title": "Pilih karya, masuk ke blognya",
      "timeline.eyebrow": "Track record", "timeline.title": "Linimasa karier",
      "adapt.eyebrow": "Layar", "adapt.title": "Adaptasi anime & film",
      "awards.eyebrow": "Pengakuan", "awards.title": "Penghargaan",
      "footer.note": "Situs fan tidak resmi. Semua karya © Tatsuki Fujimoto / Shueisha. Data dari Wikipedia & sumber resmi, dicek Oktober 2026.",
      "footer.read": "Baca legal di MANGA Plus",
      stat: { works: "karya", serial: "serial", oneshot: "one-shot", adapt: "adaptasi" },
      filter: { all: "Semua", serial: "Serial", oneshot: "One-shot", collection: "Koleksi", unpublished: "Tak terbit" },
      type: { serial: "Serial", "oneshot-long": "One-shot panjang", oneshot: "One-shot", collection: "Koleksi", unpublished: "Tak terbit" },
      blogLive: "Buka blog →", blogSoon: "Blog segera hadir", detail: "Detail karya",
      blogLiveLong: "Karya ini punya blog sendiri. Masuk untuk fun fact, karakter, arc, dan galeri.",
      blogSoonLong: "Blog khusus karya ini sedang disiapkan. Untuk sekarang, ini ringkasannya.",
      synopsis: "Sinopsis (bebas spoiler)", dates: "Tanggal penting", adaptations: "Adaptasi",
      awards: "Penghargaan", venue: "Terbit di", size: "Format", years: "Tahun",
      prev: "← Sebelumnya", next: "Berikutnya →", notFound: "Karya tidak ditemukan.",
      ongoing: "sekarang"
    },
    en: {
      skip: "Skip to content",
      "nav.profile": "Profile", "nav.works": "Works", "nav.timeline": "Timeline",
      "nav.adaptations": "Adaptations", "nav.awards": "Awards", "nav.back": "← All works",
      "hero.eyebrow": "Fan archive · 2011 — 2026",
      "hero.dek": "Every work, from a contest one-shot at 17 to Chainsaw Man. Pick one to step into its own blog.",
      "profile.eyebrow": "Mangaka profile", "profile.title": "Who is Fujimoto?",
      "works.eyebrow": "Works", "works.title": "Pick a work, enter its blog",
      "timeline.eyebrow": "Track record", "timeline.title": "Career timeline",
      "adapt.eyebrow": "On screen", "adapt.title": "Anime & film adaptations",
      "awards.eyebrow": "Recognition", "awards.title": "Awards",
      "footer.note": "Unofficial fan site. All works © Tatsuki Fujimoto / Shueisha. Data from Wikipedia & official sources, checked October 2026.",
      "footer.read": "Read legally on MANGA Plus",
      stat: { works: "works", serial: "serials", oneshot: "one-shots", adapt: "adaptations" },
      filter: { all: "All", serial: "Serials", oneshot: "One-shots", collection: "Collections", unpublished: "Unpublished" },
      type: { serial: "Serial", "oneshot-long": "Long one-shot", oneshot: "One-shot", collection: "Collection", unpublished: "Unpublished" },
      blogLive: "Open blog →", blogSoon: "Blog coming soon", detail: "Work details",
      blogLiveLong: "This work has its own blog. Step in for fun facts, characters, arcs, and a gallery.",
      blogSoonLong: "A dedicated blog for this work is in the making. For now, here's the overview.",
      synopsis: "Synopsis (spoiler-free)", dates: "Key dates", adaptations: "Adaptations",
      awards: "Awards", venue: "Published in", size: "Format", years: "Years",
      prev: "← Previous", next: "Next →", notFound: "Work not found.",
      ongoing: "now"
    }
  };

  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  let lang = localStorage.getItem("fa-lang") || "id";
  let filter = "all";

  const t = (k) => UI[lang][k];
  const L = (o) => (o && typeof o === "object" ? o[lang] : o);
  const years = (w) => (w.end ? `${w.year}–${w.end}` : `${w.year}`);
  const group = (type) => (type === "oneshot-long" ? "oneshot" : type);
  const byYear = [...WORKS].sort((a, b) => a.year - b.year || (b.end || 0) - (a.end || 0));
  const fmtDate = (d) => d.length === 4 ? d : new Date(d + "T00:00:00").toLocaleDateString(lang === "id" ? "id-ID" : "en-GB", { day: "numeric", month: "long", year: "numeric" });

  function cover(w, big) {
    return `<div class="cover${big ? " cover--big" : ""}" style="--work:${w.accent}" aria-hidden="true">
      <span class="cover__year">${years(w)}</span>
      <span class="cover__title">${esc(w.title)}</span>
      <span class="cover__jp" lang="ja">${esc(w.jp)}</span>
    </div>`;
  }

  function blogLink(w, cls = "") {
    return w.blog
      ? `<a class="btn btn--work ${cls}" href="${w.blog}" target="_blank" rel="noopener">${t("blogLive")}</a>`
      : `<span class="badge-soon ${cls}">${t("blogSoon")}</span>`;
  }

  /* ── Hub ─────────────────────────────────────── */
  function renderHub() {
    const s = t("stat");
    // Episode antologi 17-26 sudah tercakup di entri koleksi, jadi tidak dihitung dua kali
    const adapts = WORKS.flatMap((w) => w.adaptations.map((a) => ({ ...a, w })))
      .filter((a) => !/Episode/.test(a.id))
      .sort((a, b) => a.year - b.year);
    const nAdapt = adapts.length;
    $("#stats").innerHTML = [
      [WORKS.length, s.works],
      [WORKS.filter((w) => w.type === "serial").length, s.serial],
      [WORKS.filter((w) => group(w.type) === "oneshot").length, s.oneshot],
      [nAdapt, s.adapt]
    ].map(([n, l]) => `<div><dt>${n}</dt><dd>${l}</dd></div>`).join("");

    $("#bio").textContent = L(PROFILE.bio);
    $("#profile-facts").innerHTML = PROFILE.facts.map((f) => `<div><dt>${L(f.k)}</dt><dd>${L(f.v)}</dd></div>`).join("");

    const f = t("filter");
    $("#filters").innerHTML = Object.keys(f).map((k) =>
      `<button class="chip" data-filter="${k}" aria-pressed="${k === filter}">${f[k]}</button>`).join("");

    renderGrid();

    $("#timeline-list").innerHTML = byYear.map((w) => `
      <li class="tl" style="--work:${w.accent}">
        <span class="tl__year">${years(w)}</span>
        <a class="tl__title" href="karya.html?id=${w.id}">${esc(w.title)}</a>
        <span class="tl__meta">${t("type")[w.type]} · ${L(w.venue)}</span>
      </li>`).join("");

    $("#adapt-list").innerHTML = adapts.map((a) => `
      <li class="row" style="--work:${a.w.accent}"><span class="row__year">${a.year}</span>
        <span><a class="row__work" href="karya.html?id=${a.w.id}">${esc(a.w.title)}</a><br>${esc(L(a))}</span></li>`).join("");

    const awards = WORKS.flatMap((w) => w.awards.map((a) => ({ ...a, w })));
    $("#award-list").innerHTML = awards.map((a) => `
      <li class="row" style="--work:${a.w.accent}"><span class="row__year">★</span>
        <span><a class="row__work" href="karya.html?id=${a.w.id}">${esc(a.w.title)}</a><br>${esc(L(a))}</span></li>`).join("");
  }

  function renderGrid() {
    const list = WORKS.filter((w) => filter === "all" || group(w.type) === filter);
    $("#works-grid").innerHTML = list.map((w) => `
      <article class="work${w.featured ? " work--featured" : ""}" style="--work:${w.accent}">
        <a class="work__link" href="${w.blog || `karya.html?id=${w.id}`}"${w.blog ? ' target="_blank" rel="noopener"' : ""}>
          ${cover(w)}
          <div class="work__body">
            <p class="work__meta">${t("type")[w.type]} · ${years(w)}</p>
            <h3 class="work__title">${esc(w.title)}</h3>
            <p class="work__tag">${esc(L(w.tagline))}</p>
          </div>
        </a>
        <div class="work__foot">
          ${blogLink(w)}
          <a class="work__more" href="karya.html?id=${w.id}">${t("detail")}</a>
        </div>
      </article>`).join("");
  }

  /* ── Detail ──────────────────────────────────── */
  function renderDetail() {
    const id = new URLSearchParams(location.search).get("id");
    const i = byYear.findIndex((w) => w.id === id);
    const main = $(".detail");
    if (i < 0) { main.innerHTML = `<div class="container section"><p class="lede">${t("notFound")}</p></div>`; return; }
    const w = byYear[i], prev = byYear[i - 1], next = byYear[i + 1];
    document.title = `${w.title} — FUJIMOTO ARCHIVE`;
    document.documentElement.style.setProperty("--work", w.accent);

    const list = (title, items, fn) => items.length ? `<h2 class="h3">${title}</h2><ul class="rows">${items.map(fn).join("")}</ul>` : "";

    main.innerHTML = `
      <section class="detail__hero" style="--work:${w.accent}">
        <div class="container detail__grid">
          ${cover(w, true)}
          <div>
            <p class="eyebrow eyebrow--work">${t("type")[w.type]}</p>
            <h1 class="detail__title">${esc(w.title)}</h1>
            <p class="hero__jp" lang="ja">${esc(w.jp)}</p>
            <p class="lede">${esc(L(w.tagline))}</p>
            <dl class="facts facts--tight">
              <div><dt>${t("years")}</dt><dd>${years(w)}</dd></div>
              <div><dt>${t("venue")}</dt><dd>${esc(L(w.venue))}</dd></div>
              <div><dt>${t("size")}</dt><dd>${esc(L(w.size))}</dd></div>
            </dl>
            <div class="blogbox${w.blog ? " blogbox--live" : ""}">
              <p>${w.blog ? t("blogLiveLong") : t("blogSoonLong")}</p>
              ${blogLink(w)}
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container prose">
          <h2 class="h3">${t("synopsis")}</h2>
          <p>${esc(L(w.synopsis))}</p>
          ${list(t("dates"), w.dates, (d) => `<li class="row"><span class="row__year">${fmtDate(d.d)}</span><span>${esc(L(d))}</span></li>`)}
          ${list(t("adaptations"), w.adaptations, (a) => `<li class="row"><span class="row__year">${a.year}</span><span>${esc(L(a))}</span></li>`)}
          ${list(t("awards"), w.awards, (a) => `<li class="row"><span class="row__year">★</span><span>${esc(L(a))}</span></li>`)}
          <nav class="pager" aria-label="Karya">
            ${prev ? `<a href="karya.html?id=${prev.id}"><small>${t("prev")}</small>${esc(prev.title)}</a>` : "<span></span>"}
            ${next ? `<a class="pager__next" href="karya.html?id=${next.id}"><small>${t("next")}</small>${esc(next.title)}</a>` : ""}
          </nav>
        </div>
      </section>`;
  }

  /* ── Shared ──────────────────────────────────── */
  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = UI[lang][el.dataset.i18n];
      if (typeof v === "string") el.textContent = v;
    });
    document.querySelectorAll(".lang__btn").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    if ($("#works-grid")) renderHub(); else renderDetail();
  }

  document.addEventListener("click", (e) => {
    const lb = e.target.closest(".lang__btn");
    if (lb) { lang = lb.dataset.lang; localStorage.setItem("fa-lang", lang); applyLang(); return; }
    const chip = e.target.closest(".chip");
    if (chip) {
      filter = chip.dataset.filter;
      document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === chip));
      renderGrid();
    }
  });

  applyLang();
})();
