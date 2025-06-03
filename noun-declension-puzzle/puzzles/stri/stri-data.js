// Data for strī- (f.) declension puzzle (女)

const striCardsData = [
    // 単数 (Singular)
    { id: 'stri-nom-sg',  romaji: 'strī',            devanagari: 'स्त्री',          acceptableCells: ['cell-nom-sg'] },
    { id: 'stri-acc-sg',  romaji: 'striyam/strīm',   devanagari: 'स्त्रियम्/स्त्रीम्', acceptableCells: ['cell-acc-sg'] },
    { id: 'stri-ins-sg',  romaji: 'striyā',          devanagari: 'स्त्रिया',         acceptableCells: ['cell-ins-sg'] },
    { id: 'stri-dat-sg',  romaji: 'striyai',         devanagari: 'स्त्रियै',        acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格が同じ striyāḥ
    { id: 'stri-ablgen-sg-1', romaji: 'striyāḥ',         devanagari: 'स्त्रियाः',       acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'stri-ablgen-sg-2', romaji: 'striyāḥ',         devanagari: 'स्त्रियाः',       acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'stri-loc-sg',  romaji: 'striyām',         devanagari: 'स्त्रियाम्',       acceptableCells: ['cell-loc-sg'] },
    { id: 'stri-voc-sg',  romaji: 'stri',            devanagari: 'स्त्रि',          acceptableCells: ['cell-voc-sg'] }, // 短母音の stri

    // 両数 (Dual)
    // 主格・対格・呼格が同じ striyau
    { id: 'stri-nav-du-1', romaji: 'striyau',         devanagari: 'स्त्रियौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'stri-nav-du-2', romaji: 'striyau',         devanagari: 'स्त्रियौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'stri-nav-du-3', romaji: 'striyau',         devanagari: 'स्त्रियौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ strībhyām
    { id: 'stri-ida-du-1', romaji: 'strībhyām',       devanagari: 'स्त्रीभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'stri-ida-du-2', romaji: 'strībhyām',       devanagari: 'स्त्रीभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'stri-ida-du-3', romaji: 'strībhyām',       devanagari: 'स्त्रीभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ striyoḥ
    { id: 'stri-gl-du-1',  romaji: 'striyoḥ',         devanagari: 'स्त्रियोः',       acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'stri-gl-du-2',  romaji: 'striyoḥ',         devanagari: 'स्त्रियोः',       acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・呼格が同じ striyaḥ
    { id: 'stri-nv-pl-1', romaji: 'striyaḥ',         devanagari: 'स्त्रियः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'stri-nv-pl-2', romaji: 'striyaḥ',         devanagari: 'स्त्रियः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'stri-acc-pl',  romaji: 'striyaḥ/strīḥ',   devanagari: 'स्त्रियः/स्त्रीः',  acceptableCells: ['cell-acc-pl'] },
    { id: 'stri-ins-pl',  romaji: 'strībhiḥ',        devanagari: 'स्त्रीभिः',       acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ strībhyaḥ
    { id: 'stri-da-pl-1', romaji: 'strībhyaḥ',       devanagari: 'स्त्रीभ्यः',       acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'stri-da-pl-2', romaji: 'strībhyaḥ',       devanagari: 'स्त्रीभ्यः',       acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'stri-gen-pl',  romaji: 'strīṇām',         devanagari: 'स्त्रीणाम्',       acceptableCells: ['cell-gen-pl'] },
    { id: 'stri-loc-pl',  romaji: 'strīṣu',          devanagari: 'स्त्रीषु',         acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。

// console.log("stri-data.js loaded");
// console.log(striCardsData.length);
// console.log(striCardsData);
