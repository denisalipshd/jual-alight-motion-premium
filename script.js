const menuList = document.querySelector(".menu-list");
const navList = document.querySelector(".nav-list");

menuList.addEventListener("click", () => {
  navList.classList.toggle("active");
});
