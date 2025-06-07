// Data for mati (f.) declension puzzle

const puzzleData = [
    // 単数 (Singular)
    { id: 'mati-nom-sg',  romaji: 'matiḥ',        devanagari: 'मतिः',   acceptableCells: ['cell-nom-sg'] },
    { id: 'mati-acc-sg',  romaji: 'matim',        devanagari: 'मतिम्',   acceptableCells: ['cell-acc-sg'] },
    { id: 'mati-ins-sg',  romaji: 'matyā',        devanagari: 'मत्या',    acceptableCells: ['cell-ins-sg'] },
    { id: 'mati-dat-sg',  romaji: 'mataye/matyai',devanagari: 'मतये/मत्यै',acceptableCells: ['cell-dat-sg'] },
    { id: 'mati-ablgen-sg-1', romaji: 'mateḥ/matyāḥ', devanagari: 'मतेः/मत्याः',acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] }, // 奪格・属格用1枚目
    { id: 'mati-ablgen-sg-2', romaji: 'mateḥ/matyāḥ', devanagari: 'मतेः/मत्याः',acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] }, // 奪格・属格用2枚目
    { id: 'mati-loc-sg',  romaji: 'matau/matyām', devanagari: 'मतौ/मत्याम्',acceptableCells: ['cell-loc-sg'] },
    { id: 'mati-voc-sg',  romaji: 'mate',         devanagari: 'मते',     acceptableCells: ['cell-voc-sg'] },

    // 両数 (Dual)
    // 主格・対格・呼格が同じ matī なので、matīカードを3枚用意
    { id: 'mati-nav-du-1', romaji: 'matī',     devanagari: 'मती',     acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'mati-nav-du-2', romaji: 'matī',     devanagari: 'मती',     acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'mati-nav-du-3', romaji: 'matī',     devanagari: 'मती',     acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ matibhyām なので、matibhyāmカードを3枚用意
    { id: 'mati-ida-du-1', romaji: 'matibhyām',devanagari: 'मतिभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'mati-ida-du-2', romaji: 'matibhyām',devanagari: 'मतिभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'mati-ida-du-3', romaji: 'matibhyām',devanagari: 'मतिभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ matyoḥ なので、matyoḥカードを2枚用意
    { id: 'mati-gl-du-1',  romaji: 'matyoḥ',   devanagari: 'मत्योः',   acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'mati-gl-du-2',  romaji: 'matyoḥ',   devanagari: 'मत्योः',   acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・呼格が同じ matayaḥ なので、matayaḥカードを2枚用意
    { id: 'mati-nav-pl-1', romaji: 'matayaḥ',  devanagari: 'मतयः',   acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'mati-nav-pl-2', romaji: 'matayaḥ',  devanagari: 'मतयः',   acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'mati-acc-pl', romaji: 'matīḥ',    devanagari: 'मतीः',    acceptableCells: ['cell-acc-pl'] },
    { id: 'mati-ins-pl', romaji: 'matibhiḥ', devanagari: 'मतिभिः',  acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ matibhyaḥ なので、matibhyaḥカードを2枚用意
    { id: 'mati-da-pl-1',  romaji: 'matibhyaḥ',devanagari: 'मतिभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'mati-da-pl-2',  romaji: 'matibhyaḥ',devanagari: 'मतिभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'mati-gen-pl', romaji: 'matīnām',  devanagari: 'मतीनाम्',  acceptableCells: ['cell-gen-pl'] },
    { id: 'mati-loc-pl', romaji: 'matiṣu',   devanagari: 'मतिषु',    acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるように調整しました。

// console.log("mati-data.js loaded");
// console.log(matiCardsData); // デバッグ用
