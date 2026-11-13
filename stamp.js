
const storageKey = "kanazawa-waterway-stamps";

const spots = ["tatsumi", "kuratsuki", "onosho"];

let stamps = {};

try {
    stamps = JSON.parse(localStorage.getItem(storageKey)) || {};
} catch {
    stamps = {};
}

function updateDisplay() {
    let count = 0;

    document.querySelectorAll(".stamp-card").forEach(card => {
        const id = card.dataset.spot;
        const acquired = stamps[id] === true;
        const button = card.querySelector(".get-stamp");
        const status = card.querySelector(".stamp-status");

        card.classList.toggle("acquired", acquired);
        button.disabled = acquired;
        button.textContent = acquired ? "獲得済み ✓" : "スタンプを獲得";
        status.textContent = acquired ? "獲得済み" : "未獲得";

        if (acquired) count++;
    });

    document.getElementById("count").textContent = count;
    document.getElementById("progressBar").style.width =
        (count / spots.length * 100) + "%";

    document.getElementById("progressMessage").textContent =
        count === 3 ? "すべてのスタンプを獲得しました！" :
        `あと${3 - count}か所でコンプリート！`;

    document.getElementById("completeMessage").hidden = count !== 3;
}

document.querySelectorAll(".stamp-card").forEach(card => {
    card.querySelector(".get-stamp").addEventListener("click", () => {
        stamps[card.dataset.spot] = true;
        localStorage.setItem(storageKey, JSON.stringify(stamps));
        updateDisplay();
    });
});

document.getElementById("resetButton").addEventListener("click", () => {
    if (confirm("すべてのスタンプをリセットしますか？")) {
        stamps = {};
        localStorage.removeItem(storageKey);
        updateDisplay();
    }
});

updateDisplay();
