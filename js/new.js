const myLocation = document.querySelector('#location');
const title = document.querySelector('#title');
const descript = document.querySelector('#descript');
const price = document.querySelector('#price');
const image = document.querySelector('#image');

const btnSubmit = document.querySelector('.btn-submit');
const id = Date.now();
const campgrounds = localStorage.getItem('campgrounds') ? JSON.parse(localStorage.getItem('campgrounds')) : [];

btnSubmit.addEventListener('click', () => {
    const newCampground = {
        id : id,
        location : myLocation.value,
        title : title.value,
        description: description.value,
        price: parseInt(price.value),
        image: image.value,
        createdAt: Date.now()
    }
    campgrounds.push(newCampground);
    localStorage.setItem('campgrounds', JSON.stringify(campgrounds));
    window.location = 'http://127.0.0.1:5501/index.html'
})