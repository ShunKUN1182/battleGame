let myStatus = {
    Name: "しゅんや",
    HP: 120,
    ATK: 100,
    DEF: 50,
    SPD: 45,
};

let cpuStatus = {
    Name: "とわ",
    HP: 90,
    ATK: 140,
    DEF: 30,
    SPD: 70,
};

const myName = document.querySelector("#myName");
const cpuName = document.querySelector("#cpuName");
const myStartHP = document.querySelector("#myStartHP");
const cpuStartHP = document.querySelector("#cpuStartHP");
const battleLog = document.querySelector("#battleLog");
const myBtn = document.querySelector("#my_atk_btn");
const cpuBtn = document.querySelector("#cpu_atk_btn");
const turnName = document.querySelector("#turnName");
const turnIndex = document.querySelector("#turnIndex");
const myHPbar = document.querySelector("#myHPbar");
const cpuHPbar = document.querySelector("#cpuHPbar");
// const myHPIndex = document.querySelector("#myHPIndex");
// const cpuHPIndex = document.querySelector("#cpuHPIndex");
myStartHP.innerHTML = `<span id="myHPIndex">${myStatus.HP}</span>/${myStatus.HP}`;
cpuStartHP.innerHTML = `<span id="cpuHPIndex">${cpuStatus.HP}</span>/${cpuStatus.HP}`;
myName.innerHTML = myStatus.Name;
cpuName.innerHTML = cpuStatus.Name;

function inputStatus(log = "何も起こらなかった！！") {
    battleLog.innerHTML = log;
}

inputStatus(myStatus, cpuStatus);

myBtn.addEventListener("click", () => {
    const myHPIndex = document.querySelector("#myHPIndex");
    const cpuHPIndex = document.querySelector("#cpuHPIndex");
    const HPpercent = (HPcheck(myStatus, cpuStatus) / cpuStatus.HP) * 100;
    cpuStatus.HP = HPcheck(myStatus, cpuStatus);
    cpuHPbar.style.width = `${HPpercent}%`;
    cpuHPIndex.textContent = `${cpuStatus.HP}`;
    console.log(cpuStatus);
});

function HPcheck(ATkside, DEFside) {
    let damage = ATkside.ATK - DEFside.DEF;
    if (damage <= 0) {
        damage = 0;
    }
    let NewHP = DEFside.HP - damage;
    if (NewHP <= 0) {
        NewHP = 0;
    }
    return NewHP;
}
