function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.json())
    .then(data=>console.log(data))
}
function getUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>loadUser(users))
}
function loadUser(users){
    const ul=document.getElementById('ul');
    for(const user of users){
        const li=document.createElement('li');
        li.innerText=user.name;
        ul.appendChild(li);
        // console.log(user.name);
    }
}