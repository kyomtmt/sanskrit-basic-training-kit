// mf-endings-data.js (修正版: -as の acceptableCells を共通化)

// パズルのタイトルと説明 (HTML側で参照されます)
const declensionPuzzleTitle = "名詞の格語尾パズル：男性・女性";
const declensionPuzzleDescription = "一般的な男性名詞・女性名詞の格語尾を正しい位置に配置してください。";

// 男性・女性名詞の格語尾カードデータ (全24枚)
const mfEndingCardsData = [
    // Singular (単数) m./f. - 8枚
    {
        id: "mf-s-nom-sg", // 単数主格
        romaji: "-s",
        acceptableCells: ["cell-nom-sg"],
        relatedRuleIds: ["ending_s", "rule1_s_drop_consonant", "rule2_s_to_h_final"]
    },
    {
        id: "mf-am-acc-sg", // 単数対格
        romaji: "-am",
        acceptableCells: ["cell-acc-sg"],
        relatedRuleIds: ["ending_am"]
    },
    {
        id: "mf-aa-ins-sg", // 単数具格
        romaji: "-ā",
        acceptableCells: ["cell-ins-sg"],
        relatedRuleIds: ["ending_aa_long"]
    },
    {
        id: "mf-e-dat-sg", // 単数与格
        romaji: "-e",
        acceptableCells: ["cell-dat-sg"],
        relatedRuleIds: ["ending_e_short"]
    },
    // ★★★ -as カード (1枚目) - 単数奪格、単数属格、複数主格、複数対格、複数呼格のいずれにも配置可能 ★★★
    {
        id: "mf-as-card-1",
        romaji: "-as",
        acceptableCells: ["cell-abl-sg", "cell-gen-sg", "cell-nom-pl", "cell-acc-pl", "cell-voc-pl"],
        relatedRuleIds: ["ending_as", "rule2_s_to_h_final", "rule5_ab_g_sg_equal", "rule3_voc_equals_nom"]
    },
    // ★★★ -as カード (2枚目) ★★★
    {
        id: "mf-as-card-2",
        romaji: "-as",
        acceptableCells: ["cell-abl-sg", "cell-gen-sg", "cell-nom-pl", "cell-acc-pl", "cell-voc-pl"],
        relatedRuleIds: ["ending_as", "rule2_s_to_h_final", "rule5_ab_g_sg_equal", "rule3_voc_equals_nom"]
    },
    {
        id: "mf-i-loc-sg", // 単数処格
        romaji: "-i",
        acceptableCells: ["cell-loc-sg"],
        relatedRuleIds: ["ending_i_short"]
    },
    {
        id: "mf-voc-sg-combined", // 単数呼格
        romaji: "語幹 / =N.",
        acceptableCells: ["cell-voc-sg"],
        relatedRuleIds: ["voc_sg_combined_explanation_mf", "rule3_voc_equals_nom", "equals_nominative", "no_ending_stem_only"]
    },

    // Dual (両数) m./f. - 8枚
    {
        id: "mf-au-du-1", // 旧 mf-au-nom-du
        romaji: "-au",
        acceptableCells: ["cell-nom-du", "cell-acc-du", "cell-voc-du"],
        relatedRuleIds: ["ending_au", "rule5_du_three_forms", "rule3_voc_equals_nom"]
    },
    {
        id: "mf-au-du-2", // 旧 mf-au-acc-du
        romaji: "-au",
        acceptableCells: ["cell-nom-du", "cell-acc-du", "cell-voc-du"],
        relatedRuleIds: ["ending_au", "rule5_du_three_forms", "rule3_voc_equals_nom"]
    },
    {
        id: "mf-au-du-3", // 旧 mf-au-voc-du
        romaji: "-au",
        acceptableCells: ["cell-nom-du", "cell-acc-du", "cell-voc-du"],
        relatedRuleIds: ["ending_au", "rule5_du_three_forms", "rule3_voc_equals_nom"]
    },
    {
        id: "mf-bhyam-du-1", // 旧 mf-bhyam-ins-du
        romaji: "-bhyām",
        acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"],
        relatedRuleIds: ["ending_bhyam", "rule7_pada_endings", "rule5_du_three_forms"]
    },
    {
        id: "mf-bhyam-du-2", // 旧 mf-bhyam-dat-du
        romaji: "-bhyām",
        acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"],
        relatedRuleIds: ["ending_bhyam", "rule7_pada_endings", "rule5_du_three_forms"]
    },
    {
        id: "mf-bhyam-du-3", // 旧 mf-bhyam-abl-du
        romaji: "-bhyām",
        acceptableCells: ["cell-ins-du", "cell-dat-du", "cell-abl-du"],
        relatedRuleIds: ["ending_bhyam", "rule7_pada_endings", "rule5_du_three_forms"]
    },
    {
        id: "mf-os-du-1", // 旧 mf-os-gen-du
        romaji: "-os",
        acceptableCells: ["cell-gen-du", "cell-loc-du"],
        relatedRuleIds: ["ending_os", "rule2_s_to_h_final", "rule5_du_three_forms"]
    },
    {
        id: "mf-os-du-2", // 旧 mf-os-loc-du
        romaji: "-os",
        acceptableCells: ["cell-gen-du", "cell-loc-du"],
        relatedRuleIds: ["ending_os", "rule2_s_to_h_final", "rule5_du_three_forms"]
    },

    // Plural (複数) m./f. - 8枚
    // ★★★ -as カード (3枚目) ★★★
    {
        id: "mf-as-card-3",
        romaji: "-as",
        acceptableCells: ["cell-abl-sg", "cell-gen-sg", "cell-nom-pl", "cell-acc-pl", "cell-voc-pl"],
        relatedRuleIds: ["ending_as", "rule2_s_to_h_final", "rule5_ab_g_sg_equal", "rule3_voc_equals_nom"]
    },
    // ★★★ -as カード (4枚目) ★★★
    {
        id: "mf-as-card-4",
        romaji: "-as",
        acceptableCells: ["cell-abl-sg", "cell-gen-sg", "cell-nom-pl", "cell-acc-pl", "cell-voc-pl"],
        relatedRuleIds: ["ending_as", "rule2_s_to_h_final", "rule5_ab_g_sg_equal", "rule3_voc_equals_nom"]
    },
    // ★★★ -as カード (5枚目) ★★★
    {
        id: "mf-as-card-5",
        romaji: "-as",
        acceptableCells: ["cell-abl-sg", "cell-gen-sg", "cell-nom-pl", "cell-acc-pl", "cell-voc-pl"],
        relatedRuleIds: ["ending_as", "rule2_s_to_h_final", "rule5_ab_g_sg_equal", "rule3_voc_equals_nom"]
    },
    {
        id: "mf-bhis-ins-pl", // 複数具格
        romaji: "-bhis",
        acceptableCells: ["cell-ins-pl"],
        relatedRuleIds: ["ending_bhis", "rule7_pada_endings", "rule2_s_to_h_final"]
    },
    {
        id: "mf-bhyas-pl-1", // 旧 mf-bhyas-dat-pl
        romaji: "-bhyas",
        acceptableCells: ["cell-dat-pl", "cell-abl-pl"],
        relatedRuleIds: ["ending_bhyas", "rule7_pada_endings", "rule5_d_ab_pl_equal", "rule2_s_to_h_final"]
    },
    {
        id: "mf-bhyas-pl-2", // 旧 mf-bhyas-abl-pl
        romaji: "-bhyas",
        acceptableCells: ["cell-dat-pl", "cell-abl-pl"],
        relatedRuleIds: ["ending_bhyas", "rule7_pada_endings", "rule5_d_ab_pl_equal", "rule2_s_to_h_final"]
    },
    {
        id: "mf-aam-gen-pl", // 複数属格
        romaji: "-ām",
        acceptableCells: ["cell-gen-pl"],
        relatedRuleIds: ["ending_aam_long"]
    },
    {
        id: "mf-su-loc-pl", // 複数処格
        romaji: "-su",
        acceptableCells: ["cell-loc-pl"],
        relatedRuleIds: ["ending_su", "rule7_pada_endings"]
    }
];
