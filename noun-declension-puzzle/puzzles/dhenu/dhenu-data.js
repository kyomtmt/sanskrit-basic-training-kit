// Data for dhenu (f.) declension puzzle

const dhenuCardsData = [
    // 単数 (Singular)
    { id: 'dhenu-nom-sg',  romaji: 'dhenuḥ',          devanagari: 'धेनुः',       acceptableCells: ['cell-nom-sg'] },
    { id: 'dhenu-acc-sg',  romaji: 'dhenum',          devanagari: 'धेनुम्',       acceptableCells: ['cell-acc-sg'] },
    { id: 'dhenu-ins-sg',  romaji: 'dhenvā',          devanagari: 'धेन्वा',       acceptableCells: ['cell-ins-sg'] },
    { id: 'dhenu-dat-sg',  romaji: 'dhenave/dhenvai', devanagari: 'धेनवे/धेन्वै', acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格単数は dhenoḥ/dhenvāḥ の2形。それぞれカードを作るか、1枚のカードで対応。ここでは1枚のカードで。
    // ただし、パズルとして成立させるため、同じ見た目のカードが2枚必要なので、IDを変えて2つ定義。
    { id: 'dhenu-ablgen-sg-1', romaji: 'dhenoḥ/dhenvāḥ', devanagari: 'धेनोः/धेन्वाः', acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'dhenu-ablgen-sg-2', romaji: 'dhenoḥ/dhenvāḥ', devanagari: 'धेनोः/धेन्वाः', acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'dhenu-loc-sg',  romaji: 'dhenau/dhenvām',  devanagari: 'धेनौ/धेन्वाम्',  acceptableCells: ['cell-loc-sg'] },
    { id: 'dhenu-voc-sg',  romaji: 'dheno',           devanagari: 'धेनो',         acceptableCells: ['cell-voc-sg'] },

    // 両数 (Dual)
    // 主格・対格・呼格が同じ dhenū なので、カードを3枚用意
    { id: 'dhenu-nav-du-1', romaji: 'dhenū',           devanagari: 'धेनू',         acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'dhenu-nav-du-2', romaji: 'dhenū',           devanagari: 'धेनू',         acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'dhenu-nav-du-3', romaji: 'dhenū',           devanagari: 'धेनू',         acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ dhenubhyām なので、カードを3枚用意
    { id: 'dhenu-ida-du-1', romaji: 'dhenubhyām',      devanagari: 'धेनुभ्याम्',    acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'dhenu-ida-du-2', romaji: 'dhenubhyām',      devanagari: 'धेनुभ्याम्',    acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'dhenu-ida-du-3', romaji: 'dhenubhyām',      devanagari: 'धेनुभ्याम्',    acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ dhenvoḥ なので、カードを2枚用意
    { id: 'dhenu-gl-du-1',  romaji: 'dhenvoḥ',         devanagari: 'धेन्वोः',      acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'dhenu-gl-du-2',  romaji: 'dhenvoḥ',         devanagari: 'धेन्वोः',      acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・呼格が同じ dhenavaḥ なので、カードを2枚用意
    { id: 'dhenu-nav-pl-1', romaji: 'dhenavaḥ',        devanagari: 'धेनवः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'dhenu-nav-pl-2', romaji: 'dhenavaḥ',        devanagari: 'धेनवः',       acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'dhenu-acc-pl', romaji: 'dhenūḥ',          devanagari: 'धेनूः',        acceptableCells: ['cell-acc-pl'] },
    { id: 'dhenu-ins-pl', romaji: 'dhenubhiḥ',       devanagari: 'धेनुभिः',      acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ dhenubhyaḥ なので、カードを2枚用意
    { id: 'dhenu-da-pl-1',  romaji: 'dhenubhyaḥ',      devanagari: 'धेनुभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'dhenu-da-pl-2',  romaji: 'dhenubhyaḥ',      devanagari: 'धेनुभ्यः',      acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'dhenu-gen-pl', romaji: 'dhenūnām',        devanagari: 'धेनूनाम्',      acceptableCells: ['cell-gen-pl'] },
    { id: 'dhenu-loc-pl', romaji: 'dhenuṣu',         devanagari: 'धेनुषु',        acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。

// console.log("dhenu-data.js loaded");
// console.log(dhenuCardsData);
