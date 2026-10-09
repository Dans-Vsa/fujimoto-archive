/* Karya Tatsuki Fujimoto. Sumber: Wikipedia (Tatsuki Fujimoto, Tatsuki Fujimoto 17-26,
   Look Back), dicek 2026-10-09. Sinopsis ditulis ulang sendiri & bebas spoiler.
   blog: URL blog khusus karya itu (null = belum ada → tampil "segera hadir"). */

const WORKS = [
  {
    id: "chainsaw-man",
    spine: { bg: "#cf4f2d", fg: "#ffffff", w: 66, h: 248 },
    cover: "assets/covers/chainsaw-man.webp",
    title: "Chainsaw Man",
    jp: "チェンソーマン",
    type: "serial",
    year: 2018, end: 2026,
    featured: true,
    blog: "https://dans-vsa.github.io/chainsaw-man-fanblog/",
    venue: { id: "Weekly Shōnen Jump (Part 1) · Shōnen Jump+ (Part 2)", en: "Weekly Shōnen Jump (Part 1) · Shōnen Jump+ (Part 2)" },
    size: { id: "232 chapter · 24 volume", en: "232 chapters · 24 volumes" },
    tagline: {
      id: "Pemuda miskin, iblis gergaji, dan mimpi paling sederhana di dunia.",
      en: "A broke kid, a chainsaw devil, and the simplest dream in the world."
    },
    synopsis: {
      id: "Denji hidup terlilit utang yakuza dan memburu iblis bersama Pochita, iblis gergaji mesin kecil peliharaannya. Setelah dikhianati, Denji menyatu dengan Pochita dan menjadi Chainsaw Man, lalu direkrut organisasi pemburu iblis pemerintah. Kisahnya brutal, lucu, dan sering kali sangat sedih.",
      en: "Denji is drowning in yakuza debt, hunting devils with Pochita, his little chainsaw-devil pet. After a betrayal, Denji merges with Pochita and becomes Chainsaw Man, then gets recruited by a government devil-hunting agency. It is brutal, funny, and often devastatingly sad."
    },
    dates: [
      { d: "2018-12-03", id: "Part 1 mulai di Weekly Shōnen Jump", en: "Part 1 begins in Weekly Shōnen Jump" },
      { d: "2020-12-14", id: "Part 1 tamat (97 chapter)", en: "Part 1 ends (97 chapters)" },
      { d: "2022-07-13", id: "Part 2 mulai di Shōnen Jump+", en: "Part 2 begins on Shōnen Jump+" },
      { d: "2026-03-25", id: "Manga tamat di chapter 232", en: "Manga ends at chapter 232" }
    ],
    adaptations: [
      { year: 2022, id: "Anime TV, studio MAPPA", en: "TV anime by MAPPA" },
      { year: 2025, poster: "assets/covers/reze.webp", id: "Film Reze Arc, studio MAPPA", en: "Reze Arc film by MAPPA" },
      { year: 2025, id: "Anime Season 2 (Assassins Arc) diumumkan", en: "Season 2 (Assassins Arc) announced" }
    ],
    awards: [
      { id: "Shogakukan Manga Award ke-66 (2021), kategori shōnen", en: "66th Shogakukan Manga Award (2021), shōnen category" },
      { id: "Harvey Award Best Manga 2021, 2022, 2023", en: "Harvey Award for Best Manga 2021, 2022, 2023" },
      { id: "Peringkat 1 Kono Manga ga Sugoi! 2021, pembaca pria", en: "#1 in Kono Manga ga Sugoi! 2021, male readers" }
    ]
  },
  {
    id: "fire-punch",
    spine: { bg: "#b01528", fg: "#f5e4a8", w: 46, h: 248 },
    cover: "assets/covers/fire-punch.webp",
    title: "Fire Punch",
    jp: "ファイアパンチ",
    type: "serial",
    year: 2016, end: 2018,
    featured: true,
    blog: null,
    venue: { id: "Shōnen Jump+", en: "Shōnen Jump+" },
    size: { id: "8 volume", en: "8 volumes" },
    tagline: {
      id: "Dunia membeku. Seorang pemuda terbakar selamanya.",
      en: "A frozen world. A boy who never stops burning."
    },
    synopsis: {
      id: "Dunia tertutup salju abadi ulah sang “Penyihir Es”. Agni, pemilik berkah regenerasi, menyaksikan desanya dibakar oleh api yang tak bisa padam. Api itu kini melekat di tubuhnya sendiri. Terus terbakar tapi tak bisa mati, ia berangkat membalas dendam. Serial pertama Fujimoto, terkenal karena arahnya yang liar dan tak terduga.",
      en: "The world lies under endless snow brought by the “Ice Witch”. Agni, blessed with regeneration, watches his village burned by flames that never go out. Those flames now cling to his own body. Burning but unable to die, he sets out for revenge. Fujimoto's first serial, famous for its wild, unpredictable turns."
    },
    dates: [
      { d: "2016-04-18", id: "Mulai terbit di Shōnen Jump+", en: "Begins on Shōnen Jump+" },
      { d: "2018-01-01", id: "Tamat", en: "Ends" }
    ],
    adaptations: [],
    awards: []
  },
  {
    id: "look-back",
    spine: { bg: "#c6c964", fg: "#2b2a17", w: 32, h: 240 },
    cover: "assets/covers/look-back.webp",
    title: "Look Back",
    jp: "ルックバック",
    type: "oneshot-long",
    year: 2021,
    featured: true,
    blog: null,
    venue: { id: "Shōnen Jump+", en: "Shōnen Jump+" },
    size: { id: "One-shot panjang · 1 volume", en: "Long one-shot · 1 volume" },
    tagline: {
      id: "Dua gadis, satu meja gambar, bertahun-tahun di baliknya.",
      en: "Two girls, one drawing desk, and the years behind it."
    },
    synopsis: {
      id: "Fujino, murid SD yang percaya diri, rutin mengisi komik 4 panel di koran sekolah, sampai muncul karya Kyomoto, anak yang tak pernah keluar rumah, yang gambarnya jauh lebih hebat. Dari persaingan itu tumbuh persahabatan tentang menggambar, waktu, dan alasan kita terus berkarya.",
      en: "Fujino, a confident grade-schooler, draws the 4-panel strip in the school paper, until Kyomoto, a shut-in who never comes to class, submits art far better than hers. From that rivalry grows a friendship about drawing, time, and why we keep creating."
    },
    dates: [
      { d: "2021-07-19", id: "Terbit di Shōnen Jump+", en: "Published on Shōnen Jump+" },
      { d: "2021-09-03", id: "Volume tunggal terbit", en: "Single volume released" }
    ],
    adaptations: [
      { year: 2024, id: "Film anime, Studio Durian, sutradara Kiyotaka Oshiyama. Rilis Jepang 28 Juni 2024", en: "Anime film by Studio Durian, directed by Kiyotaka Oshiyama. Japan release 28 June 2024" },
      { year: 2025, id: "Film live-action diumumkan (Desember 2025)", en: "Live-action film announced (December 2025)" }
    ],
    awards: [
      { id: "Peringkat 1 Kono Manga ga Sugoi! 2022, pembaca pria", en: "#1 in Kono Manga ga Sugoi! 2022, male readers" }
    ]
  },
  {
    id: "goodbye-eri",
    spine: { bg: "#16223b", fg: "#f08a4b", w: 36, h: 240 },
    cover: "assets/covers/goodbye-eri.webp",
    title: "Goodbye, Eri",
    jp: "さよなら絵梨",
    type: "oneshot-long",
    year: 2022,
    featured: true,
    blog: null,
    venue: { id: "Shōnen Jump+", en: "Shōnen Jump+" },
    size: { id: "One-shot 200 halaman · 1 volume", en: "200-page one-shot · 1 volume" },
    tagline: {
      id: "Sebuah film tentang film, dan tentang mengingat orang yang kita sayangi.",
      en: "A film about films, and about how we remember the people we love."
    },
    synopsis: {
      id: "Yuta diberi ponsel untuk merekam hari-hari terakhir ibunya yang sakit. Film dokumenter yang ia buat justru dicemooh satu sekolah. Saat terpuruk, ia bertemu Eri, gadis misterius yang mengajaknya membuat film baru. Hampir seluruh halamannya digambar seperti bingkai kamera.",
      en: "Yuta is handed a phone to record his sick mother's final days. The documentary he makes is ridiculed by the whole school. At his lowest, he meets Eri, a mysterious girl who asks him to make a new film with her. Nearly every page is framed like a camera shot."
    },
    dates: [
      { d: "2022-04-11", id: "Terbit di Shōnen Jump+", en: "Published on Shōnen Jump+" },
      { d: "2022-07-04", id: "Volume tunggal terbit", en: "Single volume released" }
    ],
    adaptations: [],
    awards: []
  },
  {
    id: "just-listen",
    spine: { bg: "#2b2d31", fg: "#e6e6e6", w: 22, h: 216 },
    cover: "assets/covers/just-listen.webp",
    title: "Just Listen to the Song",
    jp: "フツーに聞いてくれ",
    type: "oneshot",
    year: 2022,
    blog: null,
    venue: { id: "Shōnen Jump+", en: "Shōnen Jump+" },
    size: { id: "One-shot · gambar oleh Oto Tōda", en: "One-shot · art by Oto Tōda" },
    tagline: {
      id: "Cerita Fujimoto, digambar oleh mantan asistennya, Oto Tōda.",
      en: "Written by Fujimoto, drawn by his former assistant Oto Tōda."
    },
    synopsis: {
      id: "Kolaborasi: Fujimoto menulis cerita, Oto Tōda menggambar. Terbit 4 Juli 2022, hari yang sama dengan rilis volume Goodbye, Eri.",
      en: "A collaboration: Fujimoto wrote the story, Oto Tōda drew it. Published 4 July 2022, the same day Goodbye, Eri's volume came out."
    },
    dates: [{ d: "2022-07-04", id: "Terbit di Shōnen Jump+", en: "Published on Shōnen Jump+" }],
    adaptations: [], awards: []
  },
  {
    id: "17-26",
    spine: { bg: "#f2703a", fg: "#eae95f", w: 44, h: 240 },
    cover: "assets/covers/17-21.webp",
    cover2: "assets/covers/22-26.webp",
    title: "Tatsuki Fujimoto Before Chainsaw Man",
    jp: "藤本タツキ短編集「17-21」「22-26」",
    type: "collection",
    year: 2021,
    featured: true,
    blog: null,
    venue: { id: "Shueisha (Jump Comics+)", en: "Shueisha (Jump Comics+)" },
    size: { id: "2 volume: 17-21 & 22-26", en: "2 volumes: 17-21 & 22-26" },
    tagline: {
      id: "Delapan one-shot dari usia 17 sampai 26 tahun.",
      en: "Eight one-shots drawn between ages 17 and 26."
    },
    synopsis: {
      id: "Kumpulan karya pendek Fujimoto sebelum Chainsaw Man, dibagi berdasarkan usianya saat membuat: “17-21” dan “22-26”. Cara terbaik melihat bagaimana gaya dan tema khasnya terbentuk. Pada 2025, kedelapan cerita diadaptasi menjadi antologi anime oleh enam studio berbeda.",
      en: "Fujimoto's short works from before Chainsaw Man, split by the age he drew them: “17-21” and “22-26”. The best way to watch his style and signature themes take shape. In 2025 all eight stories became an anime anthology made by six different studios."
    },
    dates: [
      { d: "2021-10-04", id: "Volume “17-21” terbit", en: "“17-21” volume released" },
      { d: "2021-11-04", id: "Volume “22-26” terbit", en: "“22-26” volume released" },
      { d: "2025-10-17", id: "Antologi anime tayang terbatas di bioskop Jepang", en: "Anime anthology's limited theatrical run in Japan" },
      { d: "2025-11-07", id: "Tatsuki Fujimoto 17-26 tayang global di Prime Video", en: "Tatsuki Fujimoto 17-26 streams worldwide on Prime Video" }
    ],
    adaptations: [
      { year: 2025, id: "Antologi anime “Tatsuki Fujimoto 17-26” oleh ZEXCS, Lapin Track, Studio Graph77, 100studio, Studio Kafka, P.A. Works (Prime Video)", en: "Anime anthology “Tatsuki Fujimoto 17-26” by ZEXCS, Lapin Track, Studio Graph77, 100studio, Studio Kafka, P.A. Works (Prime Video)" }
    ],
    awards: []
  },
  {
    id: "sisters",
    spine: { bg: "#d9ce9f", fg: "#414773", w: 24, h: 222 },
    cover: "assets/covers/sisters.webp",
    col: "22-26",
    title: "Sisters",
    jp: "妹の姉",
    type: "oneshot",
    year: 2018,
    blog: null,
    venue: { id: "Jump Square", en: "Jump Square" },
    size: { id: "One-shot · koleksi 22-26", en: "One-shot · in 22-26" },
    tagline: { id: "Lukisan yang menang lomba, dan adik yang jadi bahan olokan.", en: "A prize-winning painting, and the sister who pays for it." },
    synopsis: {
      id: "Setelah lukisan kakaknya, Kyōko, memenangkan penghargaan, Mitsuko Ebara justru jadi bahan ejekan memalukan di sekolah. Cerita tentang persaingan saudara dan seni, benih tema yang kelak muncul di Look Back.",
      en: "After her sister Kyōko's painting wins a prize, Mitsuko Ebara becomes the target of humiliating teasing at school. A story about sibling rivalry and art, with seeds of themes that later bloom in Look Back."
    },
    dates: [{ d: "2018-05-02", id: "Terbit di Jump Square", en: "Published in Jump Square" }],
    adaptations: [{ year: 2025, id: "Episode antologi 17-26 oleh P.A. Works", en: "17-26 anthology episode by P.A. Works" }],
    awards: []
  },
  {
    id: "woke-up-as-a-girl",
    spine: { bg: "#a7a488", fg: "#23233b", w: 24, h: 222 },
    cover: "assets/covers/woke-up-as-a-girl.webp",
    col: "22-26",
    title: "Woke-Up-as-a-Girl Syndrome",
    jp: "目が覚めたら女の子になっていた病",
    type: "oneshot",
    year: 2017,
    blog: null,
    venue: { id: "Shōnen Jump+", en: "Shōnen Jump+" },
    size: { id: "One-shot · koleksi 22-26", en: "One-shot · in 22-26" },
    tagline: { id: "Diagnosis yang tak bisa dibatalkan.", en: "A diagnosis that can't be undone." },
    synopsis: {
      id: "Seorang pemuda menerima diagnosis yang mengubah hidupnya selamanya, lalu harus menghadapi kesepian dan memikirkan ulang hubungannya dengan sang pacar, Rie.",
      en: "A young man receives a diagnosis that changes his life for good, and must face isolation while rethinking his relationship with his girlfriend, Rie."
    },
    dates: [{ d: "2017-04-24", id: "Terbit di Shōnen Jump+", en: "Published on Shōnen Jump+" }],
    adaptations: [{ year: 2025, id: "Episode antologi 17-26 oleh Studio Kafka", en: "17-26 anthology episode by Studio Kafka" }],
    awards: []
  },
  {
    id: "nayuta",
    spine: { bg: "#e8e19b", fg: "#414773", w: 24, h: 222 },
    cover: "assets/covers/nayuta.webp",
    col: "22-26",
    title: "Nayuta of the Prophecy",
    jp: "予言のナユタ",
    type: "oneshot",
    year: 2015,
    blog: null,
    venue: { id: "Jump Square", en: "Jump Square" },
    size: { id: "One-shot · koleksi 22-26", en: "One-shot · in 22-26" },
    tagline: { id: "Anak yang diramalkan mengakhiri dunia.", en: "A child prophesied to end the world." },
    synopsis: {
      id: "Nayuta, anak yang diramalkan akan membawa kehancuran dunia, dirawat oleh kakaknya, Kenji, yang menolak menyerah padanya. Nama “Nayuta” kelak dipakai lagi Fujimoto di Chainsaw Man.",
      en: "Nayuta, a child prophesied to bring about the end of the world, is raised by her brother Kenji, who refuses to give up on her. Fujimoto would reuse the name “Nayuta” in Chainsaw Man."
    },
    dates: [{ d: "2015-07-04", id: "Terbit di Jump Square", en: "Published in Jump Square" }],
    adaptations: [{ year: 2025, id: "Episode antologi 17-26 oleh 100studio", en: "17-26 anthology episode by 100studio" }],
    awards: []
  },
  {
    id: "mermaid-rhapsody",
    spine: { bg: "#414773", fg: "#e8e19b", w: 24, h: 222 },
    cover: "assets/covers/mermaid-rhapsody.webp",
    col: "22-26",
    title: "Mermaid Rhapsody",
    jp: "人魚ラプソディ",
    type: "oneshot",
    year: 2014,
    blog: null,
    venue: { id: "Jump SQ.19", en: "Jump SQ.19" },
    size: { id: "One-shot · koleksi 22-26", en: "One-shot · in 22-26" },
    tagline: { id: "Piano di dasar laut.", en: "A piano at the bottom of the sea." },
    synopsis: {
      id: "Toshihide, anak seorang putri duyung, bermain piano di bawah air. Saat napasnya habis, putri duyung bernama Shiju menyelamatkannya.",
      en: "Toshihide, the son of a mermaid, plays piano underwater. When he runs out of air, a mermaid named Shiju saves him."
    },
    dates: [{ d: "2014-12-19", id: "Terbit di Jump SQ.19", en: "Published in Jump SQ.19" }],
    adaptations: [{ year: 2025, id: "Episode antologi 17-26 oleh 100studio", en: "17-26 anthology episode by 100studio" }],
    awards: []
  },
  {
    id: "shikaku",
    spine: { bg: "#9c8148", fg: "#1d1608", w: 24, h: 222 },
    cover: "assets/covers/shikaku.webp",
    col: "17-21",
    title: "Shikaku",
    jp: "シカク",
    type: "oneshot",
    year: 2014,
    blog: null,
    venue: { id: "Jump SQ.19", en: "Jump SQ.19" },
    size: { id: "One-shot · koleksi 17-21", en: "One-shot · in 17-21" },
    tagline: { id: "Pembunuh bayaran dan vampir yang ingin mati.", en: "An assassin and a vampire who wants to die." },
    synopsis: {
      id: "Shikaku, pembunuh bayaran yang sangat terampil, menerima pekerjaan dari Yugeru, vampir abadi yang justru ingin mati.",
      en: "Shikaku, a highly skilled assassin, takes a job from Yugeru, an immortal vampire who wants to die."
    },
    dates: [{ d: "2014-06-19", id: "Terbit di Jump SQ.19", en: "Published in Jump SQ.19" }],
    adaptations: [{ year: 2025, id: "Episode antologi 17-26 oleh Studio Graph77", en: "17-26 anthology episode by Studio Graph77" }],
    awards: []
  },
  {
    id: "love-is-blind",
    spine: { bg: "#914d33", fg: "#f3e7c9", w: 24, h: 222 },
    cover: "assets/covers/love-is-blind.webp",
    col: "17-21",
    title: "Love is Blind",
    jp: "恋は盲目",
    type: "oneshot",
    year: 2013,
    blog: null,
    venue: { id: "Jump SQ.19 (2014)", en: "Jump SQ.19 (2014)" },
    size: { id: "One-shot · koleksi 17-21", en: "One-shot · in 17-21" },
    tagline: { id: "Karya pertama Fujimoto yang terbit di majalah.", en: "Fujimoto's first work published in a magazine." },
    synopsis: {
      id: "Ibuki, ketua OSIS, berencana menyatakan perasaannya kepada sesama pengurus, Yuri Kōnosu, sebelum ia lulus. Mendapat Honorable Mention di Crown Newcomers' Award (November 2013) dan terbit 19 April 2014, debut resmi Fujimoto.",
      en: "Ibuki, the student council president, plans to confess to fellow member Yuri Kōnosu before he graduates. It won an Honorable Mention at the Crown Newcomers' Award (November 2013) and was published on 19 April 2014: Fujimoto's official debut."
    },
    dates: [{ d: "2014-04-19", id: "Terbit di Jump SQ.19 (debut)", en: "Published in Jump SQ.19 (debut)" }],
    adaptations: [{ year: 2025, id: "Episode antologi 17-26 oleh Lapin Track", en: "17-26 anthology episode by Lapin Track" }],
    awards: [{ id: "Crown Newcomers' Award, Honorable Mention (2013)", en: "Crown Newcomers' Award, Honorable Mention (2013)" }]
  },
  {
    id: "sasaki",
    spine: { bg: "#9ab87b", fg: "#1f2a15", w: 24, h: 222 },
    cover: "assets/covers/sasaki.webp",
    col: "17-21",
    title: "Sasaki Stopped a Bullet",
    jp: "佐々木くんが銃弾止めた",
    type: "oneshot",
    year: 2013,
    blog: null,
    venue: { id: "Shōnen Jump+ (2016)", en: "Shōnen Jump+ (2016)" },
    size: { id: "One-shot · koleksi 17-21", en: "One-shot · in 17-21" },
    tagline: { id: "Murid yang rela menghentikan peluru demi gurunya.", en: "A student who'd stop a bullet for his teacher." },
    synopsis: {
      id: "Sasaki sangat mengidolakan gurunya, Chieko Kawaguchi, dan bertekad membelanya saat masa lalu sang guru mengancam reputasinya. Dibuat 2013, baru terbit online 13 Juni 2016.",
      en: "Sasaki idolizes his teacher, Chieko Kawaguchi, and vows to defend her when her past threatens her reputation. Drawn in 2013, only published online on 13 June 2016."
    },
    dates: [{ d: "2016-06-13", id: "Terbit di Shōnen Jump+", en: "Published on Shōnen Jump+" }],
    adaptations: [{ year: 2025, id: "Episode antologi 17-26 oleh Lapin Track", en: "17-26 anthology episode by Lapin Track" }],
    awards: [{ id: "Crown Newcomers' Award, Jury Special Award", en: "Crown Newcomers' Award, Jury Special Award" }]
  },
  {
    id: "chickens",
    spine: { bg: "#eae95f", fg: "#5a2d1c", w: 24, h: 222 },
    cover: "assets/covers/chickens.webp",
    col: "17-21",
    title: "A Couple Clucking Chickens Were Still Kickin' in the Schoolyard",
    jp: "庭には二羽ニワトリがいた",
    type: "oneshot",
    year: 2011,
    blog: null,
    venue: { id: "Shōnen Jump+ (2017)", en: "Shōnen Jump+ (2017)" },
    size: { id: "One-shot · koleksi 17-21", en: "One-shot · in 17-21" },
    tagline: { id: "Karya paling awal, dibuat di usia 17.", en: "His earliest work, drawn at 17." },
    synopsis: {
      id: "Alien telah menguasai Bumi. Dua manusia terakhir, Yūto dan Ami, bersembunyi di halaman sekolah alien dengan menyamar jadi ayam, dibantu seorang murid bernama Yōhei. Dikirim untuk lomba tahun 2011, baru terbit online tahun 2017.",
      en: "Aliens have taken over Earth. The last two humans, Yūto and Ami, hide in an alien school's yard disguised as chickens, helped by a student named Yōhei. Submitted to a contest in 2011, only published online in 2017."
    },
    dates: [{ d: "2017", id: "Terbit di Shōnen Jump+", en: "Published on Shōnen Jump+" }],
    adaptations: [{ year: 2025, id: "Episode antologi 17-26 oleh ZEXCS", en: "17-26 anthology episode by ZEXCS" }],
    awards: [{ id: "Nominasi penghargaan bulanan Jump SQ.", en: "Nominated for a Jump SQ. monthly award" }]
  },
  {
    id: "kami-hikoki",
    spine: { bg: "#dedad0", fg: "#4d4d4d", w: 18, h: 196 },
    title: "Kami Hikōki (Paper Planes)",
    jp: "かみひこうき",
    type: "unpublished",
    year: 2013,
    blog: null,
    venue: { id: "Tidak diterbitkan", en: "Unpublished" },
    size: { id: "One-shot lomba", en: "Contest one-shot" },
    tagline: { id: "Karya lomba yang tak pernah terbit.", en: "A contest entry that was never published." },
    synopsis: {
      id: "Meraih Jury Special Award di Crown Newcomers' Award ke-3 (2013). Tidak pernah diterbitkan untuk umum.",
      en: "Won the Jury Special Award at the 3rd Crown Newcomers' Award (2013). Never published."
    },
    dates: [], adaptations: [],
    awards: [{ id: "Crown Newcomers' Award ke-3, Jury Special Award", en: "3rd Crown Newcomers' Award, Jury Special Award" }]
  },
  {
    id: "seigi-no-mikata",
    spine: { bg: "#cfcabe", fg: "#4d4d4d", w: 18, h: 196 },
    title: "Seigi no Mikata (Sense of Justice)",
    jp: "正義の見方",
    type: "unpublished",
    year: 2013,
    blog: null,
    venue: { id: "Tidak diterbitkan", en: "Unpublished" },
    size: { id: "One-shot lomba", en: "Contest one-shot" },
    tagline: { id: "Karya lomba yang tak pernah terbit.", en: "A contest entry that was never published." },
    synopsis: {
      id: "Dikirim ke Supreme Comic Grand Prize season II (2013). Tidak pernah diterbitkan untuk umum.",
      en: "Entered in the Supreme Comic Grand Prize, season II (2013). Never published."
    },
    dates: [], adaptations: [], awards: []
  }
];

const PROFILE = {
  name: "Tatsuki Fujimoto",
  jp: "藤本タツキ",
  facts: [
    { k: { id: "Lahir", en: "Born" }, v: { id: "10 Oktober 1992 / 1993 (sumber berbeda)", en: "10 October 1992 / 1993 (sources differ)" } },
    { k: { id: "Asal", en: "From" }, v: { id: "Nikaho, Prefektur Akita, Jepang", en: "Nikaho, Akita Prefecture, Japan" } },
    { k: { id: "Pendidikan", en: "Education" }, v: { id: "Lukisan Barat, Tohoku University of Art and Design (lulus 2014)", en: "Western painting, Tohoku University of Art and Design (2014)" } },
    { k: { id: "Debut", en: "Debut" }, v: { id: "Love is Blind: Jump SQ.19, April 2014", en: "Love is Blind: Jump SQ.19, April 2014" } }
  ],
  bio: {
    id: "Mangaka asal Akita yang mulai mengirim karya ke lomba sejak usia 17. Setelah one-shot yang aneh dan berani, ia meledak lewat Fire Punch dan Chainsaw Man, lalu menunjukkan sisi yang lebih sunyi lewat Look Back dan Goodbye, Eri. Karyanya dikenal karena gaya sinematik, humor gelap, dan kejutan yang menolak pola cerita biasa.",
    en: "An Akita-born mangaka who began sending work to contests at 17. After a run of strange, fearless one-shots he broke out with Fire Punch and Chainsaw Man, then showed a quieter side with Look Back and Goodbye, Eri. His work is known for a cinematic eye, pitch-black humour, and twists that refuse the usual story patterns."
  }
};
