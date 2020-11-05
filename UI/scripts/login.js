const form = document.getElementById("form");
/*
const email = document.getElementById("email");
const password = document.getElementById("pasd");
const message = document.getElementById("message");
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

*/

form.addEventListener('submit',(e)=>{
    e.preventDefault();
const loginPassword= document.getElementById("pasd").value;
const loginEmail = document.getElementById("email").value;
const loginUsername = document.getElementById('username').value;
    fetch("https://desolate-ridge-00597.herokuapp.com/api/login-admin",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json,text/plain,*/*'
        },
        body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
        username: loginUsername
        })
    })
    .then(res => res.json())
    .then(data =>{
      if(data.success === true) {
       window.open("admin.html")
        localStorage.setItem("token",data.token);
       } else{
           alert(data.message);
       }
    
    
    })
    
    form.reset();
})


