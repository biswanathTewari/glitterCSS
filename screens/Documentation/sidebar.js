const sidebarMobile = document.querySelector(".sidebar-mobile");
const sidebarHeaderMobile = document.querySelector(".sidebar-header-mobile");
const arrow = document.querySelector(".fa-sort-down");
const sidebarListMobile = document.querySelector(".sidebar-list-mobile");
const sidebarMobileLinkWrapper = document.querySelectorAll(
  ".sidebar-list-mobile li"
);
const sidebarMobileLinks = document.querySelectorAll(
  ".sidebar-list-link-mobile"
);

const toggleMobileSidebar = () => {
  if (arrow.style.animation) {
    arrow.style.animation = "fa-sort-down 0.5s ease forwards";
    setTimeout(() => (arrow.style.animation = ""), 500);
  } else {
    arrow.style.animation = "fa-sort-up 0.5s ease forwards";
  }
  sidebarMobile.classList.toggle("sidebar-mobile-active");
  sidebarListMobile.classList.toggle("sidebar-list-mobile-active");
  sidebarMobileLinkWrapper.forEach((link, index) => {
    link.style.animation = `nav-link-fade 0.25s ease forwards ${
      index / sidebarMobileLinkWrapper.length + 0.25
    }s`;
  });
};

sidebarHeaderMobile.addEventListener("click", toggleMobileSidebar);
sidebarMobileLinks.forEach((link) => {
  link.addEventListener("click", toggleMobileSidebar);
});
