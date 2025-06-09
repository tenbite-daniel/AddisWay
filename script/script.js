const show = document.querySelector("header .fa-bars");
const hide = document.querySelector("header .fa-x");
const menu = document.querySelector(".menu");

function showMenu() {
  menu.classList.add("show");
  show.style.display = "none";
  hide.style.display = "block";
}

function hideMenu() {
  menu.classList.remove("show");
  show.style.display = "inline";
  hide.style.display = "none";
}
show.addEventListener("click", showMenu);
hide.addEventListener("click", hideMenu);
