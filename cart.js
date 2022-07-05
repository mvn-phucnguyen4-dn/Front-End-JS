let cartData = localStorage.getItem('cartData') ? JSON.parse(localStorage.getItem('cartData')) : [];
const listItem = document.querySelector('.list-item');

const renderItem = (items) => {
    listItem.innerHTML = "";
    items.forEach(element => {
        listItem.innerHTML += `
        <tr>
            <td class="thumbnail"><a href="#"><img src="${element.image}" class="img-thumbnail" alt="thumbnail"></a></td>
            <td class="product-name"><a href="#">${element.name}</a></td>
            <td class="price"><span class="old">${element.oldPrice}</span><span class="new">${element.newPrice}</span></td>
            <td>
                <div class="cart-plus-minus">
                    <button class="decrease">-</button>
                    <input type="text" readonly value="${1}">
                    <button class="increase">+</button>
                </div>
            </td>
            <td class="total">${element.newPrice}</td>
            <td><button class="btn-delete" data-id="${element.id}"><i class="fas fa-times"></i></button></td>
        </tr>`
    });
}

renderItem(cartData);
const btnDeletes = document.querySelectorAll('.btn-delete');
const cards = document.querySelectorAll('.list-item > tr');
const tableBody = document.querySelector('.list-item');
const countProduct = document.querySelector('.count-product-in-cart');
countProduct.innerHTML = cartData.length;

btnDeletes.forEach((btnDelete, index) => {
    btnDelete.addEventListener('click', (e) => {
        const id = btnDelete.getAttribute('data-id');
        cartData = cartData.filter(product => product.id != id);
        localStorage.setItem('cartData', JSON.stringify(cartData));
        tableBody.removeChild(cards[index]);
        // cards[index].innerHTML = "";
        countProduct.innerHTML = "";
        countProduct.innerHTML = cartData.length;
    })
});
