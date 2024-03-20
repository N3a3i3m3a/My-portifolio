const bar = document.querySelector(".fa-bar");
const menu = document.getElementById("menu")

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

