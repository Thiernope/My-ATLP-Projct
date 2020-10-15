//connecting signup form to firebase
const signupForm = document.getElementById("register-form");

signupForm.addEventListener("submit", (e)=>{
e.preventDefault();
//get user info
var  email = document.getElementById("email").value;
var  password= document.getElementById("paswd").value;
 auth.createUserWithEmailAndPassword(email,password).then().catch(function(error){
 
 });
 
});


//getting data from firebase

db.collection("blogs").get().then(snapshot =>{
    setUpBlogs(snapshot.docs);
});