// Data for vāri (n.) declension puzzle

const puzzleData = [
    // 単数 (Singular)
    { id: 'card-vari-nom-sg',  romaji: 'vāri',     devanagari: 'वारि',    acceptableCells: ['cell-nom-sg'] }, // ★修正
    { id: 'card-vari-acc-sg',  romaji: 'vāri',     devanagari: 'वारि',    acceptableCells: ['cell-acc-sg'] }, // ★修正
    { id: 'card-vari-ins-sg',  romaji: 'vāriṇā',   devanagari: 'वारिणा',  acceptableCells: ['cell-ins-sg'] }, // ★修正
    { id: 'card-vari-dat-sg',  romaji: 'vāriṇe',   devanagari: 'वारिणे',  acceptableCells: ['cell-dat-sg'] }, // ★修正
    { id: 'card-vari-abl-sg',  romaji: 'vāriṇaḥ',  devanagari: 'वारिणः', acceptableCells: ['cell-abl-sg'] }, // ★修正
    { id: 'card-vari-gen-sg',  romaji: 'vāriṇaḥ',  devanagari: 'वारिणः', acceptableCells: ['cell-gen-sg'] }, // ★修正
    { id: 'card-vari-loc-sg',  romaji: 'vāriṇi',   devanagari: 'वारिणि',  acceptableCells: ['cell-loc-sg'] }, // ★修正
    { id: 'card-vari-voc-sg',  romaji: 'vāri/vāre',devanagari: 'वारि/वारे', acceptableCells: ['cell-voc-sg'] },

    // 両数 (Dual) - N.Ac.V が同じ vāriṇī なので、対応するカードを3枚用意し、acceptableCells を使う
    { id: 'card-vari-nav-du-1',romaji: 'vāriṇī',   devanagari: 'वारिणी',  acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'card-vari-nav-du-2',romaji: 'vāriṇī',   devanagari: 'वारिणी',  acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'card-vari-nav-du-3',romaji: 'vāriṇī',   devanagari: 'वारिणी',  acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ vāribhyām なので、対応するカードを3枚用意し、acceptableCells を使う
    { id: 'card-vari-ida-du-1',romaji: 'vāribhyām',devanagari: 'वारिभ्याम्',acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'card-vari-ida-du-2',romaji: 'vāribhyām',devanagari: 'वारिभ्याम्',acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'card-vari-ida-du-3',romaji: 'vāribhyām',devanagari: 'वारिभ्याम्',acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ vāriṇoḥ なので、対応するカードを2枚用意し、acceptableCells を使う
    { id: 'card-vari-gl-du-1', romaji: 'vāriṇoḥ',  devanagari: 'वारिणोः', acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'card-vari-gl-du-2', romaji: 'vāriṇoḥ',  devanagari: 'वारिणोः', acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural) - N.Ac.V が同じ vārīṇi (活用表ママ) なので、対応するカードを3枚用意し、acceptableCells を使う
    { id: 'card-vari-nav-pl-1',romaji: 'vārīṇi',   devanagari: 'वारीणि',  acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'card-vari-nav-pl-2',romaji: 'vārīṇi',   devanagari: 'वारीणि',  acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'card-vari-nav-pl-3',romaji: 'vārīṇi',   devanagari: 'वारीणि',  acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'card-vari-ins-pl',  romaji: 'vāribhiḥ', devanagari: 'वारिभिः', acceptableCells: ['cell-ins-pl'] },
    { id: 'card-vari-da-pl-1', romaji: 'vāribhyaḥ',devanagari: 'वारिभ्यः', acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'card-vari-da-pl-2', romaji: 'vāribhyaḥ',devanagari: 'वारिभ्यः', acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'card-vari-gen-pl',  romaji: 'vāriṇām',  devanagari: 'वारिणाम्', acceptableCells: ['cell-gen-pl'] },
    { id: 'card-vari-loc-pl',  romaji: 'vāriṣu',   devanagari: 'वारिषु',   acceptableCells: ['cell-loc-pl'] }
];

// console.log("vari-data.js loaded");
// console.log(variCardsData);
