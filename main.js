let navLinks;
window.addEventListener("load", () => {
  navLinks = document.getElementById("navLinks");
})

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

const cards = document.querySelectorAll(".card_inner");

cards.forEach((element) => {
  element.addEventListener("click", clickCard);
});

function clickCard(e) {
  if (!e.target.classList.contains("card_inner")) return;
  e.target.classList.toggle("is-flipped");
}
