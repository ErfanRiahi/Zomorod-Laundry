let products = document.querySelectorAll(".product");
products = [...products];

const bill = document.querySelector(".bill");
const PName = document.querySelector(".PName");
const PPrice = document.querySelector(".PPrice");

let arrayOfProducts = [
  { id: "0", price: "5.00", pieces: "1", quantity: "0", name: "Blouse" },
  { id: "1", price: "10.00", pieces: "1", quantity: "0", name: "Dress" },
];

for (let product of products) {
  product.addEventListener("click", () => {
    // console.log(product.children[0].innerText);

    let productSpecifications = arrayOfProducts.filter(
      (el) => el.name == product.children[0].innerText
    )[0];
    console.log(productSpecifications);

    const name = productSpecifications.name;
    let price = productSpecifications.price;
    let quantity = productSpecifications.quantity;

    productSpecifications.quantity = `${++quantity}`;

    const productName = document.createElement("label");
    const div = document.createElement("div");
    const numberOfProduct = document.createElement("label");
    const decrease = document.createElement("label");
    const increase = document.createElement("label");

    productName.innerText = name;
    numberOfProduct.innerText = quantity;
    decrease.innerText = "-";
    increase.innerText = "+";
    // bill.append(name, increase, numberOfProduct, decrease);
    PName.append(productName);
    div.append(increase, numberOfProduct, decrease);
    PPrice.append(div);
  });
}

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].children[0].innerText);
// }

// [...products].map((el) => {
//   console.log(el.children[0].innerText);
// });
