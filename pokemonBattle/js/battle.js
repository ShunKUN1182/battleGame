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
const finishTurnName = document.querySelector("#finishTurnName");
const myUserBox = document.querySelector("#my_user_box");
const cpuUserBox = document.querySelector("#cpu_user_box");
let turnCount = 1;

let myStatus = JSON.parse(localStorage.getItem("myCharacter"));
let cpuStatus = JSON.parse(localStorage.getItem("cpuCharacter"));

myStartHP.innerHTML = `<span id="myHPIndex">${myStatus.HP}</span>/${myStatus.HP}`;
cpuStartHP.innerHTML = `<span id="cpuHPIndex">${cpuStatus.HP}</span>/${cpuStatus.HP}`;
myUserBox.innerHTML = `
    <img src="${myStatus.IMG}" alt="" />
    <h2 id="myName">${myStatus.Name}</h2>
`;
cpuUserBox.innerHTML = `
    <img src="${cpuStatus.IMG}" alt="" />
    <h2 id="myName">${cpuStatus.Name}</h2>
`;

function inputStatus(log = "バトル開始！！！", count = 1) {
    battleLog.innerHTML = log;
    turnIndex.textContent = count;
}

function startTurn() {
    if (myStatus.SPD >= cpuStatus.SPD) {
        myStatus.TURN = true;
        turnName.textContent = "あなた";
        cpuBtn.classList.add("no_atk");
    } else {
        cpuStatus.TURN = true;
        myBtn.classList.add("no_atk");
        turnName.textContent = "相手";
    }
}

inputStatus();
startTurn();

myBtn.addEventListener("click", () => {
    if (!myStatus.TURN) {
        inputStatus("あんたのターンとちゃうで！！！！！！", turnCount);
        return;
    }
    const cpuHPIndex = document.querySelector("#cpuHPIndex");
    const NewHP = HPcheck(myStatus, cpuStatus);
    const nowDamage = cpuStatus.HP - NewHP.newHP;
    console.log(nowDamage);

    cpuStatus.HP = NewHP.newHP;
    const HPpercent = (NewHP.newHP / cpuStatus.MAXHP) * 100;
    cpuHPbar.style.width = `${HPpercent}%`;
    cpuHPIndex.textContent = `${cpuStatus.HP}`;
    turnCount++;
    myStatus.TURN = false;
    cpuStatus.TURN = true;
    myBtn.classList.add("no_atk");
    cpuBtn.classList.remove("no_atk");
    turnName.textContent = "相手";
    let logMessage = "";
    if (cpuStatus.HP == 0) {
        logMessage = `${myStatus.Name}の勝利！！！！おめでとう！！！！`;
        finishTurnName.textContent = "バトル終了";
        cpuBtn.classList.add("no_atk");
        cpuStatus.TURN = false;
    } else {
        logMessage = `${myStatus.Name}の攻撃！${NewHP.damage}のダメージ！`;
    }
    inputStatus(logMessage, turnCount);
});

cpuBtn.addEventListener("click", () => {
    if (!cpuStatus.TURN) {
        inputStatus("あんたのターンとちゃうで！！！！！！", turnCount);
        return;
    }
    const myHPIndex = document.querySelector("#myHPIndex");
    const NewHP = HPcheck(cpuStatus, myStatus);
    const nowDamage = NewHP.newHP;
    console.log(nowDamage);

    myStatus.HP = NewHP.newHP;
    const HPpercent = (NewHP.newHP / myStatus.MAXHP) * 100;
    myHPbar.style.width = `${HPpercent}%`;
    myHPIndex.textContent = `${myStatus.HP}`;
    turnCount++;
    myStatus.TURN = true;
    cpuStatus.TURN = false;
    turnName.textContent = "あなた";
    cpuBtn.classList.add("no_atk");
    myBtn.classList.remove("no_atk");
    let logMessage = "";
    if (myStatus.HP == 0) {
        logMessage = `${cpuStatus.Name}の勝利！！！！おめでとう！！！！`;
        finishTurnName.textContent = "バトル終了";
        myBtn.classList.add("no_atk");
        myStatus.TURN = false;
    } else {
        logMessage = `${cpuStatus.Name}の攻撃！${NewHP.damage}のダメージ！`;
    }
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
