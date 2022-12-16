// Accediendo al DOM
const modal1 = document.querySelector(".modal1")
const modal2 = document.querySelector(".modal2")
const modal3 = document.querySelector(".modal3")
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const btnClose1 = document.querySelector(".modal-container__close1");
const btnClose2 = document.querySelector(".modal-container__close2");
const btnClose3 = document.querySelector(".modal-container__close3");

button1.addEventListener("click", () => {
    modal1.classList.remove("inactive");
});

button2.addEventListener("click", () => {
    modal2.classList.remove("inactive");
});

button3.addEventListener("click", () => {
    modal3.classList.remove("inactive");
});

btnClose1.addEventListener("click", () => {
    modal1.classList.add("inactive");
});

btnClose2.addEventListener("click", () => {
    modal2.classList.add("inactive");
});

btnClose3.addEventListener("click", () => {
    modal3.classList.add("inactive");
});