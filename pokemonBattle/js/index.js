const btn = document.querySelector("#btn");
const btnAfter = document.querySelector(".btn_after");

btn.addEventListener("click", () => {
    setTimeout(() => {
        btnAfter.style.display = "flex";
    }, 200);
});
