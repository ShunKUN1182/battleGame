const myStatus = {
    Name: "しゅんや",
    ATK: 100,
    DEF: 50,
    SPD: 45,
    HP: 120,
};

const cpuStatus = {
    Name: "とわ",
    ATK: 140,
    DEF: 30,
    SPD: 70,
    HP: 90,
};

const myName = document.querySelector("#myName");
const cpuName = document.querySelector("#cpuName");
const myStartHP = document.querySelector("#myStartHP");
const cpuStartHP = document.querySelector("#cpuStartHP");
const battleLog = document.querySelector("#battleLog");
const myBtn = document.querySelector("#my_atk_btn");
const cpuBtn = document.querySelector("#cpu_atk_btn");

function inputStatus(my, cpu, log = "何も起こらなかった！！") {
    myName.innerHTML = my.Name;
    cpuName.innerHTML = cpu.Name;
    myStartHP.innerHTML = `<span>${my.HP}</span>/${my.HP}`;
    cpuStartHP.innerHTML = `<span>${cpu.HP}</span>/${cpu.HP}`;
    battleLog.innerHTML = log;
}

inputStatus(myStatus, cpuStatus);
