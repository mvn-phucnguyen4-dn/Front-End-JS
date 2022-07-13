const campgrounds = localStorage.getItem('campgrounds') ? JSON.parse(localStorage.getItem('campgrounds')) : [];

const id = localStorage.getItem('id') ? JSON.parse(localStorage.getItem('id')) : null;

const campground = campgrounds.find(campground => campground.id == id);

const myLocation = document.querySelector('#location');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const price = document.querySelector('#price');
const image = document.querySelector('#image');

myLocation.value = campground.location;
title.value = campground.title;
description.value = campground.description;
price.value = campground.price;
image.value = campground.image;

const btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener('click', () => {
    const campground = {
        id : id,
        location : myLocation.value,
        title : title.value,
        description: description.value,
        price: parseInt(price.value),
        image: 'https://res.cloudinary.com/duy-t-n/image/upload/v1638868069/YelpCamp/pexels-xue-guangjian-1687845_lp7zty.jpg',
        createdAt : campground.createdAt
    }
    const editCampgrounds = campgrounds.map(element => {
        if (element.id == id) return campground;
        return element;
    })
    localStorage.setItem('campgrounds', JSON.stringify(editCampgrounds));
    window.location = '/'
})