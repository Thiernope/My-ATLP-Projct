const trigaringButton = document.querySelector(".update");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

trigaringButton.addEventListener("click", event=>{
    modal.style.display= "flex";
    document.body.style.overflow = "hidden";
    modal.classList.add("modal-show");
});

modalClose.addEventListener("click", event=>{
    modal.style.display= "none";
    document.body.style.overflow = "initial";

});


modal.addEventListener("click", event=>{
    if(event.currentTarget === event.target){
modal.style.display= "none";
document.body.style.overflow = "initial";
    }
});


const url ="https://desolate-ridge-00597.herokuapp.com/api/users/profile";
const dataContainer = document.querySelector(".info-container")

window.addEventListener('load',(e)=>{
    let output = "";
    const token = localStorage.getItem('token');
    fetch(url,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": `${token}`
        }
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
       output += `
       <li>
       <div>Name: <span>${data.name}</span></div>
       <div>Username: <span>${data.username}</span></div>
       <div>Email: <span>${data.email}</span></div>
       <div>Phone: <span>${data.phone}</span></div>
       </li>
       `;
     dataContainer.innerHTML = output;  
       
    })
    
})
