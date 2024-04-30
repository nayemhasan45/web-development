const loadData = async (phoneName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}
const displayPhones = (phones) => {
    const getDiv = document.getElementById('phones_container');
    // clear before search
    getDiv.textContent='';
    const getShowAll = document.getElementById('showAllBtn');
    if(phones.length>12){
        getShowAll.classList.remove('hidden');
    }else{
        getShowAll.classList.add('hidden');
    }
    phones=phones.slice(0,12);
    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList = `card bg-yellow-100 shadow-xl`;
        div.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-secondary">Buy Now</button>
            </div>
        </div>
        `;
        getDiv.appendChild(div);
    });
    // stop spinner 
    toogleSpinner(false);
}

const searchPhone=()=>{
    const getDiv = document.getElementById('phones_container');
    // clear when clicked
    getDiv.textContent='';
    toogleSpinner(true);
    const getText = document.getElementById('findPhone').value;
    // loadData(getText);
    console.log(getText);
    loadData(getText);
}

const toogleSpinner=(isTrue)=>{
    const getDiv = document.getElementById('toogle');
    if(isTrue){
        getDiv.classList.remove('hidden');
    }else{
        getDiv.classList.add('hidden');
    }
}