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

function inputStatus(my, cpu) {
    myName.innerHTML = my.Name;
    cpuName.innerHTML = cpu.Name;
    myStartHP.innerHTML = `<span>${my.HP}</span>/${my.HP}`;
    cpuStartHP.innerHTML = `<span>${cpu.HP}</span>/${cpu.HP}`;
}

inputStatus(myStatus, cpuStatus);
