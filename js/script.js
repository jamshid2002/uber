document.addEventListener("DOMContentLoaded", ()=> {
    const hamburger = document.querySelector(".hamburger_active");
    const header = document.querySelector(".header_menu");
    hamburger.addEventListener("click", e => {
        if (hamburger.classList.contains("hamburger_close")) {
            header.classList.remove("header_menu_active");
            hamburger.classList.remove("hamburger_close");
        } else {
            header.classList.add("header_menu_active");
            hamburger.classList.add("hamburger_close");
        }
        
    })
});