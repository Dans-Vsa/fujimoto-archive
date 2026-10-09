# FUJIMOTO ARCHIVE

Unofficial fan hub of Tatsuki Fujimoto's works — profile, every work (serials, one-shots,
collections, unpublished contest entries), career timeline, adaptations and awards.
Each work links to its **own blog**; works without one yet show "Blog segera hadir".

- Vanilla HTML/CSS/JS, no build. Design spec: `DESIGN.md` (Vercel base, "bookshelf": light neutral UI, real volume covers carry the color, one red accent).
- All data lives in `js/works.js` (`WORKS`, `PROFILE`), bilingual `{id, en}`.
- **Adding a blog for a work:** set its `blog` field to the blog URL — card, detail page and button update automatically.
- Detail pages: `karya.html?id=<work id>`.
- After changing CSS/JS, bump the `?v=N` query in both HTML files.

Run locally: `python -m http.server 5520`

Linked blogs: Chainsaw Man → https://dans-vsa.github.io/chainsaw-man-fanblog/

Covers live in `assets/covers/` (WebP, official Shueisha art via the Chainsaw Man Fandom Wiki; four copied from the CSM blog's assets). One-shots use their original magazine title page (`assets/covers/<id>.webp`, same Fandom source); the `col` field notes which collection volume they appear in. Only the two unpublished contest manuscripts have no image and render as a manuscript page. Copy rule: no em/en dashes in visible text.
