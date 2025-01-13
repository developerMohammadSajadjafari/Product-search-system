let allProductsData = [];
const productsDOM = document.querySelector(".product-center");
const btns = document.querySelectorAll(".btn");
const buyBtn = document.querySelector(".product-center");
const filters = {
    searchItem: "",
    basket: [],
};

const searachInput = document.querySelector("#searach");
const item = [
    {
        id: 1,
        title: "blazer",
        price: 10.99,
        imgurl: "./images/blazer-1.jpg",
        added: false,
    },
    {
        id: 2,
        title: "blazer",
        price: 20.99,
        imgurl: "./images/blazer-2.jpg",
        added: false,
    },
    {
        id: 3,
        title: "blazer",
        price: 30.99,
        imgurl: "./images/blazer.jpg",
        added: false,
    },
    {
        id: 4,
        title: "mobile",
        price: 40.99,
        imgurl: "./images/mob-1.jpg",
        added: false,
    },
    {
        id: 5,
        title: "mobile",
        price: 50.99,
        imgurl: "./images/mob-2.jpg",
        added: false,
    },
    {
        id: 6,
        title: "mobile",
        price: 60.99,
        imgurl: "./images/mob-2.jpg",
        added: false,
    },
    {
        id: 7,
        title: "watch",
        price: 60.99,
        imgurl: "./images/clock-1.jpg",
        added: false,
    },
    {
        id: 8,
        title: "shoe",
        price: 60.99,
        imgurl: "./images/shoe-1.jpg",
        added: false,
    },
    {
        id: 9,
        title: "shoe",
        price: 88.99,
        imgurl: "./images/shoe-2.jpg",
        added: false,
    },
];

document.addEventListener("DOMContentLoaded", () => {
    allProductsData = item;

    rederProduct(item, filters);
});

function rederProduct(products, search) {
    // console.log(product, search);
    const filteredProduct = products.filter((p) => {
        return p.title.toLowerCase().includes(search.searchItem.toLowerCase());
    });
    productsDOM.innerHTML = "";

    filteredProduct.forEach((item) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
        <div>
        <img class="product-img" src=${item.imgurl} alt="">
      </div>
      <div class="prodouct-desc">
        <p class="product-title">${item.title}</p>
        <p class="product-price">${item.price}</p>
      </div>
      <a   class="buyBtn" data-id="${item.id}">${item.added ? "Remove From Cart" : "BuyNOW!"}</a>
    
     
       `;

        productsDOM.appendChild(productDiv);
    });
}

searachInput.addEventListener("input", (e) => {
    console.log(e.target.value);
    filters.searchItem = e.target.value;
    rederProduct(allProductsData, filters);
});

btns.forEach((btn) => {
    btn.addEventListener("click" , (e)=>{
       const filter = e.target.dataset.filter
       console.log(filter)
       filters.searchItem = filter;
       rederProduct(allProductsData  , filters)
    })
});
