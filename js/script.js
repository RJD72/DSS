const navEl = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    navEl.classList.add("nav-scrolled");
  } else if (window.scrollY < 500) {
    navEl.classList.remove("nav-scrolled");
  }
});
