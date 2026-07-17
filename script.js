/* ==========================================
   MOBILE MENU
========================================== */


const hamburger = document.getElementById("hamburger");

const menu = document.getElementById("menu");


hamburger.addEventListener("click", () => {

    menu.classList.toggle("active");

});



/* Close menu when a link is clicked */

const menuLinks = document.querySelectorAll(".menu a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});





/* ==========================================
   WHATSAPP CUSTOM ORDER FORM
========================================== */


const form = document.getElementById("orderForm");


form.addEventListener("submit",(e)=>{


e.preventDefault();



const name =
document.getElementById("name").value;


const email =
document.getElementById("email").value;


const product =
document.getElementById("product").value;


const colour =
document.getElementById("colour").value;


const request =
document.getElementById("request").value;



const phone =
"447823657496";



const message =

`Hi Funmi! 🧶

I would like to place an order.

Name:
${name}

Email:
${email}

Product:
${product}

Preferred Colour:
${colour}

Details:
${request}

Thank you! ♡`;



const whatsapp =

`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;



window.open(whatsapp,"_blank");


});





/* ==========================================
   SCROLL ANIMATION
========================================== */


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{

    threshold:0.15

});



const animatedElements = document.querySelectorAll(

".feature-card, .category-card, .product, .steps-grid div, .about-container"

);



animatedElements.forEach(element=>{

    element.classList.add("hidden");

    observer.observe(element);

});





/* ==========================================
   SMOOTH HEADER SHADOW ON SCROLL
========================================== */


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 8px 25px rgba(0,0,0,.12)";

    }

    else{

        header.style.boxShadow =
        "0 2px 10px rgba(0,0,0,.05)";

    }


});

/* ==========================================
   PRODUCT FILTERING
========================================== */


const filterButtons =
document.querySelectorAll(".filter-btn");


const products =
document.querySelectorAll(".product");



filterButtons.forEach(button=>{


button.addEventListener("click",()=>{


const filter =
button.dataset.filter;



filterButtons.forEach(btn=>{

btn.classList.remove("active");

});


button.classList.add("active");



products.forEach(product=>{


const category =
product.dataset.category;



if(filter==="all" || filter===category){

product.style.display="block";

}

else{

product.style.display="none";

}



});



});


});
