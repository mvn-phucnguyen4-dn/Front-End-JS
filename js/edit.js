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
    const newCampground = {
        id : id,
        location : myLocation.value,
        title : title.value,
        description: description.value,
        price: parseInt(price.value),
        image: image.value,
        createdAt : campground.createdAt
    }
    const editCampgrounds = campgrounds.map(element => {
        if (element.id == id) return newCampground;
        return element;
    })
    localStorage.setItem('campgrounds', JSON.stringify(editCampgrounds));
    window.location = '/'
})