// Data for marut declension puzzle

const puzzleData = [
    // 単数 (Singular)
    { id: 'card-marut-nom-sg',  romaji: 'marut',    devanagari: 'मरुत्',   correctCell: 'cell-nom-sg' },
    { id: 'card-marut-acc-sg',  romaji: 'marutam',  devanagari: 'मरुतम्',  correctCell: 'cell-acc-sg' },
    { id: 'card-marut-ins-sg',  romaji: 'marutā',   devanagari: 'मरुता',   correctCell: 'cell-ins-sg' }, // ins = instrumental
    { id: 'card-marut-dat-sg',  romaji: 'marute',   devanagari: 'मरुते',   correctCell: 'cell-dat-sg' }, // dat = dative
    { id: 'card-marut-abl-sg',  romaji: 'marutaḥ',  devanagari: 'मरुतः',  correctCell: 'cell-abl-sg' }, // abl = ablative
    { id: 'card-marut-gen-sg',  romaji: 'marutaḥ',  devanagari: 'मरुतः',  correctCell: 'cell-gen-sg' }, // gen = genitive
    { id: 'card-marut-loc-sg',  romaji: 'maruti',   devanagari: 'मरुति',   correctCell: 'cell-loc-sg' }, // loc = locative
    { id: 'card-marut-voc-sg',  romaji: 'marut',    devanagari: 'मरुत्',   correctCell: 'cell-voc-sg' }, // voc = vocative

    // 両数 (Dual)
    { id: 'card-marut-nom-du',  romaji: 'marutau',  devanagari: 'मरुतौ',  correctCell: 'cell-nom-du' },
    { id: 'card-marut-acc-du',  romaji: 'marutau',  devanagari: 'मरुतौ',  correctCell: 'cell-acc-du' },
    { id: 'card-marut-ins-du',  romaji: 'marudbhyām',devanagari: 'मरुद्भ्याम्',correctCell: 'cell-ins-du' },
    { id: 'card-marut-dat-du',  romaji: 'marudbhyām',devanagari: 'मरुद्भ्याम्',correctCell: 'cell-dat-du' },
    { id: 'card-marut-abl-du',  romaji: 'marudbhyām',devanagari: 'मरुद्भ्याम्',correctCell: 'cell-abl-du' },
    { id: 'card-marut-gen-du',  romaji: 'marutoḥ',  devanagari: 'मरुतोः', correctCell: 'cell-gen-du' },
    { id: 'card-marut-loc-du',  romaji: 'marutoḥ',  devanagari: 'मरुतोः', correctCell: 'cell-loc-du' },
    { id: 'card-marut-voc-du',  romaji: 'marutau',  devanagari: 'मरुतौ',  correctCell: 'cell-voc-du' },

    // 複数 (Plural)
    { id: 'card-marut-nom-pl',  romaji: 'marutaḥ',  devanagari: 'मरुतः',  correctCell: 'cell-nom-pl' },
    { id: 'card-marut-acc-pl',  romaji: 'marutaḥ',  devanagari: 'मरुतः',  correctCell: 'cell-acc-pl' }, // 表22の空欄を補完した形
    { id: 'card-marut-ins-pl',  romaji: 'marudbhiḥ',devanagari: 'मरुद्भिः',correctCell: 'cell-ins-pl' },
    { id: 'card-marut-dat-pl',  romaji: 'marudbhyaḥ',devanagari: 'मरुद्भ्यः',correctCell: 'cell-dat-pl' },
    { id: 'card-marut-abl-pl',  romaji: 'marudbhyaḥ',devanagari: 'मरुद्भ्यः',correctCell: 'cell-abl-pl' },
    { id: 'card-marut-gen-pl',  romaji: 'marutām',  devanagari: 'मरुताम्', correctCell: 'cell-gen-pl' },
    { id: 'card-marut-loc-pl',  romaji: 'marutsu',  devanagari: 'मरुत्सु',  correctCell: 'cell-loc-pl' },
    { id: 'card-marut-voc-pl',  romaji: 'marutaḥ',  devanagari: 'मरुतः',  correctCell: 'cell-voc-pl' }
];

// もし、このファイルが読み込まれたことを確認したい場合や、データの内容を確認したい場合は、
// 以下のコメントアウトを外して、ブラウザの開発者コンソールで確認できます。
// console.log("marut-data.js loaded");
// console.log(marutCardsData);
