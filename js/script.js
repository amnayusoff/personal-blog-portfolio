function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

function readMore(title) {
    alert("You selected: " + title + ". Full blog content can be added in the next version.");
}

function sendMessage() {
    const message = document.getElementById("formMessage");
    message.innerText = "Thank you! Your message has been received.";
}

function showTab(tabName) {
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  contents.forEach(content => content.classList.remove("active"));
  buttons.forEach(button => button.classList.remove("active"));

  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");
}