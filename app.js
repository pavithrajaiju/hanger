const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "VEST",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/wef.png",
      },
      {
        code: "darkblue",
        img: "./img/web.png",
      },
    ],
  },
  {
    id: 2,
    title: "T-SHIRT",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/menf.png",
      },
      {
        code: "green",
        img: "./img/menb.png",
      },
    ],
  },
  {
    id: 3,
    title: "TOP",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/kidf.png",
      },
      {
        code: "green",
        img: "./img/kidb.png",
      },
    ],
  },
  {
    id: 4,
    title: "GYMWEAR",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/sof.png",
      },
      {
        code: "lightgray",
        img: "./img/sob.png",
      },
    ],
  },
  {
    id: 5,
    title: "LEHENGA",
    price: 4999,
    colors: [
      {
        code: "gray",
        img: "./img/etf.png",
      },
      {
        code: "black",
        img: "./img/etb.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
