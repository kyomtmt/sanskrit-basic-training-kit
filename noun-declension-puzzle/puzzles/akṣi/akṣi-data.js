// Data for akṣi- (n.) declension puzzle (目)

const puzzleData = [
    // 単数 (Singular)
    // 主格・対格が同じ akṣi
    { id: 'akṣi-na-sg-1', romaji: 'akṣi',           devanagari: 'अक्षि',         acceptableCells: ['cell-nom-sg', 'cell-acc-sg'] },
    { id: 'akṣi-na-sg-2', romaji: 'akṣi',           devanagari: 'अक्षि',         acceptableCells: ['cell-nom-sg', 'cell-acc-sg'] },
    { id: 'akṣi-ins-sg',  romaji: 'akṣṇā',          devanagari: 'अक्ष्णा',       acceptableCells: ['cell-ins-sg'] },
    { id: 'akṣi-dat-sg',  romaji: 'akṣṇe',          devanagari: 'अक्ष्णे',       acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格が同じ akṣṇaḥ
    { id: 'akṣi-ablgen-sg-1', romaji: 'akṣṇaḥ',         devanagari: 'अक्ष्णः',       acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'akṣi-ablgen-sg-2', romaji: 'akṣṇaḥ',         devanagari: 'अक्ष्णः',       acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'akṣi-loc-sg',  romaji: 'akṣṇi/akṣaṇi',   devanagari: 'अक्ष्णि/अक्षणि', acceptableCells: ['cell-loc-sg'] },
    { id: 'akṣi-voc-sg',  romaji: 'akṣi/akṣe',      devanagari: 'अक्षि/अक्षे',    acceptableCells: ['cell-voc-sg'] },

    // 両数 (Dual)
    // 主格・対格・呼格が同じ akṣiṇī
    { id: 'akṣi-nav-du-1', romaji: 'akṣiṇī',         devanagari: 'अक्षिणी',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'akṣi-nav-du-2', romaji: 'akṣiṇī',         devanagari: 'अक्षिणी',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'akṣi-nav-du-3', romaji: 'akṣiṇī',         devanagari: 'अक्षिणी',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ akṣibhyām
    { id: 'akṣi-ida-du-1', romaji: 'akṣibhyām',      devanagari: 'अक्षिभ्याम्',    acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'akṣi-ida-du-2', romaji: 'akṣibhyām',      devanagari: 'अक्षिभ्याम्',    acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'akṣi-ida-du-3', romaji: 'akṣibhyām',      devanagari: 'अक्षिभ्याम्',    acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ akṣṇoḥ
    { id: 'akṣi-gl-du-1',  romaji: 'akṣṇoḥ',         devanagari: 'अक्ष्णोः',      acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'akṣi-gl-du-2',  romaji: 'akṣṇoḥ',         devanagari: 'अक्ष्णोः',      acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・対格・呼格が同じ akṣīṇi
    { id: 'akṣi-nav-pl-1', romaji: 'akṣīṇi',         devanagari: 'अक्षीणि',       acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'akṣi-nav-pl-2', romaji: 'akṣīṇi',         devanagari: 'अक्षीणि',       acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'akṣi-nav-pl-3', romaji: 'akṣīṇi',         devanagari: 'अक्षीणि',       acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'akṣi-ins-pl', romaji: 'akṣibhiḥ',       devanagari: 'अक्षिभिः',      acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ akṣibhyaḥ
    { id: 'akṣi-da-pl-1',  romaji: 'akṣibhyaḥ',      devanagari: 'अक्षिभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'akṣi-da-pl-2',  romaji: 'akṣibhyaḥ',      devanagari: 'अक्षिभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'akṣi-gen-pl', romaji: 'akṣṇām',         devanagari: 'अक्ष्णाम्',      acceptableCells: ['cell-gen-pl'] },
    { id: 'akṣi-loc-pl', romaji: 'akṣiṣu',         devanagari: 'अक्षिषु',        acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。

// console.log("akṣi-data.js loaded");
// console.log(akṣiCardsData.length);
// console.log(akṣiCardsData);
