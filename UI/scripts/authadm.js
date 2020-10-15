const createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", (e)=>{
e.preventDefault();
db.collection("blogs").add({
 title: createForm["title"].value,
 author: createForm["author"].value,
 date: createForm["date"].value,
 content: createForm["content"].value
}).then(()=>{

});

createForm.reset();
});



//showing blog-post on admin pannel

const blogPosts = document.querySelector(".posts");

const setUpPosts = (data)=>{
    let html ="";

    data.forEach(doc =>{
        const blog = doc.data();
        
        let li = `
        <li class="posts-manage">
       <div>${blog.title}</div>
       <div>${blog.author}</div>
       <div>${blog.date}</div>
       <div class="delt-btn">&times;</div>
        </li>
        `;

        html+=li;
    });
    
  blogPosts.innerHTML = html;

    }


db.collection("blogs").onSnapshot(snapshot =>{
   setUpPosts(snapshot.docs);
    });

    /*const deltButton = document.querySelector(".delt-btn");

    deltButton.addEventListener("click", (e)=>{
   e.stopPropagation();
console.log("It works");
   let id = e.target.parentElement.getAttribute("data-id");
   db.collection("blogs").doc(id).delete();
    });

*/




