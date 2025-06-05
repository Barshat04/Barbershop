const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".menubar");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
