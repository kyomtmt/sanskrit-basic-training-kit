// Data for dyu- (f.) declension puzzle (天)

const puzzleData = [
    // 単数 (Singular)
    { id: 'dyu-nv-sg-1', romaji: 'dyauḥ',    devanagari: 'द्यौः',   acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] },
    { id: 'dyu-nv-sg-2', romaji: 'dyauḥ',    devanagari: 'द्यौः',   acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] },
    { id: 'dyu-acc-sg',  romaji: 'divam',    devanagari: 'दिवम्',   acceptableCells: ['cell-acc-sg'] },
    { id: 'dyu-ins-sg',  romaji: 'divā',     devanagari: 'दिवा',    acceptableCells: ['cell-ins-sg'] },
    { id: 'dyu-dat-sg',  romaji: 'dive',     devanagari: 'दिवे',    acceptableCells: ['cell-dat-sg'] },
    // ★★★ 単数 奪格・属格の divaḥ に (単数) を追記 ★★★
    { id: 'dyu-ablgen-sg-1', romaji: 'divaḥ (単数)',devanagari: 'दिवः',   acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'dyu-ablgen-sg-2', romaji: 'divaḥ (単数)',devanagari: 'दिवः',   acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'dyu-loc-sg',  romaji: 'divi',     devanagari: 'दिवि',    acceptableCells: ['cell-loc-sg'] },

    // 両数 (Dual)
    { id: 'dyu-nav-du-1', romaji: 'divau',    devanagari: 'दिवौ',   acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'dyu-nav-du-2', romaji: 'divau',    devanagari: 'दिवौ',   acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'dyu-nav-du-3', romaji: 'divau',    devanagari: 'दिवौ',   acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'dyu-ida-du-1', romaji: 'dyubhyām', devanagari: 'द्युभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'dyu-ida-du-2', romaji: 'dyubhyām', devanagari: 'द्युभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'dyu-ida-du-3', romaji: 'dyubhyām', devanagari: 'द्युभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'dyu-gl-du-1',  romaji: 'divoḥ',    devanagari: 'दिवोः',   acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'dyu-gl-du-2',  romaji: 'divoḥ',    devanagari: 'दिवोः',   acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // ★★★ 複数 主格・呼格の divaḥ に (複数) を追記 ★★★
    { id: 'dyu-nv-pl-1', romaji: 'divaḥ (複数)',devanagari: 'दिवः',   acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'dyu-nv-pl-2', romaji: 'divaḥ (複数)',devanagari: 'दिवः',   acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    // ★★★ 複数 対格の divaḥ に (複数) を追記 ★★★
    { id: 'dyu-acc-pl',  romaji: 'divaḥ (複数)',devanagari: 'दिवः',   acceptableCells: ['cell-acc-pl'] },
    { id: 'dyu-ins-pl',  romaji: 'dyubhiḥ',  devanagari: 'द्युभिः',  acceptableCells: ['cell-ins-pl'] },
    { id: 'dyu-da-pl-1', romaji: 'dyubhyaḥ', devanagari: 'द्युभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'dyu-da-pl-2', romaji: 'dyubhyaḥ', devanagari: 'द्युभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'dyu-gen-pl',  romaji: 'divām',    devanagari: 'दिवाम्',   acceptableCells: ['cell-gen-pl'] },
    { id: 'dyu-loc-pl',  romaji: 'dyuṣu',    devanagari: 'द्युषु',    acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。
// divaḥ (単数) は2枚、divaḥ (複数) は主呼用2枚と対格用1枚の合計3枚。

// console.log("dyu-data.js loaded");
// console.log(dyuCardsData.length);
// console.log(dyuCardsData);
