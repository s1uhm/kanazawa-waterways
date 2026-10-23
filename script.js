
const langButton = document.getElementById("langButton");

let english = false;

langButton.addEventListener("click", () => {
    english = !english;

    document.querySelector(".hero h1").innerHTML =
        english ? "Explore<br>Kanazawa's Waterways" : "用水路を<br>めぐろう!!";

    document.querySelector(".hero-description").innerHTML =
        english
        ? "Follow the water and discover<br>the history of Kanazawa."
        : "水の流れをたどって、<br>金沢の歴史と魅力を発見しよう。";

    document.querySelectorAll(".menu-title").forEach((item, index) => {
        const ja = ["用水路の歴史", "スタンプラリー", "地図"];
        const en = ["History", "Stamp Rally", "Map"];
        item.textContent = english ? en[index] : ja[index];
    });
});
