const btn = document.querySelector("#btn");
const btnAfter = document.querySelector(".btn_after");

const characters = [
    {
        Name: "細川とわ",
        HP: 30,
        ATK: 140,
        DEF: 70,
        SPD: 70,
        IMG: "img/hosokawa.jpg",
    },
    {
        Name: "えもじの子",
        HP: 100,
        ATK: 50,
        DEF: 50,
        SPD: 85,
        IMG: "img/emojinoko.jpg",
    },
    {
        Name: "フクシマ",
        HP: 50,
        ATK: 40,
        DEF: 80,
        SPD: 60,
        IMG: "img/fukusima.jpg",
    },
    {
        Name: "ハラバリー",
        HP: 109,
        ATK: 64,
        DEF: 91,
        SPD: 45,
        IMG: "img/harabari.jpg",
    },
    {
        Name: "地雷系少女",
        HP: 60,
        ATK: 100,
        DEF: 30,
        SPD: 90,
        IMG: "img/jiraikei.JPG",
    },
    {
        Name: "黄ばみフクシマ",
        HP: 20,
        ATK: 120,
        DEF: 60,
        SPD: 10,
        IMG: "img/kigami_shunya.jpg",
    },
    {
        Name: "モフレム",
        HP: 19,
        ATK: 91,
        DEF: 90,
        SPD: 42,
        IMG: "img/mohuremu.jpg",
    },
    {
        Name: "モナリザ",
        HP: 70,
        ATK: 99,
        DEF: 22,
        SPD: 55,
        IMG: "img/monariza.jpg",
    },
    {
        Name: "ナッシー",
        HP: 95,
        ATK: 95,
        DEF: 85,
        SPD: 55,
        IMG: "img/nassy.jpg",
    },
    {
        Name: "ネイズ",
        HP: 8,
        ATK: 14,
        DEF: 75,
        SPD: 5,
        IMG: "img/neizu.jpg",
    },
    {
        Name: "ニンゲン",
        HP: 32,
        ATK: 83,
        DEF: 49,
        SPD: 72,
        IMG: "img/ningen.jpg",
    },
    {
        Name: "ウリムー",
        HP: 50,
        ATK: 50,
        DEF: 40,
        SPD: 50,
        IMG: "img/urimu.JPG",
    },
];

btn.addEventListener("click", () => {
    setTimeout(() => {
        btnAfter.style.display = "flex";
    }, 300);
    const randomNum = Math.floor(Math.random() * characters.length);
    const cpuRandomNum = Math.floor(Math.random() * characters.length);
    localStorage.setItem("myCharacter", JSON.stringify(characters[randomNum]));
    localStorage.setItem("cpuCharacter", JSON.stringify(characters[cpuRandomNum]));
});
