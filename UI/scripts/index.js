//add geolocation API
const successCallback = (position)=>{
    console.log(position)
}

const errorCallback = (error)=>{
    console.error(error)
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback,{
    enableHighAccuracy: true,
    timeout: 5000
});

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
