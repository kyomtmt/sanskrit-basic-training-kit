// Data for prāc- (m.) declension puzzle (東方の、前方へ - 男性)

const pracMCardsData = [
    // 単数 (Singular) - 男性
    { id: 'prac-m-nom-sg',  romaji: 'prāṅ',        devanagari: 'प्राङ्',        acceptableCells: ['cell-nom-sg'] }, // N.V.sg. prāṅ (強語幹の特殊形)
    { id: 'prac-m-acc-sg',  romaji: 'prāñcam',     devanagari: 'प्राञ्चम्',     acceptableCells: ['cell-acc-sg'] }, // 強語幹
    { id: 'prac-m-ins-sg',  romaji: 'prācā',       devanagari: 'प्राचा',       acceptableCells: ['cell-ins-sg'] }, // 中語幹
    { id: 'prac-m-dat-sg',  romaji: 'prāce',       devanagari: 'प्राचे',       acceptableCells: ['cell-dat-sg'] }, // 中語幹 (一般的な形)
    { id: 'prac-m-abl-sg',  romaji: 'prācaḥ (単数)',      devanagari: 'प्राचः',      acceptableCells: ['cell-abl-sg'] }, // 中語幹 (一般的な形)
    { id: 'prac-m-gen-sg',  romaji: 'prācaḥ (単数)',      devanagari: 'प्राचः',      acceptableCells: ['cell-gen-sg'] }, // 中語幹 (一般的な形)
    { id: 'prac-m-loc-sg',  romaji: 'prāci',       devanagari: 'प्राचि',       acceptableCells: ['cell-loc-sg'] }, // 中語幹
    { id: 'prac-m-voc-sg',  romaji: 'prāṅ',        devanagari: 'प्राङ्',        acceptableCells: ['cell-voc-sg'] }, // N.V.sg. prāṅ (主格と同じ)

    // 両数 (Dual) - 男性
    // 主格・対格・呼格が同じ prāñcau なので、カードを3枚用意
    { id: 'prac-m-nav-du-1', romaji: 'prāñcau',     devanagari: 'प्राञ्चौ',     acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] }, // 強語幹
    { id: 'prac-m-nav-du-2', romaji: 'prāñcau',     devanagari: 'प्राञ्चौ',     acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'prac-m-nav-du-3', romaji: 'prāñcau',     devanagari: 'प्राञ्चौ',     acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ prāgbhyām (一般的な形) なので、カードを3枚用意
    { id: 'prac-m-ida-du-1', romaji: 'prāgbhyām',   devanagari: 'प्राग्भ्याम्',  acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] }, // 中語幹
    { id: 'prac-m-ida-du-2', romaji: 'prāgbhyām',   devanagari: 'प्राग्भ्याम्',  acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'prac-m-ida-du-3', romaji: 'prāgbhyām',   devanagari: 'प्राग्भ्याम्',  acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ prācoḥ (一般的な形) なので、カードを2枚用意
    { id: 'prac-m-gl-du-1',  romaji: 'prācoḥ',      devanagari: 'प्राचोः',     acceptableCells: ['cell-gen-du', 'cell-loc-du'] }, // 中語幹
    { id: 'prac-m-gl-du-2',  romaji: 'prācoḥ',      devanagari: 'प्राचोः',     acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural) - 男性
    // 主格・呼格が同じ prāñcaḥ なので、カードを2枚用意
    { id: 'prac-m-nav-pl-1', romaji: 'prāñcaḥ',     devanagari: 'प्राञ्चः',     acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] }, // 強語幹
    { id: 'prac-m-nav-pl-2', romaji: 'prāñcaḥ',     devanagari: 'प्राञ्चः',     acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'prac-m-acc-pl', romaji: 'prācaḥ (複数)',      devanagari: 'प्राचः',      acceptableCells: ['cell-acc-pl'] }, // 中語幹
    { id: 'prac-m-ins-pl', romaji: 'prāgbhiḥ',    devanagari: 'प्राग्भिः',    acceptableCells: ['cell-ins-pl'] }, // 中語幹
    // 与格・奪格が同じ prāgbhyaḥ (一般的な形) なので、カードを2枚用意
    { id: 'prac-m-da-pl-1',  romaji: 'prāgbhyaḥ',   devanagari: 'प्राग्भ्यः',   acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] }, // 中語幹
    { id: 'prac-m-da-pl-2',  romaji: 'prāgbhyaḥ',   devanagari: 'प्राग्भ्यः',   acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'prac-m-gen-pl', romaji: 'prācām',      devanagari: 'प्राचाम्',     acceptableCells: ['cell-gen-pl'] }, // 中語幹 (一般的な形)
    { id: 'prac-m-loc-pl', romaji: 'prākṣu',      devanagari: 'प्राक्षु',      acceptableCells: ['cell-loc-pl'] }  // 中語幹
];
// カードの総数が24枚になるようにIDを変えて定義しました。
// 活用表にない形は一般的なac-語幹の男性形の活用を参考に補いました。
// prāc- のような語末がcの場合、砂内部サンディでkに変わることが多い点を考慮 (例: prāgbhyām, prākṣu)

// console.log("prac-m-data.js loaded");
// console.log(pracMCardsData);
