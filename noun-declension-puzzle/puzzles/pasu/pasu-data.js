// Data for paśu (m.) declension puzzle (従来式)

const pasuCardsData = [
    // 単数 (Singular)
    { id: 'card-pasu-nom-sg',  romaji: 'paśuḥ',    devanagari: 'पशुः',   correctCell: 'cell-nom-sg' },
    { id: 'card-pasu-acc-sg',  romaji: 'paśum',    devanagari: 'पशुम्',   correctCell: 'cell-acc-sg' },
    { id: 'card-pasu-ins-sg',  romaji: 'paśunā',   devanagari: 'पशुना',   correctCell: 'cell-ins-sg' },
    { id: 'card-pasu-dat-sg',  romaji: 'paśave',   devanagari: 'पशवे',   correctCell: 'cell-dat-sg' },
    { id: 'card-pasu-abl-sg',  romaji: 'paśoḥ',    devanagari: 'पशोः',    correctCell: 'cell-abl-sg' }, // 活用表では paśoḥ
    { id: 'card-pasu-gen-sg',  romaji: 'paśoḥ',    devanagari: 'पशोः',    correctCell: 'cell-gen-sg' }, // 活用表では paśoḥ
    { id: 'card-pasu-loc-sg',  romaji: 'paśau',    devanagari: 'पशौ',    correctCell: 'cell-loc-sg' },
    { id: 'card-pasu-voc-sg',  romaji: 'paśo',     devanagari: 'पशो',     correctCell: 'cell-voc-sg' }, // 活用表では paśo

    // 両数 (Dual)
    { id: 'card-pasu-nom-du',  romaji: 'paśū',     devanagari: 'पशू',     correctCell: 'cell-nom-du' }, // N.Ac.V.du. paśū (長母音)
    { id: 'card-pasu-acc-du',  romaji: 'paśū',     devanagari: 'पशू',     correctCell: 'cell-acc-du' }, // N.Ac.V.du. paśū (長母音)
    { id: 'card-pasu-ins-du',  romaji: 'paśubhyām',devanagari: 'पशुभ्याम्', correctCell: 'cell-ins-du' },
    { id: 'card-pasu-dat-du',  romaji: 'paśubhyām',devanagari: 'पशुभ्याम्', correctCell: 'cell-dat-du' },
    { id: 'card-pasu-abl-du',  romaji: 'paśubhyām',devanagari: 'पशुभ्याम्', correctCell: 'cell-abl-du' },
    { id: 'card-pasu-gen-du',  romaji: 'paśvoḥ',   devanagari: 'पश्वोः',   correctCell: 'cell-gen-du' },
    { id: 'card-pasu-loc-du',  romaji: 'paśvoḥ',   devanagari: 'पश्वोः',   correctCell: 'cell-loc-du' },
    { id: 'card-pasu-voc-du',  romaji: 'paśū',     devanagari: 'पशू',     correctCell: 'cell-voc-du' }, // N.Ac.V.du. paśū (=N.)

    // 複数 (Plural)
    { id: 'card-pasu-nom-pl',  romaji: 'paśavaḥ',  devanagari: 'पशवः',   correctCell: 'cell-nom-pl' },
    { id: 'card-pasu-acc-pl',  romaji: 'paśūn',    devanagari: 'पशून्',   correctCell: 'cell-acc-pl' }, // 活用表では paśūn (長母音)
    { id: 'card-pasu-ins-pl',  romaji: 'paśubhiḥ', devanagari: 'पशुभिः',  correctCell: 'cell-ins-pl' },
    { id: 'card-pasu-dat-pl',  romaji: 'paśubhyaḥ',devanagari: 'पशुभ्यः',  correctCell: 'cell-dat-pl' },
    { id: 'card-pasu-abl-pl',  romaji: 'paśubhyaḥ',devanagari: 'पशुभ्यः',  correctCell: 'cell-abl-pl' },
    { id: 'card-pasu-gen-pl',  romaji: 'paśūnām',  devanagari: 'पशूनाम्',  correctCell: 'cell-gen-pl' },
    { id: 'card-pasu-loc-pl',  romaji: 'paśuṣu',   devanagari: 'पशुषु',   correctCell: 'cell-loc-pl' },
    { id: 'card-pasu-voc-pl',  romaji: 'paśavaḥ',  devanagari: 'पशवः',   correctCell: 'cell-voc-pl' }  // (=N.)
];

// console.log("pasu-data.js loaded");
// console.log(pasuCardsData);
