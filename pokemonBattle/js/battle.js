// let myStatus = {
//     Name: "しゅんや",
//     HP: 120,
//     ATK: 100,
//     DEF: 50,
//     SPD: 45,
// };

// let cpuStatus = {
//     Name: "とわ",
//     HP: 90,
//     ATK: 140,
//     DEF: 30,
//     SPD: 70,
// };

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
const resetBtn = document.querySelector("#reset_btn");
let turnCount = 1;

let myStatus = JSON.parse(localStorage.getItem("myCharacter"));
let cpuStatus = JSON.parse(localStorage.getItem("cpuCharacter"));

myStartHP.innerHTML = `<span id="myHPIndex">${myStatus.HP}</span>/${myStatus.HP}`;
cpuStartHP.innerHTML = `<span id="cpuHPIndex">${cpuStatus.HP}</span>/${cpuStatus.HP}`;
myName.innerHTML = myStatus.Name;
cpuName.innerHTML = cpuStatus.Name;

function inputStatus(log = "バトル開始！！！", count = 1) {
    battleLog.innerHTML = log;
    turnIndex.textContent = count;
}

inputStatus();

myBtn.addEventListener("click", () => {
    const cpuHPIndex = document.querySelector("#cpuHPIndex");
    const NewHP = HPcheck(myStatus, cpuStatus);
    cpuStatus.HP = NewHP;
    const HPpercent = (NewHP / cpuStatus.MAXHP) * 100;
    cpuHPbar.style.width = `${HPpercent}%`;
    cpuHPIndex.textContent = `${cpuStatus.HP}`;
    let logMessage = "";
    if (cpuStatus.HP == 0) {
        logMessage = `${myStatus.Name}の勝利！！！！`;
    } else {
        logMessage = `${myStatus.Name}の攻撃！`;
    }
    turnCount++;
    inputStatus(logMessage, turnCount);
});

cpuBtn.addEventListener("click", () => {
    const myHPIndex = document.querySelector("#myHPIndex");
    const NewHP = HPcheck(cpuStatus, myStatus);
    myStatus.HP = NewHP;
    const HPpercent = (NewHP / myStatus.MAXHP) * 100;
    myHPbar.style.width = `${HPpercent}%`;
    myHPIndex.textContent = `${myStatus.HP}`;
    let logMessage = "";
    if (myStatus.HP == 0) {
        logMessage = `${cpuStatus.Name}の勝利！！！！`;
    } else {
        logMessage = `${cpuStatus.Name}の攻撃！`;
    }
    turnCount++;
    inputStatus(logMessage, turnCount);
});

resetBtn.addEventListener("click", () => {
    localStorage.clear();
});

function HPcheck(ATkside, DEFside) {
    let damage = ATkside.ATK - DEFside.DEF;
    if (damage <= 0) {
        const randomDamage = Math.floor(Math.random() * 3);
        damage = randomDamage + 1;
    }
    let NewHP = DEFside.HP - damage;
    if (NewHP <= 0) {
        NewHP = 0;
    }
    return NewHP;
}
