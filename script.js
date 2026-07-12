const hamburger = document.getElementById("hamburger");

const menu = document.getElementById("menu");


hamburger.addEventListener("click",()=>{

menu.classList.toggle("active");

});





const form = document.getElementById("orderForm");


form.addEventListener("submit",(e)=>{


e.preventDefault();



const name =
document.getElementById("name").value;


const email =
document.getElementById("email").value;


const request =
document.getElementById("request").value;



const phone="447823657496";



const message =

`Hi! I would like to place a crochet order 🧶

Name: ${name}

Email: ${email}

Order request:
${request}`;



const whatsapp =

`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;



window.open(whatsapp,"_blank");


});