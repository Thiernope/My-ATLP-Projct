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



