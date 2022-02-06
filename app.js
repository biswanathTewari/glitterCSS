const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const body = document.querySelector("body");

const toggleNav = () => {
  navlinks.classList.toggle("navlinks-active");
  body.classList.toggle("body-overflow");
  links.forEach((link, index) => {
    link.style.animation = `nav-link-fade 0.5s ease forwards ${
      index / links.length + 0.25
    }s`;
  });
};

burger.addEventListener("click", toggleNav);
