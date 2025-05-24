// Data for prāc- (n.) declension puzzle (東方の、前方へ - 中性)

const pracNCardsData = [
    // 単数 (Singular) - 中性
    // 主格・対格・呼格が同じ prāk なので、カードを3枚用意
    { id: 'prac-n-nav-sg-1', romaji: 'prāk',        devanagari: 'प्राक्',        acceptableCells: ['cell-nom-sg', 'cell-acc-sg', 'cell-voc-sg'] }, // 語幹の末尾がkになる
    { id: 'prac-n-nav-sg-2', romaji: 'prāk',        devanagari: 'प्राक्',        acceptableCells: ['cell-nom-sg', 'cell-acc-sg', 'cell-voc-sg'] },
    { id: 'prac-n-nav-sg-3', romaji: 'prāk',        devanagari: 'प्राक्',        acceptableCells: ['cell-nom-sg', 'cell-acc-sg', 'cell-voc-sg'] },
    { id: 'prac-n-ins-sg',  romaji: 'prācā',       devanagari: 'प्राचा',       acceptableCells: ['cell-ins-sg'] }, // 男性形と同じ
    { id: 'prac-n-dat-sg',  romaji: 'prāce',       devanagari: 'प्राचे',       acceptableCells: ['cell-dat-sg'] }, // 男性形と同じ
    // 奪格・属格が同じ prācaḥ なので、カードを2枚用意 (男性形と同じ)
    { id: 'prac-n-ablgen-sg-1', romaji: 'prācaḥ',      devanagari: 'प्राचः',      acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'prac-n-ablgen-sg-2', romaji: 'prācaḥ',      devanagari: 'प्राचः',      acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'prac-n-loc-sg',  romaji: 'prāci',       devanagari: 'प्राचि',       acceptableCells: ['cell-loc-sg'] }, // 男性形と同じ

    // 両数 (Dual) - 中性
    // 主格・対格・呼格が同じ prācī なので、カードを3枚用意
    { id: 'prac-n-nav-du-1', romaji: 'prācī',       devanagari: 'प्राची',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'prac-n-nav-du-2', romaji: 'prācī',       devanagari: 'प्राची',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'prac-n-nav-du-3', romaji: 'prācī',       devanagari: 'प्राची',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ prāgbhyām なので、カードを3枚用意 (男性形と同じ)
    { id: 'prac-n-ida-du-1', romaji: 'prāgbhyām',   devanagari: 'प्राग्भ्याम्',  acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'prac-n-ida-du-2', romaji: 'prāgbhyām',   devanagari: 'प्राग्भ्याम्',  acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'prac-n-ida-du-3', romaji: 'prāgbhyām',   devanagari: 'प्राग्भ्याम्',  acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ prācoḥ なので、カードを2枚用意 (男性形と同じ)
    { id: 'prac-n-gl-du-1',  romaji: 'prācoḥ',      devanagari: 'प्राचोः',     acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'prac-n-gl-du-2',  romaji: 'prācoḥ',      devanagari: 'प्राचोः',     acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural) - 中性
    // 主格・対格・呼格が同じ prāñci なので、カードを3枚用意
    { id: 'prac-n-nav-pl-1', romaji: 'prāñci',      devanagari: 'प्राञ्चि',     acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'prac-n-nav-pl-2', romaji: 'prāñci',      devanagari: 'प्राञ्चि',     acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'prac-n-nav-pl-3', romaji: 'prāñci',      devanagari: 'प्राञ्चि',     acceptableCells: ['cell-nom-pl', 'cell-acc-pl', 'cell-voc-pl'] },
    { id: 'prac-n-ins-pl', romaji: 'prāgbhiḥ',    devanagari: 'प्राग्भिः',    acceptableCells: ['cell-ins-pl'] }, // 男性形と同じ
    // 与格・奪格が同じ prāgbhyaḥ なので、カードを2枚用意 (男性形と同じ)
    { id: 'prac-n-da-pl-1',  romaji: 'prāgbhyaḥ',   devanagari: 'प्राग्भ्यः',   acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'prac-n-da-pl-2',  romaji: 'prāgbhyaḥ',   devanagari: 'प्राग्भ्यः',   acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'prac-n-gen-pl', romaji: 'prācām',      devanagari: 'प्राचाम्',     acceptableCells: ['cell-gen-pl'] }, // 男性形と同じ
    { id: 'prac-n-loc-pl', romaji: 'prākṣu',      devanagari: 'प्राक्षु',      acceptableCells: ['cell-loc-pl'] }  // 男性形と同じ
];
// カードの総数が24枚になるようにIDを変えて定義しました。
// 中性形の主格・対格・呼格は提供された情報に基づき、他は男性形と同じとしました。

// console.log("prac-n-data.js loaded");
// console.log(pracNCardsData);
