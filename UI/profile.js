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

