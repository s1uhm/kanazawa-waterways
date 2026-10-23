
const storageKey = "kanazawa-waterway-stamps";

const spots = {
    tatsumi: "辰巳用水",
    kuratsuki: "鞍月用水",
    onosho: "大野庄用水"
};

// 保存済みのスタンプを読み込む
let stamps = {};

try {
    stamps = JSON.parse(localStorage.getItem(storageKey)) || {};
} catch {
    stamps = {};
}

// QRコードのURLからスポット名を取得
const params = new URLSearchParams(window.location.search);
const scannedSpot = params.get("spot");

// 結果表示欄を作成
const notice = document.createElement("div");
notice.className = "scan-notice";

const demoNote = document.querySelector(".demo-note");
if (demoNote) {
    demoNote.before(notice);
}

// QRコードからアクセスした場合
if (scannedSpot !== null) {
    if (Object.hasOwn(spots, scannedSpot)) {
        if (stamps[scannedSpot] === true) {
            notice.textContent =
                spots[scannedSpot] + "のスタンプは獲得済みです！";
        } else {
            stamps[scannedSpot] = true;
            localStorage.setItem(storageKey, JSON.stringify(stamps));

            notice.textContent =
                "🎉 " + spots[scannedSpot] +
                "のスタンプを獲得しました！";
        }
    } else {
        notice.textContent = "このQRコードは無効です。";
    }
}

// 獲得状況を表示
function updateDisplay() {
    let count = 0;

    document.querySelectorAll(".stamp-card").forEach(card => {
        const id = card.dataset.spot;
        const acquired = stamps[id] === true;
        const status = card.querySelector(".stamp-status");

        card.classList.toggle("acquired", acquired);
        status.textContent = acquired ? "獲得済み ✓" : "未獲得";

        if (acquired) count++;
    });

    document.getElementById("count").textContent = count;

    document.getElementById("progressBar").style.width =
        (count / Object.keys(spots).length * 100) + "%";

    document.getElementById("progressMessage").textContent =
        count === 3
            ? "すべてのスタンプを獲得しました！"
            : "あと" + (3 - count) + "か所でコンプリート！";

    document.getElementById("completeMessage").hidden =
        count !== 3;
}

// スタンプのリセット
document.getElementById("resetButton").addEventListener("click", () => {
    if (confirm("スタンプをすべてリセットしますか？")) {
        stamps = {};
        localStorage.removeItem(storageKey);
        notice.textContent = "スタンプをリセットしました。";
        updateDisplay();
    }
});

updateDisplay();
