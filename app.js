const mobile_nav =document.querySelector(".nav-bar-btn");
const mobile_header = document.querySelector(".header"); 


const toggelNavbar = ()=>{
    mobile_header.classList.toggle("active")
}


mobile_nav.addEventListener("click",()=> toggelNavbar());