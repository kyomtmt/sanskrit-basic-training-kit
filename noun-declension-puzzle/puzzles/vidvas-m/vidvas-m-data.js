// Data for vidvas (m.) declension puzzle (知っている者 - 男性)

const vidvasMCardsData = [
    // 単数 (Singular) - 男性
    { id: 'vidvas-m-nom-sg',  romaji: 'vidvān',      devanagari: 'विद्वान्',     acceptableCells: ['cell-nom-sg'] },
    { id: 'vidvas-m-acc-sg',  romaji: 'vidvāṃsam',   devanagari: 'विद्वांसम्',   acceptableCells: ['cell-acc-sg'] },
    { id: 'vidvas-m-ins-sg',  romaji: 'viduṣā',      devanagari: 'विदुषा',      acceptableCells: ['cell-ins-sg'] },
    { id: 'vidvas-m-dat-sg',  romaji: 'viduṣe',      devanagari: 'विदुषे',      acceptableCells: ['cell-dat-sg'] },
    // ★★★ 単数 奪格・属格の viduṣaḥ に (単数) を追記 ★★★
    { id: 'vidvas-m-ablgen-sg-1', romaji: 'viduṣaḥ (単数)', devanagari: 'विदुषः', acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'vidvas-m-ablgen-sg-2', romaji: 'viduṣaḥ (単数)', devanagari: 'विदुषः', acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'vidvas-m-loc-sg',  romaji: 'viduṣi',      devanagari: 'विदुषि',      acceptableCells: ['cell-loc-sg'] },
    { id: 'vidvas-m-voc-sg',  romaji: 'vidvan',      devanagari: 'विद्वन्',      acceptableCells: ['cell-voc-sg'] },

    // 両数 (Dual) - 男性
    { id: 'vidvas-m-nav-du-1', romaji: 'vidvāṃsau',   devanagari: 'विद्वांसौ',   acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'vidvas-m-nav-du-2', romaji: 'vidvāṃsau',   devanagari: 'विद्वांसौ',   acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'vidvas-m-nav-du-3', romaji: 'vidvāṃsau',   devanagari: 'विद्वांसौ',   acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'vidvas-m-ida-du-1', romaji: 'vidvadbhyām', devanagari: 'विद्वद्भ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'vidvas-m-ida-du-2', romaji: 'vidvadbhyām', devanagari: 'विद्वद्भ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'vidvas-m-ida-du-3', romaji: 'vidvadbhyām', devanagari: 'विद्वद्भ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'vidvas-m-gl-du-1',  romaji: 'viduṣoḥ',    devanagari: 'विदुषोः',    acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'vidvas-m-gl-du-2',  romaji: 'viduṣoḥ',    devanagari: 'विदुषोः',    acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural) - 男性
    { id: 'vidvas-m-nav-pl-1', romaji: 'vidvāṃsaḥ',  devanagari: 'विद्वांसः',  acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'vidvas-m-nav-pl-2', romaji: 'vidvāṃsaḥ',  devanagari: 'विद्वांसः',  acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    // ★★★ 複数 対格の viduṣaḥ に (複数) を追記 ★★★
    { id: 'vidvas-m-acc-pl', romaji: 'viduṣaḥ (複数)',devanagari: 'विदुषः',    acceptableCells: ['cell-acc-pl'] },
    { id: 'vidvas-m-ins-pl', romaji: 'vidvadbhiḥ', devanagari: 'विद्वद्भिः',  acceptableCells: ['cell-ins-pl'] },
    { id: 'vidvas-m-da-pl-1',  romaji: 'vidvadbhyaḥ',devanagari: 'विद्वद्भ्यः', acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'vidvas-m-da-pl-2',  romaji: 'vidvadbhyaḥ',devanagari: 'विद्वद्भ्यः', acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'vidvas-m-gen-pl', romaji: 'viduṣām',    devanagari: 'विदुषाम्',    acceptableCells: ['cell-gen-pl'] },
    { id: 'vidvas-m-loc-pl', romaji: 'vidvatsu',   devanagari: 'विद्वत्सु',   acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。

// console.log("vidvas-m-data.js loaded");
// console.log(vidvasMCardsData);
