// Data for nadī- (f.) declension puzzle (川)

const puzzleData = [
    // 単数 (Singular)
    { id: 'nadi-nom-sg',  romaji: 'nadī',     devanagari: 'नदी',      acceptableCells: ['cell-nom-sg'] },
    { id: 'nadi-acc-sg',  romaji: 'nadīm',    devanagari: 'नदीम्',     acceptableCells: ['cell-acc-sg'] },
    { id: 'nadi-ins-sg',  romaji: 'nadyā',    devanagari: 'नद्या',     acceptableCells: ['cell-ins-sg'] },
    { id: 'nadi-dat-sg',  romaji: 'nadyai',   devanagari: 'नद्यै',    acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格が同じ nadyāḥ
    { id: 'nadi-ablgen-sg-1', romaji: 'nadyāḥ',   devanagari: 'नद्याः',    acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'nadi-ablgen-sg-2', romaji: 'nadyāḥ',   devanagari: 'नद्याः',    acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'nadi-loc-sg',  romaji: 'nadyām',   devanagari: 'नद्याम्',   acceptableCells: ['cell-loc-sg'] },
    { id: 'nadi-voc-sg',  romaji: 'nadi',     devanagari: 'नदि',      acceptableCells: ['cell-voc-sg'] }, // 短母音の nadi

    // 両数 (Dual)
    // 主格・対格・呼格が同じ nadyau
    { id: 'nadi-nav-du-1', romaji: 'nadyau',   devanagari: 'नद्यौ',    acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'nadi-nav-du-2', romaji: 'nadyau',   devanagari: 'नद्यौ',    acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'nadi-nav-du-3', romaji: 'nadyau',   devanagari: 'नद्यौ',    acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ nadībhyām
    { id: 'nadi-ida-du-1', romaji: 'nadībhyām',devanagari: 'नदीभ्याम्',  acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'nadi-ida-du-2', romaji: 'nadībhyām',devanagari: 'नदीभ्याम्',  acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'nadi-ida-du-3', romaji: 'nadībhyām',devanagari: 'नदीभ्याम्',  acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ nadyoḥ
    { id: 'nadi-gl-du-1',  romaji: 'nadyoḥ',   devanagari: 'नद्योः',   acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'nadi-gl-du-2',  romaji: 'nadyoḥ',   devanagari: 'नद्योः',   acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・呼格が同じ nadyaḥ
    { id: 'nadi-nv-pl-1', romaji: 'nadyaḥ',   devanagari: 'नद्यः',    acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'nadi-nv-pl-2', romaji: 'nadyaḥ',   devanagari: 'नद्यः',    acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'nadi-acc-pl',  romaji: 'nadīḥ',    devanagari: 'नदीः',     acceptableCells: ['cell-acc-pl'] },
    { id: 'nadi-ins-pl',  romaji: 'nadībhiḥ', devanagari: 'नदीभिः',   acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ nadībhyaḥ
    { id: 'nadi-da-pl-1', romaji: 'nadībhyaḥ',devanagari: 'नदीभ्यः',   acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'nadi-da-pl-2', romaji: 'nadībhyaḥ',devanagari: 'नदीभ्यः',   acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'nadi-gen-pl',  romaji: 'nadīnām',  devanagari: 'नदीनाम्',   acceptableCells: ['cell-gen-pl'] },
    { id: 'nadi-loc-pl',  romaji: 'nadīṣu',   devanagari: 'नदीषु',    acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。

// console.log("nadi-data.js loaded");
// console.log(nadiCardsData.length);
// console.log(nadiCardsData);
