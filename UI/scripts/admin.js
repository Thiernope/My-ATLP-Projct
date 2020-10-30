const cardsContainer = document.querySelector(".cards-container");
const addArticleForm = document.querySelector("#add-article-form");
const titleValue = document.querySelector("#title");
const authorValue = document.querySelector("#author");
const contentValue = document.querySelector("#content");
const submitButton = document.querySelector(".btn")

let output = '';
const url="https://desolate-ridge-00597.herokuapp.com/api/blogs";

//getting all blogs

const renderPosts = (blogs)=>{
    blogs.forEach(post=>{
        output += `       
<li class="card-post">
    <h3 class="title-content">${post.title}</h3>
    <h4 class="author-content">${post.author}</h4>
    <h5>${post.date}</h5>
    <p class="content-content">${post.content}</p>
    <div class="links" data-id = ${post._id}>
   <a href="#" class="card-link" id="edit-blog">Edit</a>
   <a href="#" class="card-link" id="delete-blog">delete</a>
</div>  
</li>
        `;
    })

    cardsContainer.innerHTML = output;
}

fetch(url)
.then(res=>res.json())
.then((data)=>renderPosts(data)); 


//add an article
addArticleForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
        title: titleValue.value,
        author: authorValue.value,
        content: contentValue.value
        })
    })
    .then(res => res.json())
    .then(data =>{
        const dataArr = [];
        dataArr.push(data);
        renderPosts(dataArr);
    })

    addArticleForm.reset();
})

//delete a blog

cardsContainer.addEventListener('click', (e)=>{
e.preventDefault();
let whenDeltBtnIsPressed = e.target.id == "delete-blog";
let whenEditBtnIsPressed = e.target.id =="edit-blog";
let id = e.target.parentElement.dataset.id;

// delet requerst --remove existing blog

if(whenDeltBtnIsPressed){
fetch(`${url}/${id}`,{
    method: "DELETE" 
}) 
.then(res =>res.json())
.then(()  =>location.reload())
} 
// Editing the existing blog

if(whenEditBtnIsPressed){
    const parent = e.target.parentElement.parentElement;
    console.log(parent);
    let titleContent = parent.querySelector(".title-content").textContent;
    let authorContent = parent.querySelector(".author-content").textContent;
    let contentContent = parent.querySelector(".content-content").textContent;
    console.log(authorContent, titleContent, contentContent)
    titleValue.value = titleContent;
    authorValue.value = authorContent;
    contentValue.value = contentContent;
}

//update then using putch method

submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
   fetch(`${url}/${id}`,{
       method: "PATCH",
       headers:{
           "Content-Type": "application/json"
       },
       body: JSON.stringify({
           title:  titleValue.value,
           author: authorValue.value,
           content: contentValue.value
       })
   })
   .then(res => res.json())
   .then(() => location.reload())
})



}) 