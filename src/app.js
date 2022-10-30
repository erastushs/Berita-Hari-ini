import "regenerator-runtime";
import main from "./script/view/main.js";
import fixedNavbar from "./script/action/fixed-navbar";
import "./styles/style.css";

document.addEventListener("DOMContentLoaded", main);

window.addEventListener("scroll", fixedNavbar);
