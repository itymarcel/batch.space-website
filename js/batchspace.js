
const nav_toggle = document.querySelector(".nav-toggle");
const nav_list = document.querySelector("nav ol");

nav_toggle.addEventListener('click', event => {
    nav_list.classList.toggle("visible");
    nav_toggle.classList.toggle("open");
    console.log('clicked');
});