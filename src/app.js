import "regenerator-runtime";
import main from "./script/view/main.js";
import "./styles/style.css";

document.addEventListener("DOMContentLoaded", main);

window.addEventListener("scroll", function () {
  const nav = document.querySelector("header div");
  nav.classList.toggle("fixed", window.scrollY > 0);
});
