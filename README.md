# FUJIMOTO ARCHIVE

Unofficial fan hub of Tatsuki Fujimoto's works — profile, every work (serials, one-shots,
collections, unpublished contest entries), career timeline, adaptations and awards.
Each work links to its **own blog**; works without one yet show "Blog segera hadir".

- Vanilla HTML/CSS/JS, no build. Design spec: `DESIGN.md` (Wired base, same family as the CSM blog).
- All data lives in `js/works.js` (`WORKS`, `PROFILE`), bilingual `{id, en}`.
- **Adding a blog for a work:** set its `blog` field to the blog URL — card, detail page and button update automatically.
- Detail pages: `karya.html?id=<work id>`.
- After changing CSS/JS, bump the `?v=N` query in both HTML files.

Run locally: `python -m http.server 5520`

Linked blogs: Chainsaw Man → https://dans-vsa.github.io/chainsaw-man-fanblog/
