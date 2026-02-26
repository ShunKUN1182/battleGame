const startBtn = document.querySelector("#startBtn");
const myPokemons = [
    {
        Name: "ピカチュウ",
        HP: 100,
        ATK: 70,
        DEF: 50,
        Speed: 90,
        Type: "でんき",
    },
    {
        Name: "リザードン",
        HP: 100,
        ATK: 60,
        DEF: 50,
        Speed: 40,
        Type: "ほのお",
    },
];
const cpuPokemons = [
    {
        Name: "ドガース",
        HP: 100,
        ATK: 60,
        DEF: 40,
        Speed: 20,
        Type: "あく",
    },
    {
        Name: "カメックス",
        HP: 100,
        ATK: 60,
        DEF: 50,
        Speed: 60,
        Type: "みず",
    },
];

startBtn.addEventListener("click", () => {
    console.log(myPokemons[0].Speed);
    const myPickPokemon = myPokemons[0];
    const cpuPickPokemon = cpuPokemons[0];
    if (myPickPokemon.Speed >= cpuPickPokemon.Speed) {
        console.log("私の攻撃");
        cpuPickPokemon.HP = HPCheck(myPickPokemon, cpuPickPokemon);
        console.log(cpuPickPokemon);
    } else {
        console.log("相手の攻撃");
        myPickPokemon.HP = myPickPokemon.HP - (cpuPickPokemon.ATK - myPickPokemon.DEF);
    }
});

function HPCheck(ATkside, DFEside) {
    DFEside.HP = DFEside.HP - (ATkside.ATK - DFEside.DEF);
    return DFEside.HP;
}
