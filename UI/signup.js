// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA5SiH3qbgsCPG7Hf8l90Xy8i7kpqzmJkA",
    authDomain: "contact-form-8d643.firebaseapp.com",
    databaseURL: "https://contact-form-8d643.firebaseio.com",
    projectId: "contact-form-8d643",
    storageBucket: "contact-form-8d643.appspot.com",
    messagingSenderId: "418952546275",
    appId: "1:418952546275:web:d58f83144bbe346956c2d6",
    measurementId: "G-CGSC0WMCZ1"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//reference message collection

var messagesRef = firebase.database().ref("Personal info");


document.getElementById("register-form").addEventListener("submit", submitForm);

function submitForm(e){

e.preventDefault();

//geting values by ids

const name = getInputValue("name");
const age = getInputValue("age");
const email = getInputValue("email");
const password = getInputValue("pasd");
//save message

saveMessages(name, age, email, password);

document.querySelector(".alert").style.display="block";


setTimeout(function(){
  document.querySelector(".alert").style.display="none";

},3000);

/*const errorMessage = document.getElementById("error");
var message = [];
if(password.value.length <=7){
message.push("password must be more than 7 characters");
}

if(message.length>0){
e.preventDefault();
errorMessage.innerText = message;
}  

*/


}


function getInputValue(id){
  return document.getElementById(id).value;
}


//save nessages to firebase

function saveMessages(name, age, email, password){

var newMessageRef = messagesRef.push();
newMessageRef.set({
    name: name,
    age:age,
    email:email,
    password:password
});
}

