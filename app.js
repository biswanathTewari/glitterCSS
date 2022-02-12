const body = document.querySelector("body");
const html = document.querySelector("html");
const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".nav-links");
const linkWrappers = document.querySelectorAll(".nav-links li");
const links = document.querySelectorAll(".nav-link");

const toggleNav = () => {
  navlinks.classList.toggle("navlinks-active");
  body.classList.toggle("body-overflow");
  html.classList.toggle("body-overflow");
  linkWrappers.forEach((link, index) => {
    link.style.animation = `nav-link-fade 0.5s ease forwards ${
      index / linkWrappers.length + 0.25
    }s`;
  });
};

burger.addEventListener("click", toggleNav);
links.forEach((link) => {
  link.addEventListener("click", toggleNav);
});
