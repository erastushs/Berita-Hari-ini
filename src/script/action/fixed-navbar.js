const fixedNavbar = () => {
  const nav = document.querySelector("header div");
  nav.classList.toggle("fixed", window.scrollY > 0);
};

export default fixedNavbar;
