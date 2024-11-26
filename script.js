const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menubar");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
