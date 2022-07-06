const productCards = document.querySelectorAll('.product-card__slideshow');

for (let productCard of productCards) {
    productCard.addEventListener("mouseover", (event) => {
        const productAction = productCard.getElementsByClassName('product-action');
        productAction[0].style.display = 'block';
    })
    productCard.addEventListener("mouseout", (event) => {
        const productAction = productCard.getElementsByClassName('product-action');
        productAction[0].style.display = 'none';
    })
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("header-sticky");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
