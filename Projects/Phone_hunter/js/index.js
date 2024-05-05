const loadData = async (id, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${id}`);
    const data = await res.json();
    const phones = data.data;
    displayData(phones, isShowAll);
}
const displayData = (phones, isShowAll) => {
    const getSection = document.getElementById('displaySection');
    // show all button 
    const showAll = document.getElementById('showAllBtn');
    console.log('is show all : ', isShowAll);
    if (phones.length > 6 && !isShowAll) {
        phones = phones.slice(0, 6);
        showAll.classList.remove('hidden');
    } else {
        showAll.classList.add('hidden');
    }

    if (phones.length != 0) {
        // clearing previous data
        getSection.textContent = '';
        phones.forEach(phone => {
            // console.log(phone);
            const div = document.createElement('div');
            div.classList = `card w-96 bg-base-100 shadow-xl`;
            div.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${phone.image}" alt="Shoes" class="rounded-xl"/>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button onClick="showDetails('${phone.slug}')" class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;
            getSection.appendChild(div);
        });
        handleSpinner(false);
    } else {
        handleSpinner(false);
        alert('no data found');
    };

};
const showDetails = async (phoneId) => {
    // console.log(phoneId,'clicked');
    const res = await fetch(` https://openapi.programming-hero.com/api/phone/${phoneId}`);
    const data = await res.json();
    const singlePhone = data.data;
    // console.log(singlePhone);
    handleModal(singlePhone);
};
const handleModal = (phone) => {
    console.log(phone);
    const modal = document.getElementById('singleModal');
    modal.innerHTML = `
    <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl"/>
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.name}</h2>
    </div>
    `;
    my_modal_4.showModal();
}
const handleSearch = (isShowAll) => {
    handleSpinner(true);
    const getInputField = document.getElementById('search');
    const getText = getInputField.value;
    loadData(getText, isShowAll);
}
const handleSpinner = (isLoding) => {
    const spinner = document.getElementById('spinner');
    if (isLoding) {
        spinner.classList.remove('hidden');
    } else {
        spinner.classList.add('hidden');
    };
}
const handelShowAll = () => {
    handleSearch(true);
}
loadData(13);