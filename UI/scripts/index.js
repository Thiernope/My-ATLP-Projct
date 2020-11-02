<<<<<<< HEAD
//add a query
const url = "https://desolate-ridge-00597.herokuapp.com/api/queries";
const form = document.getElementById("query-form");
form.addEventListener('submit',(e)=>{ 

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const message= document.getElementById("message");
    e.preventDefault();
    fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: message.value
        })
    })
    .then(res => res.json())
    .then(data =>{
        alert(data.message);
    })

    form.reset();
})
=======
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
>>>>>>> dfd761a151ab522417d4224072e46711a35bf83f
