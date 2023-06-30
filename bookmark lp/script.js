let hamburger = document.getElementById("hamburger")
let closeBtn = document.getElementById("close-btn")
let navbar = document.querySelector(".mobile--nav")
let backToTop = document.querySelector(".scrollTop")
let feature = document.querySelector(".features")
let tabHeader = document.querySelectorAll("[data-tab-target]");
let tabIndicator = document.querySelector(".tab-indicator");
let tabBody = document.querySelectorAll("[data-tab-content]");
let faqs = document.querySelectorAll(".faqs__faq")
let errorImg = document.getElementById("erroricon")
let errorMsg = document.getElementById("errormsg")
let inputGrp = document.getElementById("input-group")
let email = document.getElementById("email")

hamburger.addEventListener("click", () => {
    navbar.classList.add("active")
    // document.body.style.overflow = "hidden"
})

closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active")
    // document.body.style.overflow = "scroll"
})


tabHeader.forEach(tab => {
    tab.addEventListener("click", (e) => {
        tabHeader.forEach(tab => {
            tab.classList.remove("active");
            })
        tab.classList.add("active");
        const select = document.querySelector(tab.dataset.tabTarget);
        tabBody.forEach(tabContent => {
            tabContent.classList.remove("active")
        });
        select.classList.add("active")
    })
    
});

faqs.forEach(faq => {
    faq.addEventListener("click" , () => {
        faq.classList.toggle('active')
        if(faq.classList.contains("active")){
            faq.nextElementSibling.classList.add("active")
        }
        else{
            faq.nextElementSibling.classList.remove("active")
        }
    })
})

function validateEmail() {
    if(email.value == ""){
        errorImg.style.display = "none";
        errorMsg.style.display = "none";
        inputGrp.classList.remove("error");
        inputGrp.style.height= "3.5rem"
    }

    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        inputGrp.classList.add("error");
        inputGrp.style.height= "5rem"
        errorImg.style.display = "block";
        errorMsg.style.display = "block";
        inputGrp.classList.remove("correct")

        return false;
    }
    else{
        inputGrp.classList.add("correct")
        inputGrp.classList.remove("error");
        errorImg.style.display = "none";
        errorMsg.style.display = "none";
        inputGrp.style.height= "3.5rem"

        return true;
    }
}

function toggle(display){
    backToTop.style.display = display
}

window.addEventListener("scroll", function(e){
    let featHeight = feature.offsetTop;
    let scrollHeight = window.scrollY;

    scrollHeight >= featHeight ? toggle("grid") : toggle("none")
})

function back() {
    window.scrollTo(0,0);
}