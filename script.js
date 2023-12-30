let hamburger = document.querySelector(".hamburger");
console.log(hamburger);
let sideBar = document.querySelector(".side-bar");
console.log(sideBar);
hamburger.addEventListener("click", () => {
  sideBar.style.transform = "translateX(-100%)";
});
let iconClose = document.querySelector(".icon-close");
console.log(iconClose);
iconClose.addEventListener("click", () => {
  sideBar.style.transform = "translateX(100%)";
});
