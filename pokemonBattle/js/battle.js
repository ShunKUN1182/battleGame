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

function startTurn() {
    if (myStatus.SPD >= cpuStatus.SPD) {
        console.log("君が早いぜ");
        myStatus.TURN = true;
        console.log(myStatus, cpuStatus);
    } else {
        console.log("君が遅いぜ");
        cpuStatus.TURN = true;
        console.log(myStatus, cpuStatus);
    }
}

inputStatus();
startTurn();

myBtn.addEventListener("click", () => {
    const cpuHPIndex = document.querySelector("#cpuHPIndex");
    const NewHP = HPcheck(myStatus, cpuStatus);
    const nowDamage = cpuStatus.HP - NewHP.newHP;
    console.log(nowDamage);

    cpuStatus.HP = NewHP.newHP;
    const HPpercent = (NewHP.newHP / cpuStatus.MAXHP) * 100;
    cpuHPbar.style.width = `${HPpercent}%`;
    cpuHPIndex.textContent = `${cpuStatus.HP}`;
    let logMessage = "";
    if (cpuStatus.HP == 0) {
        logMessage = `${myStatus.Name}の勝利！！！！${NewHP.damage}のダメージ！`;
    } else {
        logMessage = `${myStatus.Name}の攻撃！${NewHP.damage}のダメージ！`;
    }
    turnCount++;
    inputStatus(logMessage, turnCount);
});

cpuBtn.addEventListener("click", () => {
    const myHPIndex = document.querySelector("#myHPIndex");
    const NewHP = HPcheck(cpuStatus, myStatus);
    const nowDamage = NewHP.newHP;
    console.log(nowDamage);

    myStatus.HP = NewHP.newHP;
    const HPpercent = (NewHP.newHP / myStatus.MAXHP) * 100;
    myHPbar.style.width = `${HPpercent}%`;
    myHPIndex.textContent = `${myStatus.HP}`;
    let logMessage = "";
    if (myStatus.HP == 0) {
        logMessage = `${cpuStatus.Name}の勝利！！！！${NewHP.damage}のダメージ！`;
    } else {
        logMessage = `${cpuStatus.Name}の攻撃！${NewHP.damage}のダメージ！`;
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
        const randomDamage = Math.floor(Math.random() * 5);
        damage = randomDamage + 1;
    }
    let NewHP = DEFside.HP - damage;
    if (NewHP <= 0) {
        NewHP = 0;
    }
    return {
        newHP: NewHP,
        damage: damage,
    };
}
