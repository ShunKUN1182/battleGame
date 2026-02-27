const btn = document.querySelector("#btn");
const btnAfter = document.querySelector(".btn_after");

const characters = [
    {
        Name: "細川とわ",
        HP: 30,
        MAXHP: 30,
        ATK: 140,
        DEF: 70,
        SPD: 70,
        IMG: "img/hosokawa.jpg",
        TURN: false,
    },
    {
        Name: "えもじの子",
        HP: 100,
        MAXHP: 100,
        ATK: 50,
        DEF: 50,
        SPD: 85,
        IMG: "img/emojinoko.jpg",
        TURN: false,
    },
    {
        Name: "フクシマ",
        HP: 50,
        MAXHP: 50,
        ATK: 40,
        DEF: 80,
        SPD: 60,
        IMG: "img/fukusima.jpg",
        TURN: false,
    },
    {
        Name: "ハラバリー",
        HP: 109,
        MAXHP: 109,
        ATK: 64,
        DEF: 91,
        SPD: 45,
        IMG: "img/harabari.jpg",
        TURN: false,
    },
    {
        Name: "地雷系少女",
        HP: 60,
        MAXHP: 60,
        ATK: 100,
        DEF: 30,
        SPD: 90,
        IMG: "img/jiraikei.JPG",
        TURN: false,
    },
    {
        Name: "黄ばみフクシマ",
        HP: 20,
        MAXHP: 20,
        ATK: 120,
        DEF: 60,
        SPD: 10,
        IMG: "img/kigami_shunya.jpg",
        TURN: false,
    },
    {
        Name: "モフレム",
        HP: 19,
        MAXHP: 19,
        ATK: 91,
        DEF: 90,
        SPD: 42,
        IMG: "img/mohuremu.jpg",
        TURN: false,
    },
    {
        Name: "モナリザ",
        HP: 70,
        MAXHP: 70,
        ATK: 99,
        DEF: 22,
        SPD: 55,
        IMG: "img/monariza.jpg",
        TURN: false,
    },
    {
        Name: "ナッシー",
        HP: 95,
        MAXHP: 95,
        ATK: 95,
        DEF: 85,
        SPD: 55,
        IMG: "img/nassy.jpg",
        TURN: false,
    },
    {
        Name: "ネイズ",
        HP: 8,
        MAXHP: 8,
        ATK: 14,
        DEF: 75,
        SPD: 5,
        IMG: "img/neizu.jpg",
        TURN: false,
    },
    {
        Name: "ニンゲン",
        HP: 32,
        MAXHP: 32,
        ATK: 83,
        DEF: 49,
        SPD: 72,
        IMG: "img/ningen.jpg",
        TURN: false,
    },
    {
        Name: "ウリムー",
        HP: 50,
        MAXHP: 50,
        ATK: 50,
        DEF: 40,
        SPD: 50,
        IMG: "img/urimu.JPG",
        TURN: false,
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
    btnAfter.innerHTML = `
          <h2>ガチャ結果</h2>
        <img src="${characters[randomNum].IMG}" alt=""/>
        <h2>${characters[randomNum].Name}がとびだしてきた!!!!</h2>
        <a href="battle.html">バトルしにいく！！！</a>
  `;
});
