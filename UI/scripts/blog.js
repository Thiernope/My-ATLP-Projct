//fetching blogs from heroku
const blogsLists = document.querySelector(".blog-display");
const menu = document.querySelector(".menu");
const url = "https://desolate-ridge-00597.herokuapp.com/api/blogs";
let output = "";
let menuContent = "";
//user get method to read blogs

fetch(url)
.then(res =>res.json())
.then((data) =>{
   data.forEach(blog=>{
      output += `
      <li>
         <div class="title-content">${blog.title}</div>
         <div class="author-content">Author: <span>${blog.author}</span></div>
         <div class="date-content">Date of publication: <span>${blog.date}</span></div>
         <div class="blog-content">${blog.content}</div>
<div class="comments">
<h2>Add a comment</h2>
<form action="">
  <label for="name">Name</label><br><br>
  <input type="text"><br><br>
  <label for="message">Comment</label><br><br>
  <textarea name="" id="" cols="30" rows="10"></textarea>
</form>
</div>

<div class="gotten-commnts">
  <h4>Thierry Ntirandekura</h4>
  <p>Hello bro, you wrote something interesting!!</p>
  </div>
       </li>
     `;

 menuContent +=`
 
 <li>${blog.title}</li>
 
 `;
   })

   blogsLists.innerHTML = output
   menu.innerHTML = menuContent
})
