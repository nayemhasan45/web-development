function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>userData(data))
}
loadPost();
function userData(posts){
    const postId = document.getElementById('userPost');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML=`
            <h1>User Title : ${post.title}</h1>
            <h3>User Id : ${post.userId}</h3>
            <p>User description : ${post.body}</p>
        `;
        postId.appendChild(div);
    }
}