let campgrounds = localStorage.getItem('campgrounds') ? JSON.parse(localStorage.getItem('campgrounds')) : generateCampgrounds();
if (!localStorage.getItem('campgrounds')) localStorage.setItem('campgrounds', JSON.stringify(campgrounds));
const listCamp = document.querySelector('.list-campground');

listCamp.innerHTML = addCamp(campgrounds);

let btnDeletes = document.querySelectorAll('.btn-delete');
let btnEdits = document.querySelectorAll('.btn-edit');
let cardCampgrounds = document.querySelectorAll('.card-campground');

createListenDelete();
createListenUpdate();

// Search
const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('keydown', (e) => {
    const searchStr = searchInput.value.toLowerCase();
    const searchCampgrounds = campgrounds.filter(campground => (campground.title.toLowerCase().includes(searchStr) || campground.location.toLowerCase().includes(searchStr)));
    listCamp.innerHTML = addCamp(searchCampgrounds);
    btnDeletes = document.querySelectorAll('.btn-delete');
    btnEdits = document.querySelectorAll('.btn-edit');
    cardCampgrounds = document.querySelectorAll('.card-campground');
    createListenDelete();
    createListenUpdate();
})

function createListenDelete() {
    btnDeletes.forEach((btnDelete, index) => {
        btnDelete.addEventListener('click', () => {
            const id = btnDelete.getAttribute('data-id');
            campgrounds = campgrounds.filter(camp => camp.id != id);
            localStorage.setItem('campgrounds', JSON.stringify(campgrounds))
            listCamp.removeChild(cardCampgrounds[index]);
        })
    })
}
function createListenUpdate() {
    btnEdits.forEach((btnEdit, index) => {
        btnEdit.addEventListener('click', () => {
            const id = btnEdit.getAttribute('data-id');
            localStorage.setItem('id', JSON.stringify(id))
        })
    })
}

function addCamp(campgrounds) {
    return campgrounds.map(camp => `<div class="card-campground flex-wrap">
    <div class="slider">
        <a href="#"><img src="${camp.image}" alt="campground - image"></a>
    </div>
    <div class="content ">
        <h4 class="campground-description"><a href="./show.html">${camp.title}</a></h4> 
        <p class="location"><i class="fas fa-map-marker-alt"></i> ${camp.location}</p>
        <p class= "description">${camp.description}</p>
        <span class="price">€${camp.price}/night</span><span class="price">${(new Date(camp.createdAt)).toLocaleDateString('en-GB')}</span><br>
        <button class="btn-edit btn" data-id="${camp.id}"><a href="./edit.html">Update</a></button> 
        <button class="btn-delete btn" data-id="${camp.id}">Delete</button>    
    </div>
</div>`).join('');
}

// Sort
const sort = document.querySelector('#sort');

sort.addEventListener('change', (e) => {
    const sortBy = e.target.value;
    const sortCapgrounds = campgrounds;
    switch (sortBy) {
        case 'oldest':
            sortCapgrounds.sort((camgpround1, camgpround2) => camgpround1.createdAt - camgpround2.createdAt);
            break;
        case 'newest':
            sortCapgrounds.sort((camgpround1, camgpround2) => camgpround2.createdAt - camgpround1.createdAt);
            break;
        case 'price-in':
            sortCapgrounds.sort((camgpround1, camgpround2) => camgpround1.price - camgpround2.price);
            break;
        case 'price-de':
            sortCapgrounds.sort((camgpround1, camgpround2) => camgpround2.price - camgpround1.price);
            break;
        default:
    }
    listCamp.innerHTML = addCamp(sortCapgrounds);
    btnDeletes = document.querySelectorAll('.btn-delete');
    btnEdits = document.querySelectorAll('.btn-edit');
    cardCampgrounds = document.querySelectorAll('.card-campground');
    createListenDelete();
    createListenUpdate();
})