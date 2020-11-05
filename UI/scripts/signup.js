//showing signup modal

const trigeringButton = document.querySelector("#signup");
const signupModal = document.querySelector(".signup-mod-container");
const signupModalClose = document.querySelector(".signupClose");

trigeringButton.addEventListener("click", event=>{
    signupModal.style.display="flex";
    signupModal.classList.add("show");
    document.body.style.overflow ="hidden";
});

signupModalClose.addEventListener("click", event=>{
    signupModal.style.display="none";
    document.body.style.overflow ="initial";
});

signupModal.addEventListener("click", event=>{
    if(event.currentTarget === event.target){
        signupModal.style.display="none";
        document.body.style.overflow ="initial";
    }
});






//showing login modal

const loginTrigButton = document.querySelector("#login-form"); 
const loginModal = document.querySelector(".login-modal-container");
const loginCloseButton = document.querySelector(".loginClose");

loginTrigButton.addEventListener("click", event=>{
  loginModal.style.display="flex";
  loginModal.classList.add("show");
  document.body.style.overflow ="hidden";
});


loginCloseButton.addEventListener("click", event=>{
    loginModal.style.display="none";
    document.body.style.overflow ="initial";
});

loginModal.addEventListener("click", event=>{
    if(event.currentTarget === event.target){
        loginModal.style.display="none";
        document.body.style.overflow ="initial";
    }
});


// signup form validation

const form = document.getElementById("register-form");
/*
const validPassword = document.getElementById("paswd")
const errorMessage = document.getElementById("error");
errorMessage.style.color= "red";
errorMessage.style.backgroundColor = "lightblue";
errorMessage.style.padding ="10px 20px"
errorMessage.style.textAlign ="center";
errorMessage.style.display ="none";

form.addEventListener("submit", (e)=>{
e.preventDefault();

let messages = [];

if(validPassword.value.length <=7 || validPassword.value.length>=15){
messages.push("Password must be between 8 and 15 characters");
}

if(messages.length > 0){
e.preventDefault();
errorMessage.style.display ="block";
errorMessage.innerText = messages.join("/");

setTimeout(function(){
    errorMessage.style.display = "none";
},3000);
}

form.reset();


const signupModal = document.querySelector(".signup-mod-container");

});
*/

//console.log(myName + '' + email + '' + password + '' + phone)

const url="https://desolate-ridge-00597.herokuapp.com/api/register-user";
form.addEventListener('submit',(e)=>{
    e.preventDefault();

const password = document.getElementById("paswd").value;
const myName = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const username = document.getElementById('username').value;
    fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json,text/plain,*/*'
        },
        body: JSON.stringify({
        name: myName,
        email: email,
        password: password,
        phone: phone,
        username: username
        })
    })
    .then(res => res.json())
    .then(data =>{
       alert(data.message);
       window.open("blog.html");
    })

    form.reset();
})



   

//login form validation
/*
const loging = document.getElementById("loging");
const loginPassword = document.getElementById("login-paswd");
const loginError = document.getElementById("login-error");
loginError.style.color="red";
loginError.style.backgroundColor = "lightblue";
loginError.style.padding = "10px 20px";
loginError.style.textAlign ="center";
loginError.style.display = "none";

loging.addEventListener("submit", (e)=>{
e.preventDefault();

let alert = [];
if(loginPassword.value.length <=7 || loginPassword.value.length >=15){
alert.push("Password must be between 8 and 15 characters");
}
if(alert.length >0){
loginError.style.display ="block";
loginError.innerText = alert.join("/");
}

setTimeout(function(){
    loginError.style.display = "none";
},3000);

loging.reset();
});
*/
// login section

loginForm = document.getElementById("loging");
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
const loginPassword= document.getElementById("loginPassword").value;
const loginEmail = document.getElementById("loginEmail").value;
const loginUsername = document.getElementById('loginUsername').value;
    fetch("https://desolate-ridge-00597.herokuapp.com/api/login-user",{
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
       window.open("blog.html");
       localStorage.setItem("token",data.token);
       } else{
           alert(data.message);
       }
    })
    
    loginForm.reset();
})




//make blog post collabsable

const accordionTitles = document.querySelectorAll(".acordion-item-title");

accordionTitles.forEach(accordionTitle=>{
    accordionTitle.addEventListener("click", event=>{
        accordionTitle.classList.toggle("active");
        const acordionItemBody = accordionTitle.nextElementSibling;
        if(accordionTitle.classList.contains("active")){
            acordionItemBody.style.maxHeight = acordionItemBody.scrollHeight + "px";
        }else{
            acordionItemBody.style.maxHeight = 0;
        }
    });
});



