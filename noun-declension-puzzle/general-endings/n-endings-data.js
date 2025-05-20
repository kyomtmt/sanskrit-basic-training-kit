// n-endings-data.js (修正版: 選択肢Aに基づく)

// パズルのタイトルと説明
const declensionPuzzleTitle = "名詞の格語尾パズル：中性";
const declensionPuzzleDescription = "一般的な中性名詞の格語尾を正しい位置に配置してください。";

// 中性名詞の格語尾カードデータ (全24枚)
const nEndingCardsData = [
    // Singular (単数) n. - 8枚
    { // 単数主格・対格・呼格用 「語幹のみ」カード (1枚目)
        id: "n-stem-nav-sg-1", // ID例変更
        romaji: "語幹のみ",
        acceptableCells: ["cell-nom-sg", "cell-acc-sg", "cell-voc-sg"],
        relatedRuleIds: ["no_ending_stem_only", "rule4_n_nom_voc_acc_equal", "rule4_n_sg_no_ending", "n_sg_nav_details", "rule3_voc_equals_nom"]
    },
    { // 単数主格・対格・呼格用 「語幹のみ」カード (2枚目)
        id: "n-stem-nav-sg-2",
        romaji: "語幹のみ",
        acceptableCells: ["cell-nom-sg", "cell-acc-sg", "cell-voc-sg"],
        relatedRuleIds: ["no_ending_stem_only", "rule4_n_nom_voc_acc_equal", "rule4_n_sg_no_ending", "n_sg_nav_details", "rule3_voc_equals_nom"]
    },
    { // 単数主格・対格・呼格用 「語幹のみ」カード (3枚目)
        id: "n-stem-nav-sg-3",
        romaji: "語幹のみ",
        acceptableCells: ["cell-nom-sg", "cell-acc-sg", "cell-voc-sg"],
        relatedRuleIds: ["no_ending_stem_only", "rule4_n_nom_voc_acc_equal", "rule4_n_sg_no_ending", "n_sg_nav_details", "rule3_voc_equals_nom"]
    },
    { // 単数具格: -ā
        id: "n-aa-ins-sg",
        romaji: "-ā",
        acceptableCells: ["cell-ins-sg"],
        relatedRuleIds: ["ending_aa_long"]
    },
    { // 単数与格: -e
        id: "n-e-dat-sg",
        romaji: "-e",
        acceptableCells: ["cell-dat-sg"],
        relatedRuleIds: ["ending_e_short"]
    },
    { // 単数奪格用 -as カード
        id: "n-as-ablgen-sg-1", // ID例変更
        romaji: "-as",
        acceptableCells: ["cell-abl-sg", "cell-gen-sg"],
        relatedRuleIds: ["ending_as", "rule5_ab_g_sg_equal", "rule2_s_to_h_final"]
    },
    { // 単数属格用 -as カード
        id: "n-as-ablgen-sg-2",
        romaji: "-as",
        acceptableCells: ["cell-abl-sg", "cell-gen-sg"],
        relatedRuleIds: ["ending_as", "rule5_ab_g_sg_equal", "rule2_s_to_h_final"]
    },
    { // 単数処格: -i
        id: "n-i-loc-sg",
        romaji: "-i",
        acceptableCells: ["cell-loc-sg"],
        relatedRuleIds: ["ending_i_short"] // ending_i_short_n_pl とは区別
    },

    // Dual (両数) n. - 8枚
    { // 両数主格・対格・呼格用 -ī カード (1枚目)
        id: "n-ii-nav-du-1", // ID例変更
        romaji: "-ī",
        acceptableCells: ["cell-nom-du", "cell-acc-du", "cell-voc-du"],
        relatedRuleIds: ["ending_ii_long", "rule4_n_nom_voc_acc_equal", "rule5_du_three_forms", "rule3_voc_equals_nom"]
    },
    { // 両数主格・対格・呼格用 -ī カード (2枚目)
        id: "n-ii-nav-du-2",
        romaji: "-ī",
        acceptableCells: ["cell-nom-du", "cell-acc-du", "cell-voc-du"],
        relatedRuleIds: ["ending_ii_long", "rule4_n_nom_voc_acc_equal", "rule5_du_three_forms", "rule3_voc_equals_nom"]
    },
    { // 両数主格・対格・呼格用 -ī カード (3枚目)
        id: "n-ii-nav-du-3",
        romaji: "-ī",
        acceptableCells: ["cell-nom-du", "cell-acc-du", "cell-voc-du"],
        relatedRuleIds: ["ending_ii_long", "rule4_n_nom_voc_acc_equal", "rule5_du_three_forms", "rule3_voc_equals_nom"]
    },
    { // 両数具格・与格・奪格用 -bhyām カード (1枚目)
        id: "n-bhyam-ida-du-1", // ID例変更
        romaji: "-bhyām",
        acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"],
        relatedRuleIds: ["ending_bhyam", "rule7_pada_endings", "rule5_du_three_forms"]
    },
    { // 両数具格・与格・奪格用 -bhyām カード (2枚目)
        id: "n-bhyam-ida-du-2",
        romaji: "-bhyām",
        acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"],
        relatedRuleIds: ["ending_bhyam", "rule7_pada_endings", "rule5_du_three_forms"]
    },
    { // 両数具格・与格・奪格用 -bhyām カード (3枚目)
        id: "n-bhyam-ida-du-3",
        romaji: "-bhyām",
        acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"],
        relatedRuleIds: ["ending_bhyam", "rule7_pada_endings", "rule5_du_three_forms"]
    },
    { // 両数属格・処格用 -os カード (1枚目)
        id: "n-os-gl-du-1", // ID例変更
        romaji: "-os",
        acceptableCells: ["cell-gen-du", "cell-loc-du"],
        relatedRuleIds: ["ending_os", "rule2_s_to_h_final", "rule5_du_three_forms"]
    },
    { // 両数属格・処格用 -os カード (2枚目)
        id: "n-os-gl-du-2",
        romaji: "-os",
        acceptableCells: ["cell-gen-du", "cell-loc-du"],
        relatedRuleIds: ["ending_os", "rule2_s_to_h_final", "rule5_du_three_forms"]
    },

    // Plural (複数) n. - 8枚
    { // 複数主格・対格・呼格用 -i カード (1枚目)
        id: "n-i-nav-pl-1", // ID例変更
        romaji: "-i",
        acceptableCells: ["cell-nom-pl", "cell-acc-pl", "cell-voc-pl"],
        relatedRuleIds: ["ending_i_short_n_pl", "rule4_n_nom_voc_acc_equal", "rule3_voc_equals_nom", "rule6_nasal_insertion_n_pl"]
    },
    { // 複数主格・対格・呼格用 -i カード (2枚目)
        id: "n-i-nav-pl-2",
        romaji: "-i",
        acceptableCells: ["cell-nom-pl", "cell-acc-pl", "cell-voc-pl"],
        relatedRuleIds: ["ending_i_short_n_pl", "rule4_n_nom_voc_acc_equal", "rule3_voc_equals_nom", "rule6_nasal_insertion_n_pl"]
    },
    { // 複数主格・対格・呼格用 -i カード (3枚目)
        id: "n-i-nav-pl-3",
        romaji: "-i",
        acceptableCells: ["cell-nom-pl", "cell-acc-pl", "cell-voc-pl"],
        relatedRuleIds: ["ending_i_short_n_pl", "rule4_n_nom_voc_acc_equal", "rule3_voc_equals_nom", "rule6_nasal_insertion_n_pl"]
    },
    { // 複数具格: -bhis
        id: "n-bhis-ins-pl",
        romaji: "-bhis",
        acceptableCells: ["cell-ins-pl"],
        relatedRuleIds: ["ending_bhis", "rule7_pada_endings", "rule2_s_to_h_final"]
    },
    { // 複数与格・奪格用 -bhyas カード (1枚目)
        id: "n-bhyas-da-pl-1", // ID例変更
        romaji: "-bhyas",
        acceptableCells: ["cell-dat-pl", "cell-abl-pl"],
        relatedRuleIds: ["ending_bhyas", "rule7_pada_endings", "rule5_d_ab_pl_equal", "rule2_s_to_h_final"]
    },
    { // 複数与格・奪格用 -bhyas カード (2枚目)
        id: "n-bhyas-da-pl-2",
        romaji: "-bhyas",
        acceptableCells: ["cell-dat-pl", "cell-abl-pl"],
        relatedRuleIds: ["ending_bhyas", "rule7_pada_endings", "rule5_d_ab_pl_equal", "rule2_s_to_h_final"]
    },
    { // 複数属格: -ām
        id: "n-aam-gen-pl",
        romaji: "-ām",
        acceptableCells: ["cell-gen-pl"],
        relatedRuleIds: ["ending_aam_long"]
    },
    { // 複数処格: -su
        id: "n-su-loc-pl",
        romaji: "-su",
        acceptableCells: ["cell-loc-pl"],
        relatedRuleIds: ["ending_su", "rule7_pada_endings"]
    }
];
