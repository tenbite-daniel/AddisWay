const show = document.querySelector("header .fa-bars");
const hide = document.querySelector("header .fa-x");
const menu = document.querySelector(".menu");

// about toggle
const mission = document.querySelector(".mission");
const vision = document.querySelector(".vision");
const missionText = document.querySelector(".mission-text");
const visionText = document.querySelector(".vision-text");
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

function showVision() {
  mission.style.textDecoration = "none";
  missionText.style.display = "none";
  vision.style.textDecoration = "underline";
  visionText.style.display = "block";
}

function showMission() {
  vision.style.textDecoration = "none";
  visionText.style.display = "none";
  mission.style.textDecoration = "underline";
  missionText.style.display = "block";
}

show.addEventListener("click", showMenu);
hide.addEventListener("click", hideMenu);
vision.addEventListener("click", showVision);
mission.addEventListener("click", showMission);
