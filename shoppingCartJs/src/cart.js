let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];


let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    // console.log();
};

calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        return ShoppingCart.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = shopItemData.find((y) => y.id === id) || [];
            let { img, name, price } = search;
            return `
            <div class="cart-item">
                <img width="150" src=${img} alt="">
                <div class="details">
                    <div class="title-price-x">
                        <h4 class="title-price">
                            ${name}
                        </h4>
                    </div>
                    <p class="cart-item-price">${price} $</p>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                        <div id="${id}" class="quantity">${item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                    </div>
                    <h3>${item * price} $</h3>
                    <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                </div>
            </div>
            `
        }).join('');
    }
    else {
        ShoppingCart.innerHTML = `
        <h2>Your cart is empty</h2>
        <a href="/">
        <button class="HomeBtn"><i class="bi bi-arrow-return-left"></i>Return to Catalog</button>
        </a>
        `;
        label.style.display = "none";
    }
}

generateCartItems();


let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id)

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else {
        search.item += 1;
    }

    update(selectedItem.id);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id)

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0)
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();
};

let removeItem = (id) => {
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCartItems();
    calculation();
    TotalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
}

let clearCart = () => {
    basket = [];
    generateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
}

let TotalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket.map((x) => {
            let { id, item } = x;
            let search = shopItemData.find((y) => y.id === id) || [];
            return item * search.price;
        }).reduce((x, y) => x + y, 0);
        label.innerHTML = `
        <h2>Total:</h2>
        <p>Products: <span>${amount} $</span></p>
        <p>Delivery: <span>free</span></p>
        <button class="checkout" id="modalBtn">Checkout <i class="bi bi-arrow-right"></i></button>
        <button onclick="clearCart()" class="removeAll">Remove all</button>
        `
    }
    else return;
}

TotalAmount();


let modal = document.getElementById("myModal");
let modalBtn = document.getElementById("modalBtn");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
modalBtn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}