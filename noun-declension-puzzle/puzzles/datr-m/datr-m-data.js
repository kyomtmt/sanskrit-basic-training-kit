// Data for dātṛ- (m.) declension puzzle (与える者、与え手 - 男性)

const datrMCardsData = [
    // 単数 (Singular)
    { id: 'datr-m-nom-sg',  romaji: 'dātā',           devanagari: 'दाता',          acceptableCells: ['cell-nom-sg'] },
    { id: 'datr-m-acc-sg',  romaji: 'dātāram',        devanagari: 'दातारम्',       acceptableCells: ['cell-acc-sg'] },
    { id: 'datr-m-ins-sg',  romaji: 'dātrā',          devanagari: 'दात्रा',         acceptableCells: ['cell-ins-sg'] },
    { id: 'datr-m-dat-sg',  romaji: 'dātre',          devanagari: 'दात्रे',         acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格が同じ dātuḥ
    { id: 'datr-m-ablgen-sg-1', romaji: 'dātuḥ',          devanagari: 'दातुः',        acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'datr-m-ablgen-sg-2', romaji: 'dātuḥ',          devanagari: 'दातुः',        acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'datr-m-loc-sg',  romaji: 'dātari',         devanagari: 'दातरि',        acceptableCells: ['cell-loc-sg'] },
    { id: 'datr-m-voc-sg',  romaji: 'dātaḥ',          devanagari: 'दातः',         acceptableCells: ['cell-voc-sg'] },

    // 両数 (Dual)
    // 主格・対格・呼格が同じ dātārau
    { id: 'datr-m-nav-du-1', romaji: 'dātārau',        devanagari: 'दातारौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'datr-m-nav-du-2', romaji: 'dātārau',        devanagari: 'दातारौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'datr-m-nav-du-3', romaji: 'dātārau',        devanagari: 'दातारौ',       acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ dātṛbhyām
    { id: 'datr-m-ida-du-1', romaji: 'dātṛbhyām',      devanagari: 'दातृभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'datr-m-ida-du-2', romaji: 'dātṛbhyām',      devanagari: 'दातृभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'datr-m-ida-du-3', romaji: 'dātṛbhyām',      devanagari: 'दातृभ्याम्',     acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ dātroḥ
    { id: 'datr-m-gl-du-1',  romaji: 'dātroḥ',         devanagari: 'दात्रोः',       acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'datr-m-gl-du-2',  romaji: 'dātroḥ',         devanagari: 'दात्रोः',       acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・呼格が同じ dātāraḥ
    { id: 'datr-m-nav-pl-1', romaji: 'dātāraḥ',        devanagari: 'दातारः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'datr-m-nav-pl-2', romaji: 'dātāraḥ',        devanagari: 'दातारः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'datr-m-acc-pl',  romaji: 'dātṝn',          devanagari: 'दातॄन्',        acceptableCells: ['cell-acc-pl'] }, // ṝ (rの下に二重線または上にマクロン) + n
    { id: 'datr-m-ins-pl',  romaji: 'dātṛbhiḥ',       devanagari: 'दातृभिः',       acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ dātṛbhyaḥ
    { id: 'datr-m-da-pl-1', romaji: 'dātṛbhyaḥ',      devanagari: 'दातृभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'datr-m-da-pl-2', romaji: 'dātṛbhyaḥ',      devanagari: 'दातृभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'datr-m-gen-pl',  romaji: 'dātṝṇām',        devanagari: 'दातॄणाम्',      acceptableCells: ['cell-gen-pl'] }, // ṝ (rの下に二重線または上にマクロン) + ṇām
    { id: 'datr-m-loc-pl',  romaji: 'dātṛṣu',         devanagari: 'दातृषु',        acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。
// 複数対格と複数属格のṝは、rの長母音を示します。適切な文字コードで入力・表示されるか確認が必要です。

// console.log("datr-m-data.js loaded");
// console.log(datrMCardsData.length);
// console.log(datrMCardsData);
