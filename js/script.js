function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

function showMessage() {
  document.getElementById("message").innerText = "Thank you! Your message has been received.";
}