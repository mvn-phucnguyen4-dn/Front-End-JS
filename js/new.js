const myLocation = document.querySelector('#location');
const title = document.querySelector('#title');
const descript = document.querySelector('#descript');
const price = document.querySelector('#price');
const image = document.querySelector('#image');

const btnSubmit = document.querySelector('.btn-submit');
const id = Date.now();
const campgrounds = localStorage.getItem('campgrounds') ? JSON.parse(localStorage.getItem('campgrounds')) : [];

btnSubmit.addEventListener('click', () => {
    const campground = {
        id : id,
        location : myLocation.value,
        title : title.value,
        description: description.value,
        price: parseInt(price.value),
        image: 'https://res.cloudinary.com/duy-t-n/image/upload/v1638868069/YelpCamp/pexels-xue-guangjian-1687845_lp7zty.jpg',
        createdAt: Date.now()
    }
    campgrounds.push(campground);
    localStorage.setItem('campgrounds', JSON.stringify(campgrounds));
    window.location = 'http://127.0.0.1:5501/index.html'
})