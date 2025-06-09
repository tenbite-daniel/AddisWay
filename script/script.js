// mobile view nav
const show = document.querySelector("header .fa-bars");
const hide = document.querySelector("header .fa-x");
const menu = document.querySelector(".menu");

// about toggle
const mission = document.querySelector(".mission");
const vision = document.querySelector(".vision");
const missionText = document.querySelector(".mission-text");
const visionText = document.querySelector(".vision-text");

// features carousel
const track = document.querySelector(".carousel-track");
const leftBtn = document.querySelector(".carousel-container .fa-arrow-left");
const rightBtn = document.querySelector(".carousel-container .fa-arrow-right");
const cards = document.querySelectorAll(".carousel-card");

// menu show when hum menu is clicked
function showMenu() {
  menu.classList.add("show");
  show.style.display = "none";
  hide.style.display = "block";
}

// menu hide when hum menu is clicked
function hideMenu() {
  menu.classList.remove("show");
  show.style.display = "inline";
  hide.style.display = "none";
}

// toggle to vision
function showVision() {
  mission.style.textDecoration = "none";
  missionText.style.display = "none";
  vision.style.textDecoration = "underline";
  visionText.style.display = "block";
}

// toggle to mission
function showMission() {
  vision.style.textDecoration = "none";
  visionText.style.display = "none";
  mission.style.textDecoration = "underline";
  missionText.style.display = "block";
}

// carousel update function
let currentIndex = 0;
const totalCards = cards.length;
// function to update carousel moves
function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
// function to move the carousel to the right
function moveRight() {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
}
// function to move the carousel to the left
function moveLeft() {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateCarousel();
}
// auto slides the cards every 4 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
}, 4000);

// chatbot
const messages = [
  {
    role: "system",
    content: `
You are a friendly and helpful chatbot for AddisWay, a web startup that helps people in Addis Ababa find taxi routes, check fare prices, and locate transfer points.

Greet users nicely. You can answer these common questions:
- Who founded AddisWay (Tenbite Daniel and his friends)
- What problems it solves (finding taxi routes, avoiding overpaying, knowing where to transfer)
- What services it offers (Route Finder, Fare Checker, Taxi Stop Locator)
- How someone can support or contact the team (via the contact section or social media)
- The startup’s vision (to make transportation fair, easy, and stress-free in Addis Ababa)

If users ask something off-topic, kindly tell them: “I'm here to help with anything about AddisWay.”

Always use short, simple sentences and speak like you're helping a local user. Be friendly, calm, and respectful.
`,
  },
];

// function to add message
function addMessage(msg, isUser) {
  const messagesDiv = document.getElementById("messages");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  if (isUser) {
    messageDiv.classList.add("user-message");
  }
  messageDiv.textContent = msg;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// function to send message
function sendMessage() {
  const input = document.getElementById("input-message");
  const message = input.value.trim();
  if (message) {
    addMessage(message, true);
    input.value = "";
    messages.push({ content: message, role: "user" });

    if (typeof puter !== "undefined") {
      puter.ai
        .chat(messages)
        .then((response) => {
          const reply = response.message?.content || "⚠️ No response from AI.";
          addMessage(reply, false);
          messages.push({ content: reply, role: "assistant" });
        })
        .catch((error) => {
          console.error("AI response error:", error);
          addMessage("⚠️ Error talking to AI.", false);
        });
    } else {
      addMessage("⚠️ Puter SDK not loaded.", false);
    }
  }
}

// event listner for menu
show.addEventListener("click", showMenu);
hide.addEventListener("click", hideMenu);
// event listner for toggle between mission and vision
vision.addEventListener("click", showVision);
mission.addEventListener("click", showMission);
// event listner for carousel
rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
