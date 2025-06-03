// Data for bhū- (f.) declension puzzle (地)

const bhuCardsData = [
    // 単数 (Singular)
    // 主格・呼格が同じ bhūḥ
    { id: 'bhu-nv-sg-1', romaji: 'bhūḥ',            devanagari: 'भूः',          acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] },
    { id: 'bhu-nv-sg-2', romaji: 'bhūḥ',            devanagari: 'भूः',          acceptableCells: ['cell-nom-sg', 'cell-voc-sg'] }, // 2枚用意
    { id: 'bhu-acc-sg',  romaji: 'bhuvam',          devanagari: 'भुवम्',         acceptableCells: ['cell-acc-sg'] },
    { id: 'bhu-ins-sg',  romaji: 'bhuvā',           devanagari: 'भुवा',          acceptableCells: ['cell-ins-sg'] },
    { id: 'bhu-dat-sg',  romaji: 'bhuve/bhuvai',    devanagari: 'भुवे/भुवै',    acceptableCells: ['cell-dat-sg'] },
    // 奪格・属格が同じ bhuvaḥ/bhuvāḥ
    { id: 'bhu-ablgen-sg-1', romaji: 'bhuvaḥ/bhuvāḥ',  devanagari: 'भुवः/भुवाः',  acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'bhu-ablgen-sg-2', romaji: 'bhuvaḥ/bhuvāḥ',  devanagari: 'भुवः/भुवाः',  acceptableCells: ['cell-abl-sg', 'cell-gen-sg'] },
    { id: 'bhu-loc-sg',  romaji: 'bhuvi/bhuvām',    devanagari: 'भुवि/भुवाम्',   acceptableCells: ['cell-loc-sg'] },

    // 両数 (Dual)
    // 主格・対格・呼格が同じ bhuvau
    { id: 'bhu-nav-du-1', romaji: 'bhuvau',          devanagari: 'भुवौ',         acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'bhu-nav-du-2', romaji: 'bhuvau',          devanagari: 'भुवौ',         acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    { id: 'bhu-nav-du-3', romaji: 'bhuvau',          devanagari: 'भुवौ',         acceptableCells: ['cell-nom-du', 'cell-acc-du', 'cell-voc-du'] },
    // 具格・与格・奪格が同じ bhūbhyām
    { id: 'bhu-ida-du-1', romaji: 'bhūbhyām',        devanagari: 'भूभ्याम्',       acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'bhu-ida-du-2', romaji: 'bhūbhyām',        devanagari: 'भूभ्याम्',       acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    { id: 'bhu-ida-du-3', romaji: 'bhūbhyām',        devanagari: 'भूभ्याम्',       acceptableCells: ['cell-ins-du', 'cell-dat-du', 'cell-abl-du'] },
    // 属格・処格が同じ bhuvoḥ
    { id: 'bhu-gl-du-1',  romaji: 'bhuvoḥ',          devanagari: 'भुवोः',         acceptableCells: ['cell-gen-du', 'cell-loc-du'] },
    { id: 'bhu-gl-du-2',  romaji: 'bhuvoḥ',          devanagari: 'भुवोः',         acceptableCells: ['cell-gen-du', 'cell-loc-du'] },

    // 複数 (Plural)
    // 主格・呼格が同じ bhuvaḥ
    { id: 'bhu-nv-pl-1', romaji: 'bhuvaḥ',          devanagari: 'भुवः',         acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'bhu-nv-pl-2', romaji: 'bhuvaḥ',          devanagari: 'भुवः',         acceptableCells: ['cell-nom-pl', 'cell-voc-pl'] },
    { id: 'bhu-acc-pl',  romaji: 'bhuvaḥ',          devanagari: 'भुवः',         acceptableCells: ['cell-acc-pl'] }, // 活用表では主格と同じbhuvaḥだが、通常はbhūḥも見られる。ここでは表に従う。
    { id: 'bhu-ins-pl',  romaji: 'bhūbhiḥ',         devanagari: 'भूभिः',         acceptableCells: ['cell-ins-pl'] },
    // 与格・奪格が同じ bhūbhyaḥ
    { id: 'bhu-da-pl-1', romaji: 'bhūbhyaḥ',        devanagari: 'भूभ्यः',        acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'bhu-da-pl-2', romaji: 'bhūbhyaḥ',        devanagari: 'भूभ्यः',        acceptableCells: ['cell-dat-pl', 'cell-abl-pl'] },
    { id: 'bhu-gen-pl',  romaji: 'bhuvām/bhūnām',   devanagari: 'भुवाम्/भूनाम्',  acceptableCells: ['cell-gen-pl'] },
    { id: 'bhu-loc-pl',  romaji: 'bhūṣu',           devanagari: 'भूषु',          acceptableCells: ['cell-loc-pl'] }
];
// カードの総数が24枚になるようにIDを変えて定義しました。
// 複数対格は活用表に従い bhuvaḥ としましたが、他の資料も参照すると良いかもしれません。

// console.log("bhu-data.js loaded");
// console.log(bhuCardsData.length);
// console.log(bhuCardsData);
