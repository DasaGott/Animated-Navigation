const nav = document.querySelector("nav");
const button =
  document.getElementById("nav-button");

button.addEventListener("click", () =>
  nav.classList.toggle("active")
);
