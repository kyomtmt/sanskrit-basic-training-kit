// Data for dātṛ- (n.) declension puzzle (与える者、与え手 - 中性) - 最新の活用表に基づいて修正

const puzzleData = [
    // 単数 (Singular) - 中性
    // 主格・対格が同じ dātṛ
    { id: 'datr-n-na-sg-1', romaji: 'dātṛ',           devanagari: 'दातृ',          acceptableCells: ['cell-nom-sg', 'cell-acc-sg'] },
    { id: 'datr-n-na-sg-2', romaji: 'dātṛ',           devanagari: 'दातृ',          acceptableCells: ['cell-nom-sg', 'cell-acc-sg'] },
    { id: 'datr-n-ins-sg',  romaji: 'dātrā/dātṛṇā',   devanagari: 'दात्रा/दातृणा',  acceptableCells: ['cell-ins-sg'] }, // ★デーヴァナーガリー修正
    { id: 'datr-n-dat-sg',  romaji: 'dātre/dātṛṇe',   devanagari: 'दात्रे/दातृणे',  acceptableCells: ['cell-dat-sg'] }, // ★デーヴァナーガリー修正
    // 奪格・属格が同じ dātuḥ/dātṛṇaḥ なので、カードを2枚用意
    { id: 'datr-n-ablgen-sg-1', romaji: 'dātuḥ/dātṛṇaḥ',  devanagari: 'दातुः/दातृणः', acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'datr-n-ablgen-sg-2', romaji: 'dātuḥ/dātṛṇaḥ',  devanagari: 'दातुः/दातृणः', acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'datr-n-loc-sg',  romaji: 'dātari/dātṛṇi',  devanagari: 'दातरि/दातृणि', acceptableCells: ['cell-loc-sg'] },
    { id: 'datr-n-voc-sg',  romaji: 'dātṛ/dātaḥ',     devanagari: 'दातृ/दातः',     acceptableCells: ['cell-voc-sg'] },

    // ... (両数と複数の定義は変更なし) ...
    // 両数 (Dual) - 中性
    { id: 'datr-n-nav-du-1', romaji: 'dātṛṇī',         devanagari: 'दातृणी',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'datr-n-nav-du-2', romaji: 'dātṛṇī',         devanagari: 'दातृणी',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'datr-n-nav-du-3', romaji: 'dātṛṇī',         devanagari: 'दातृणी',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'datr-n-ida-du-1', romaji: 'dātṛbhyām',      devanagari: 'दातृभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'datr-n-ida-du-2', romaji: 'dātṛbhyām',      devanagari: 'दातृभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'datr-n-ida-du-3', romaji: 'dātṛbhyām',      devanagari: 'दातृभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'datr-n-gl-du-1',  romaji: 'dātroḥ/dātṛṇoḥ', devanagari: 'दात्रोः/दातृणोः',acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'datr-n-gl-du-2',  romaji: 'dātroḥ/dātṛṇoḥ', devanagari: 'दात्रोः/दातृणोः',acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural) - 中性
    { id: 'datr-n-nav-pl-1', romaji: 'dātṝṇi',         devanagari: 'दातॄणि',       acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'datr-n-nav-pl-2', romaji: 'dātṝṇi',         devanagari: 'दातॄणि',       acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'datr-n-nav-pl-3', romaji: 'dātṝṇi',         devanagari: 'दातॄणि',       acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'datr-n-ins-pl',  romaji: 'dātṛbhiḥ',       devanagari: 'दातृभिः',       acceptableCells: ['cell-ins-pl'] },
    { id: 'datr-n-da-pl-1', romaji: 'dātṛbhyaḥ',      devanagari: 'दातृभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'datr-n-da-pl-2', romaji: 'dātṛbhyaḥ',      devanagari: 'दातृभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'datr-n-gen-pl',  romaji: 'dātṝṇām',        devanagari: 'दातॄणाम्',      acceptableCells: ['cell-gen-pl'] },
    { id: 'datr-n-loc-pl',  romaji: 'dātṛṣu',         devanagari: 'दातृषु',        acceptableCells: ['cell-loc-pl'] }
];

// console.log("datr-n-data.js loaded");
// console.log(datrNCardsData);
