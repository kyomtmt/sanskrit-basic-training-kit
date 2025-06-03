// Data for nau- (f.) declension puzzle (舟 - 女性)

const nauFCardsData = [
    // 単数 (Singular)
    { id: 'nau-f-nv-sg-1', romaji: 'nauḥ',        devanagari: 'नौः',   acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] },
    { id: 'nau-f-nv-sg-2', romaji: 'nauḥ',        devanagari: 'नौः',   acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] },
    { id: 'nau-f-acc-sg',  romaji: 'nāvam',      devanagari: 'नावम्',  acceptableCells: ['cell-acc-sg'] },
    { id: 'nau-f-ins-sg',  romaji: 'nāvā',       devanagari: 'नावा',   acceptableCells: ['cell-ins-sg'] },
    { id: 'nau-f-dat-sg',  romaji: 'nāve',       devanagari: 'नावे',   acceptableCells: ['cell-dat-sg'] },
    // ★★★ 単数 奪格・属格の nāvaḥ に (単数) を追記 ★★★
    { id: 'nau-f-ablgen-sg-1', romaji: 'nāvaḥ (単数)',devanagari: 'नावः',  acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'nau-f-ablgen-sg-2', romaji: 'nāvaḥ (単数)',devanagari: 'नावः',  acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'nau-f-loc-sg',  romaji: 'nāvi',       devanagari: 'नावि',   acceptableCells: ['cell-loc-sg'] },

    // 両数 (Dual)
    { id: 'nau-f-nav-du-1', romaji: 'nāvau',      devanagari: 'नावौ',  acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'nau-f-nav-du-2', romaji: 'nāvau',      devanagari: 'नावौ',  acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'nau-f-nav-du-3', romaji: 'nāvau',      devanagari: 'नावौ',  acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'nau-f-ida-du-1', romaji: 'naubhyām',   devanagari: 'नौभ्याम्',acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'nau-f-ida-du-2', romaji: 'naubhyām',   devanagari: 'नौभ्याम्',acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'nau-f-ida-du-3', romaji: 'naubhyām',   devanagari: 'नौभ्याम्',acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'nau-f-gl-du-1',  romaji: 'nāvoḥ',      devanagari: 'नावोः',  acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'nau-f-gl-du-2',  romaji: 'nāvoḥ',      devanagari: 'नावोः',  acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // ★★★ 複数 主格・呼格・対格の nāvaḥ に (複数) を追記 ★★★
    { id: 'nau-f-nva-pl-1', romaji: 'nāvaḥ (複数)',devanagari: 'नावः',  acceptableCells: ['cell-nom-pl', 'cell-voc-pl', 'cell-acc-pl'] },
    { id: 'nau-f-nva-pl-2', romaji: 'nāvaḥ (複数)',devanagari: 'नावः',  acceptableCells: ['cell-nom-pl', 'cell-voc-pl', 'cell-acc-pl'] },
    { id: 'nau-f-nva-pl-3', romaji: 'nāvaḥ (複数)',devanagari: 'नावः',  acceptableCells: ['cell-nom-pl', 'cell-voc-pl', 'cell-acc-pl'] }, // 主格・対格・呼格が同じなので3枚
    { id: 'nau-f-ins-pl',  romaji: 'naubhiḥ',    devanagari: 'नौभिः',  acceptableCells: ['cell-ins-pl'] },
    { id: 'nau-f-da-pl-1', romaji: 'naubhyaḥ',   devanagari: 'नौभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'nau-f-da-pl-2', romaji: 'naubhyaḥ',   devanagari: 'नौभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'nau-f-gen-pl',  romaji: 'nāvām',      devanagari: 'नावाम्',  acceptableCells: ['cell-gen-pl'] },
    { id: 'nau-f-loc-pl',  romaji: 'nauṣu',      devanagari: 'नौषु',   acceptableCells: ['cell-loc-pl'] }
];
// console.log("nau-f-data.js loaded");
// console.log(nauFCardsData.length); // 24枚になっているか確認
