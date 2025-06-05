// pronoun-declension-puzzle/common/script.js

console.log("pronounData from script.js:", pronounData); // pronounData の確認用 (これは残す)
console.log("Pronoun common script loaded!");         // これも残す

// DOMContentLoaded イベントリスナーで囲むのは良い習慣です
document.addEventListener('DOMContentLoaded', () => {
    console.log("Pronoun puzzle page DOM fully loaded and parsed");

    // HTML要素の取得 (IDは代名詞パズルのHTMLに合わせてください)
    const cardsArea = document.getElementById('cards-area');
    const dropzones = document.querySelectorAll('.dropzone'); // これは共通で使えるはず
    const resetButton = document.getElementById('reset-button');
    // スコア関連の要素は不要なのでコメントアウトまたは削除
    // const scoreElement = document.getElementById('score');

    let draggedCardElement = null; // ドラッグ中のカード要素を保持

    // --- 1. カード生成処理 ---
    function initializePuzzle() {
        console.log("Initializing pronoun puzzle...");
        draggedCardElement = null;
        if (cardsArea) cardsArea.innerHTML = ''; // カードエリアをクリア
        dropzones.forEach(zone => {
            zone.innerHTML = ''; // ドロップゾーンをクリア
            // 正解時に付与したクラスもリセットする場合 (もしあれば)
            // zone.classList.remove('placed-correctly-cell'); // 例
        });

        // pronounData が存在するか確認 (aham-data.js から読み込まれているはず)
        if (typeof pronounData !== 'undefined' && pronounData.declensions) {
            console.log("pronounData is available:", pronounData);

            const allDeclensions = []; // 全ての曲用形を一時的に格納する配列

            // pronounData.declensions オブジェクトから全ての曲用形を取り出す
            for (const caseName in pronounData.declensions) { // "Nominative", "Accusative", ...
                for (const numberName in pronounData.declensions[caseName]) { // "Singular", "Dual", "Plural"
                    const declensionText = pronounData.declensions[caseName][numberName];
                    allDeclensions.push({
                        text: declensionText,
                        case: caseName,  // 正しい格
                        number: numberName // 正しい数
                    });
                }
            }
            console.log("All declensions to create cards:", allDeclensions);

            // カードをシャッフル
            const shuffledDeclensions = [...allDeclensions].sort(() => Math.random() - 0.5);

            // シャッフルされたデータからカード要素を生成
            shuffledDeclensions.forEach((declensionData, index) => {
                const cardElement = document.createElement('div');
                cardElement.id = `card-${pronounData.word}-${index}`; // ユニークなID
                cardElement.classList.add('card');
                cardElement.draggable = true;
                cardElement.textContent = declensionData.text; // カードに表示するテキスト

                // 正解判定用に、正しい格と数をデータ属性として持たせる
                cardElement.dataset.correctCase = declensionData.case;
                cardElement.dataset.correctNumber = declensionData.number;

                // ドラッグイベントのリスナーを設定
                cardElement.addEventListener('dragstart', handleDragStart);
                // cardElement.addEventListener('dragend', handleDragEnd); // 必要であれば

                if (cardsArea) cardsArea.appendChild(cardElement);
            });

        } else {
            console.error("pronounData is NOT available or declensions are missing.");
            if (cardsArea) cardsArea.textContent = "カードデータの読み込みに失敗しました。";
        }
        // スコア表示更新は不要
        // updateScoreDisplay();
    }

    // --- 2. ドラッグ開始処理 ---
    function handleDragStart(event) {
        draggedCardElement = event.target; // ドラッグされているカード要素を保存
        // event.dataTransfer.setData('text/plain', event.target.id); // IDの受け渡しは必須ではないかも
        console.log('DragStart:', draggedCardElement.textContent,
                    'Correct Case:', draggedCardElement.dataset.correctCase,
                    'Correct Number:', draggedCardElement.dataset.correctNumber);
    }

    // --- 3. ドロップゾーン上での処理 (ドラッグオーバー) ---
    function handleDragOver(event) {
        event.preventDefault(); // ドロップを許可するために必須
    }

    // --- 4. ドロップ処理 ---
    function handleDrop(event) {
        event.preventDefault();
        const targetCell = event.target.closest('.dropzone'); // ドロップ先のセル

        if (draggedCardElement && targetCell) {
            // ドロップ先セルの期待する格と数を取得 (HTMLのdata属性から)
            const targetCase = targetCell.dataset.case;
            const targetNumber = targetCell.dataset.number;

            // ドラッグされたカードの正しい格と数を取得 (カードのdata属性から)
            const cardCorrectCase = draggedCardElement.dataset.correctCase;
            const cardCorrectNumber = draggedCardElement.dataset.correctNumber;

            console.log('Attempting Drop:', draggedCardElement.textContent,
                        `Card expects (${cardCorrectCase}, ${cardCorrectNumber})`,
                        'on cell expecting:', `(${targetCase}, ${targetNumber})`);

            // 正誤判定
            if (cardCorrectCase === targetCase && cardCorrectNumber === targetNumber) {
                // 正解の場合
                if (targetCell.children.length === 0) { // セルが空なら配置
                    targetCell.appendChild(draggedCardElement);
                    draggedCardElement.classList.add('placed-correctly'); // 正解スタイルを適用
                    draggedCardElement.draggable = false; // 配置後はドラッグ不可に
                    console.log('Correct! Card placed.');
                    // スコア加算は不要
                    // currentScore++;
                    // updateScoreDisplay();

                    // 全問正解のチェック (スコアがないので、全てのdropzoneが埋まったかで判定も可能)
                    checkIfAllCorrect();

                } else {
                    console.log('Cell is already occupied. Card returned to cards area.');
                    if (cardsArea) cardsArea.appendChild(draggedCardElement); // カードを戻す
                }
            } else {
                // 不正解の場合
                console.log('Incorrect placement! Card returned to cards area.');
                if (cardsArea) cardsArea.appendChild(draggedCardElement); // カードを戻す
            }
        }
        draggedCardElement = null; // ドラッグ状態をリセット
    }

    // --- (オプション) 全問正解チェック ---
    function checkIfAllCorrect() {
        let allFilled = true;
        dropzones.forEach(zone => {
            if (zone.children.length === 0) {
                allFilled = false;
            }
        });
        if (allFilled) {
            console.log("All cells are filled!");
            setTimeout(() => {
                alert("素晴らしい！全問正解です！"); // アラート表示
            }, 100);
        }
    }


    // ドロップゾーンにイベントリスナーを設定
    dropzones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
    });

    // リセットボタンにイベントリスナーを設定
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            console.log('Reset button clicked');
            initializePuzzle(); // パズルを初期化
        });
    }

    // パズルを初期化して開始
    initializePuzzle();

});
