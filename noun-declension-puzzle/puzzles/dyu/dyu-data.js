// Data for dyu- (f.) declension puzzle (天)

const dyuCardsData = [
    // 単数 (Singular)
    // 主格・呼格が同じ dyauḥ
    { id: 'dyu-nv-sg-1', romaji: 'dyauḥ',    devanagari: 'द्यौः',   acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] },
    { id: 'dyu-nv-sg-2', romaji: 'dyauḥ',    devanagari: 'द्यौः',   acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] }, // 2枚用意
    { id: 'dyu-acc-sg',  romaji: 'divam',    devanagari: 'दिवम्',   acceptableCells: ['cell-acc-sg'] }, // アスタリスク付きだがこれを採用
    { id: 'dyu-ins-sg',  romaji: 'divā',     devanagari: 'दिवा',    acceptableCells: ['cell-ins-sg'] },
    { id: 'dyu-dat-sg',  romaji: 'dive',     devanagari: 'दिवे',    acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格が同じ divaḥ
    { id: 'dyu-ablgen-sg-1', romaji: 'divaḥ',    devanagari: 'दिवः',   acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'dyu-ablgen-sg-2', romaji: 'divaḥ',    devanagari: 'दिवः',   acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'dyu-loc-sg',  romaji: 'divi',     devanagari: 'दिवि',    acceptableCells: ['cell-loc-sg'] },

    // 両数 (Dual)
    // 主格・対格・呼格が同じ divau
    { id: 'dyu-nav-du-1', romaji: 'divau',    devanagari: 'दिवौ',   acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'dyu-nav-du-2', romaji: 'divau',    devanagari: 'दिवौ',   acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'dyu-nav-du-3', romaji: 'divau',    devanagari: 'दिवौ',   acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ dyubhyām
    { id: 'dyu-ida-du-1', romaji: 'dyubhyām', devanagari: 'द्युभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'dyu-ida-du-2', romaji: 'dyubhyām', devanagari: 'द्युभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'dyu-ida-du-3', romaji: 'dyubhyām', devanagari: 'द्युभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ divoḥ
    { id: 'dyu-gl-du-1',  romaji: 'divoḥ',    devanagari: 'दिवोः',   acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'dyu-gl-du-2',  romaji: 'divoḥ',    devanagari: 'दिवोः',   acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・呼格が同じ divaḥ
    { id: 'dyu-nv-pl-1', romaji: 'divaḥ',    devanagari: 'दिवः',   acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'dyu-nv-pl-2', romaji: 'divaḥ',    devanagari: 'दिवः',   acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] }, // 2枚用意
    { id: 'dyu-acc-pl',  romaji: 'divaḥ',    devanagari: 'दिवः',   acceptableCells: ['cell-acc-pl'] }, // 活用表では主格と同じ divaḥ だが、一般的には dīvaḥ や dyūn も見られる。ここでは表に従う。
    { id: 'dyu-ins-pl',  romaji: 'dyubhiḥ',  devanagari: 'द्युभिः',  acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ dyubhyaḥ
    { id: 'dyu-da-pl-1', romaji: 'dyubhyaḥ', devanagari: 'द्युभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'dyu-da-pl-2', romaji: 'dyubhyaḥ', devanagari: 'द्युभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'dyu-gen-pl',  romaji: 'divām',    devanagari: 'दिवाम्',   acceptableCells: ['cell-gen-pl'] },
    { id: 'dyu-loc-pl',  romaji: 'dyuṣu',    devanagari: 'द्युषु',    acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。
// 活用表の divaḥ が複数箇所で使われるため、IDを変えて枚数を調整。

// console.log("dyu-data.js loaded");
// console.log(dyuCardsData.length);
// console.log(dyuCardsData);
