window.addEventListener("scroll", function () {
  const nav = document.querySelector("header div");
  nav.classList.toggle("fixed", window.scrollY > 0);
});
