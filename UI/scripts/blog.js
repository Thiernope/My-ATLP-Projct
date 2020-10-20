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
const password = document.getElementById("paswd");
const errorMessage = document.getElementById("error");
errorMessage.style.color= "red";
errorMessage.style.backgroundColor = "lightblue";
errorMessage.style.padding ="10px 20px"
errorMessage.style.textAlign ="center";
errorMessage.style.display ="none";

form.addEventListener("submit", (e)=>{
e.preventDefault();

let messages = [];

if(password.value.length <=7 || password.value.length>=15){
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


//login form validation

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


const blogList = document.querySelector(".blog-display");

const setUpBlogs = (data)=>{

    let html = "";
    data.forEach(doc =>{
        const blog = doc.data();
        console.log(blog);
        const li = `
        <li>
        <div class="acordion-item-title">Title: <span>${blog.title}</span></div>
        <div class="acordion-item-body">
         <div class="accordion-item-content">
       <div class="identification">
        <div class="data-published">Date published: <span>${blog.date}</span></div>
        <div class="author">Author: <span>${blog.author}</span></div>
       </div>  

       <input type="file" class="image">
        <div class="content">
            <p>${blog.content}</p>

        </div>
      </div>
      </div> 
        </li>   
        `;

        html+=li;
    });

    blogList.innerHTML = html;
}

