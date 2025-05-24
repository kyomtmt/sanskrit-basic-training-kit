// Data for vāri (n.) declension puzzle

const variCardsData = [
    // 単数 (Singular)
    { id: 'card-vari-nom-sg',  romaji: 'vāri',     devanagari: 'वारि',    correctCell: 'cell-nom-sg' }, // N.Ac.sg. vāri
    { id: 'card-vari-acc-sg',  romaji: 'vāri',     devanagari: 'वारि',    correctCell: 'cell-acc-sg' }, // N.Ac.sg. vāri
    { id: 'card-vari-ins-sg',  romaji: 'vāriṇā',   devanagari: 'वारिणा',  correctCell: 'cell-ins-sg' },
    { id: 'card-vari-dat-sg',  romaji: 'vāriṇe',   devanagari: 'वारिणे',  correctCell: 'cell-dat-sg' },
    { id: 'card-vari-abl-sg',  romaji: 'vāriṇaḥ',  devanagari: 'वारिणः', correctCell: 'cell-abl-sg' },
    { id: 'card-vari-gen-sg',  romaji: 'vāriṇaḥ',  devanagari: 'वारिणः', correctCell: 'cell-gen-sg' },
    { id: 'card-vari-loc-sg',  romaji: 'vāriṇi',   devanagari: 'वारिणि',  correctCell: 'cell-loc-sg' },
    // ★★★ 呼格単数の romaji を修正し、判定用に acceptableCells を使う準備 ★★★
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
    { id: 'card-vari-ins-pl',  romaji: 'vāribhiḥ', devanagari: 'वारिभिः', acceptableCells: ['cell-ins-pl'] }, // これは単独
    // 与格・奪格が同じ vāribhyaḥ なので、対応するカードを2枚用意し、acceptableCells を使う
    { id: 'card-vari-da-pl-1', romaji: 'vāribhyaḥ',devanagari: 'वारिभ्यः', acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'card-vari-da-pl-2', romaji: 'vāribhyaḥ',devanagari: 'वारिभ्यः', acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'card-vari-gen-pl',  romaji: 'vāriṇām',  devanagari: 'वारिणाम्', acceptableCells: ['cell-gen-pl'] }, // これは単独
    { id: 'card-vari-loc-pl',  romaji: 'vāriṣu',   devanagari: 'वारिषु',   acceptableCells: ['cell-loc-pl'] }  // これは単独
];
// カードの総数が24枚になるようにIDを変えて定義しました。

// console.log("vari-data.js loaded");
// console.log(variCardsData);
