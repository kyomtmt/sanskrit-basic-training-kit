// Data for pitṛ- (m.) declension puzzle (父 - 男性)

const pitrMCardsData = [
    // 単数 (Singular)
    { id: 'pitr-m-nom-sg',  romaji: 'pitā',           devanagari: 'पिता',          acceptableCells: ['cell-nom-sg'] },
    { id: 'pitr-m-acc-sg',  romaji: 'pitaram',        devanagari: 'पितरम्',       acceptableCells: ['cell-acc-sg'] },
    { id: 'pitr-m-ins-sg',  romaji: 'pitrā',          devanagari: 'पित्रा',         acceptableCells: ['cell-ins-sg'] },
    { id: 'pitr-m-dat-sg',  romaji: 'pitre',          devanagari: 'पित्रे',         acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格が同じ pituḥ
    { id: 'pitr-m-ablgen-sg-1', romaji: 'pituḥ',          devanagari: 'पितुः',        acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'pitr-m-ablgen-sg-2', romaji: 'pituḥ',          devanagari: 'पितुः',        acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'pitr-m-loc-sg',  romaji: 'pitari',         devanagari: 'पितरि',        acceptableCells: ['cell-loc-sg'] },
    { id: 'pitr-m-voc-sg',  romaji: 'pitaḥ (< pitar)',devanagari: 'पितः (< पितर्)', acceptableCells: ['cell-voc-sg'] }, // 教科書の表記に合わせる

    // 両数 (Dual)
    // 主格・対格・呼格が同じ pitarau
    { id: 'pitr-m-nav-du-1', romaji: 'pitarau',        devanagari: 'पितरौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'pitr-m-nav-du-2', romaji: 'pitarau',        devanagari: 'पितरौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'pitr-m-nav-du-3', romaji: 'pitarau',        devanagari: 'पितरौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ pitṛbhyām
    { id: 'pitr-m-ida-du-1', romaji: 'pitṛbhyām',      devanagari: 'पितृभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'pitr-m-ida-du-2', romaji: 'pitṛbhyām',      devanagari: 'पितृभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'pitr-m-ida-du-3', romaji: 'pitṛbhyām',      devanagari: 'पितृभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ pitroḥ
    { id: 'pitr-m-gl-du-1',  romaji: 'pitroḥ',         devanagari: 'पित्रोः',       acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'pitr-m-gl-du-2',  romaji: 'pitroḥ',         devanagari: 'पित्रोः',       acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・呼格が同じ pitaraḥ
    { id: 'pitr-m-nav-pl-1', romaji: 'pitaraḥ',        devanagari: 'पितरः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'pitr-m-nav-pl-2', romaji: 'pitaraḥ',        devanagari: 'पितरः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'pitr-m-acc-pl',  romaji: 'pitṝn',          devanagari: 'पितॄन्',        acceptableCells: ['cell-acc-pl'] }, // ṝ (rの長母音) + n
    { id: 'pitr-m-ins-pl',  romaji: 'pitṛbhiḥ',       devanagari: 'पितृभिः',       acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ pitṛbhyaḥ
    { id: 'pitr-m-da-pl-1', romaji: 'pitṛbhyaḥ',      devanagari: 'पितृभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'pitr-m-da-pl-2', romaji: 'pitṛbhyaḥ',      devanagari: 'पितृभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'pitr-m-gen-pl',  romaji: 'pitṝṇām',        devanagari: 'पितॄणाम्',      acceptableCells: ['cell-gen-pl'] }, // ṝ (rの長母音) + ṇām
    { id: 'pitr-m-loc-pl',  romaji: 'pitṛṣu',         devanagari: 'पितृषु',        acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。
// 呼格単数の表記は活用表に合わせました。

// console.log("pitr-m-data.js loaded");
// console.log(pitrMCardsData.length);
// console.log(pitrMCardsData);
