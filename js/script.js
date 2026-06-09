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