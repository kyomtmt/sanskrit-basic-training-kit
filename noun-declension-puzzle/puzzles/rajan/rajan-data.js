// Data for rājan (m.) declension puzzle

const rajanCardsData = [
    // 単数 (Singular)
    { id: 'rajan-nom-sg',  romaji: 'rājā',           devanagari: 'राजा',          acceptableCells: ['cell-nom-sg'] }, // 強語幹
    { id: 'rajan-acc-sg',  romaji: 'rājānam',        devanagari: 'राजानम्',       acceptableCells: ['cell-acc-sg'] }, // 強語幹
    { id: 'rajan-ins-sg',  romaji: 'rājñā',          devanagari: 'राज्ञा',         acceptableCells: ['cell-ins-sg'] }, // 弱語幹
    { id: 'rajan-dat-sg',  romaji: 'rājñe',          devanagari: 'राज्ञे',         acceptableCells: ['cell-dat-sg'] }, // 弱語幹
    // 奪格・属格が同じ rājñaḥ なので、カードを2枚用意
    { id: 'rajan-ablgen-sg-1', romaji: 'rājñaḥ',         devanagari: 'राज्ञः',        acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] }, // 弱語幹
    { id: 'rajan-ablgen-sg-2', romaji: 'rājñaḥ',         devanagari: 'राज्ञः',        acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] }, // 弱語幹
    { id: 'rajan-loc-sg',  romaji: 'rājñi/rājani',   devanagari: 'राज्ञि/राजनि',  acceptableCells: ['cell-loc-sg'] }, // 弱語幹/中語幹
    { id: 'rajan-voc-sg',  romaji: 'rājan',          devanagari: 'राजन्',         acceptableCells: ['cell-voc-sg'] }, // 中語幹

    // 両数 (Dual)
    // 主格・対格・呼格が同じ rājānau なので、カードを3枚用意
    { id: 'rajan-nav-du-1', romaji: 'rājānau',        devanagari: 'राजानौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] }, // 強語幹
    { id: 'rajan-nav-du-2', romaji: 'rājānau',        devanagari: 'राजानौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] }, // 強語幹
    { id: 'rajan-nav-du-3', romaji: 'rājānau',        devanagari: 'राजानौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] }, // 強語幹
    // 具格・与格・奪格が同じ rājabhyām なので、カードを3枚用意
    { id: 'rajan-ida-du-1', romaji: 'rājabhyām',      devanagari: 'राजभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] }, // 中語幹
    { id: 'rajan-ida-du-2', romaji: 'rājabhyām',      devanagari: 'राजभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] }, // 中語幹
    { id: 'rajan-ida-du-3', romaji: 'rājabhyām',      devanagari: 'राजभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] }, // 中語幹
    // 属格・処格が同じ rājñoḥ なので、カードを2枚用意
    { id: 'rajan-gl-du-1',  romaji: 'rājñoḥ',         devanagari: 'राज्ञोः',       acceptableCells: ['cell-gen-du', 'cell-loc-du'] }, // 弱語幹
    { id: 'rajan-gl-du-2',  romaji: 'rājñoḥ',         devanagari: 'राज्ञोः',       acceptableCells: ['cell-gen-du', 'cell-loc-du'] }, // 弱語幹

    // 複数 (Plural)
    // 主格・呼格が同じ rājānaḥ なので、カードを2枚用意
    { id: 'rajan-nav-pl-1', romaji: 'rājānaḥ',        devanagari: 'राजानः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] }, // 強語幹
    { id: 'rajan-nav-pl-2', romaji: 'rājānaḥ',        devanagari: 'राजानः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] }, // 強語幹
    { id: 'rajan-acc-pl', romaji: 'rājñaḥ',         devanagari: 'राज्ञः',        acceptableCells: ['cell-acc-pl'] }, // 弱語幹
    { id: 'rajan-ins-pl', romaji: 'rājabhiḥ',       devanagari: 'राजभिः',       acceptableCells: ['cell-ins-pl'] }, // 中語幹
    // 与格・奪格が同じ rājabhyaḥ なので、カードを2枚用意
    { id: 'rajan-da-pl-1',  romaji: 'rājabhyaḥ',      devanagari: 'राजभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] }, // 中語幹
    { id: 'rajan-da-pl-2',  romaji: 'rājabhyaḥ',      devanagari: 'राजभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] }, // 中語幹
    { id: 'rajan-gen-pl', romaji: 'rājñām',         devanagari: 'राज्ञाम्',       acceptableCells: ['cell-gen-pl'] }, // 弱語幹
    { id: 'rajan-loc-pl', romaji: 'rājasu',         devanagari: 'राजसु',        acceptableCells: ['cell-loc-pl'] }  // 中語幹
];
// カードの総数が24枚になるようにIDを変えて定義しました。

// console.log("rajan-data.js loaded");
// console.log(rajanCardsData);
