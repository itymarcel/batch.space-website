
const nav_toggle = document.querySelector(".nav-toggle");
const nav_list = document.querySelector("nav ol");

nav_toggle.addEventListener('click', event => {
    nav_list.classList.toggle("visible");
    nav_toggle.classList.toggle("open");
    console.log('clicked');
});


const temp_content_toggle = document.querySelector(".covid a");
const covid = document.querySelector(".covid");

temp_content_toggle.addEventListener('click', e => {
    covid.classList.toggle('visible');
})