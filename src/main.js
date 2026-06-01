import "./styles/style.css";

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const headerMenu = document.getElementById("header-menu");

menuIcon.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".header__menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerMenu.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (!headerMenu.contains(event.target) && !menuIcon.contains(event.target)) {
    headerMenu.classList.remove("active");
  }
});
