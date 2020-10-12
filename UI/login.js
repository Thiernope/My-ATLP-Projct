
const email = document.getElementById("email");
const password = document.getElementById("pasd");
const message = document.getElementById("message");
const form = document.getElementById("form");
const errorElem = document.getElementById("error")
 errorElem.style.backgroundColor = "lightblue";
 errorElem.style.fontSize = "15px";



form.addEventListener("submit", (e)=>{
 let message = [];

 if(email.value === ""|| email.value === null){
  message.push("Email is required");
 }

 if(password.value.length<=7 || password.value.length>=16 ){
  message.push("Password must be between 8 to 15 characters");
 }

 if(message.length>0){
    e.preventDefault();
    errorElem.innerText = message.join(" / ");
 }

 form.reset();
});