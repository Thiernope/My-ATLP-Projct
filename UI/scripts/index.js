const createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", (e)=>{
e.preventDefault();
db.collection("queries").add({
 firstName: createForm["first-name"].value,
 lastName: createForm["last-name"].value,
 email: createForm["email"].value,
 message: createForm["message"].value
}).then(()=>{

});

createForm.reset();
});