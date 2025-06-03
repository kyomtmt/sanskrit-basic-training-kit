// Data for pati- (m.) declension puzzle (夫)

const patiCardsData = [
    // 単数 (Singular) - pati- 特有の活用
    { id: 'pati-nom-sg',  romaji: 'patiḥ',    devanagari: 'पतिः',   acceptableCells: ['cell-nom-sg'] },
    { id: 'pati-acc-sg',  romaji: 'patim',    devanagari: 'पतिम्',   acceptableCells: ['cell-acc-sg'] },
    { id: 'pati-ins-sg',  romaji: 'patyā',    devanagari: 'पत्या',    acceptableCells: ['cell-ins-sg'] },
    { id: 'pati-dat-sg',  romaji: 'patye',    devanagari: 'पत्ये',   acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格が同じ patyuḥ
    { id: 'pati-ablgen-sg-1', romaji: 'patyuḥ',   devanagari: 'पत्युः',   acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'pati-ablgen-sg-2', romaji: 'patyuḥ',   devanagari: 'पत्युः',   acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'pati-loc-sg',  romaji: 'patyau',   devanagari: 'पत्यौ',   acceptableCells: ['cell-loc-sg'] },
    { id: 'pati-voc-sg',  romaji: 'pate',     devanagari: 'पते',     acceptableCells: ['cell-voc-sg'] },

    // 両数 (Dual) - kavi- の変化に従う
    // 主格・対格・呼格が同じ kavī (pati- の場合は patī)
    { id: 'pati-nav-du-1', romaji: 'patī',     devanagari: 'पती',     acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'pati-nav-du-2', romaji: 'patī',     devanagari: 'पती',     acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'pati-nav-du-3', romaji: 'patī',     devanagari: 'पती',     acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ kavibhyām (pati- の場合は patibhyām)
    { id: 'pati-ida-du-1', romaji: 'patibhyām',devanagari: 'पतिभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'pati-ida-du-2', romaji: 'patibhyām',devanagari: 'पतिभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'pati-ida-du-3', romaji: 'patibhyām',devanagari: 'पतिभ्याम्', acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ kavyoḥ (pati- の場合は patyoḥ)
    { id: 'pati-gl-du-1',  romaji: 'patyoḥ',   devanagari: 'पत्योः',   acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'pati-gl-du-2',  romaji: 'patyoḥ',   devanagari: 'पत्योः',   acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural) - kavi- の変化に従う
    // 主格・呼格が同じ kavayaḥ (pati- の場合は patayaḥ)
    { id: 'pati-nav-pl-1', romaji: 'patayaḥ',  devanagari: 'पतयः',   acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'pati-nav-pl-2', romaji: 'patayaḥ',  devanagari: 'पतयः',   acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'pati-acc-pl', romaji: 'patīn',    devanagari: 'पतीन्',   acceptableCells: ['cell-acc-pl'] }, // kavīn と同様
    { id: 'pati-ins-pl', romaji: 'patibhiḥ', devanagari: 'पतिभिः',  acceptableCells: ['cell-ins-pl'] }, // kavibhiḥ と同様
    // 与格・奪格が同じ kavibhyaḥ (pati- の場合は patibhyaḥ)
    { id: 'pati-da-pl-1',  romaji: 'patibhyaḥ',devanagari: 'पतिभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'pati-da-pl-2',  romaji: 'patibhyaḥ',devanagari: 'पतिभ्यः',  acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'pati-gen-pl', romaji: 'patīnām',  devanagari: 'पतीनाम्',  acceptableCells: ['cell-gen-pl'] }, // kavīnām と同様
    { id: 'pati-loc-pl', romaji: 'patiṣu',   devanagari: 'पतिषु',   acceptableCells: ['cell-loc-pl'] }  // kaviṣu と同様
];
// カードの総数が24枚になるようにIDを変えて定義しました。
// 単数形はpati-特有の活用、両数・複数形はkavi-の活用を参考にしました。

// console.log("pati-data.js loaded");
// console.log(patiCardsData.length);
// console.log(patiCardsData);
