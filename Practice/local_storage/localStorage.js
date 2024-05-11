const getValue=()=>{
    const getKey = document.getElementById("key");
    const getValue = document.getElementById("value");
    const key = getKey.value;
    const value = getValue.value;
    getKey.value='';
    getValue.value='';
    displayLi(key,value);
    setToLocalStorage(key,value);
};
const displayLi=(key,value)=>{
    const ul=document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText=`${key} : ${value}`;
    ul.appendChild(li);
};
const getStoredCart=()=>{
    let cart={};
    const getCart = window.localStorage.getItem('cart');
    if(getCart){
        cart=JSON.parse(getCart);
    };
    return cart;
}
const setToLocalStorage=(key,value)=>{
    const cart = getStoredCart();
    console.log(cart);
    cart[key]=value;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
    console.log(cartStringified);
}
const showStoredCart=()=>{
    const cart = getStoredCart();
    console.log(cart);
    for(const key in cart){
        const value = cart[key];
        displayLi(key,value);
    }
}
showStoredCart();