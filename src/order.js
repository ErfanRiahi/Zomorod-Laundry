const products = document.querySelector(".products");
const singleProduct = document.querySelectorAll(".products > div");
const billDiv = document.querySelector("table");
const submit_btn = document.querySelector(".totalPriceBtn");

let arrayOfProducts = [
  { id: "0", price: "5.00", pieces: "1", quantity: "0", name: "Blouse" },
  { id: "1", price: "10.00", pieces: "1", quantity: "0", name: "Dress" },
  {
    id: "2",
    price: "15.50",
    pieces: "1",
    quantity: "0",
    name: "Dress, Evening",
  },
  { id: "3", price: "5.00", pieces: "1", quantity: "0", name: "Hat" },
  { id: "4", price: "6.00", pieces: "1", quantity: "0", name: "Jacket" },
  { id: "5", price: "3.00", pieces: "1", quantity: "0", name: "Jeans" },
  { id: "6", price: "8.00", pieces: "1", quantity: "0", name: "Jumpsuit" },
  { id: "7", price: "10.00", pieces: "1", quantity: "0", name: "Overcoat" },
  { id: "8", price: "3.50", pieces: "1", quantity: "0", name: "Polo Shirt" },
  { id: "9", price: "4.00", pieces: "1", quantity: "0", name: "Scarf" },
  { id: "10", price: "2.50", pieces: "1", quantity: "0", name: "Shirt" },
  { id: "11", price: "4.90", pieces: "1", quantity: "0", name: "Skirt" },
  {
    id: "12",
    price: "8.00",
    pieces: "1",
    quantity: "0",
    name: "Skirt, pleated",
  },
  { id: "13", price: "9.50", pieces: "1", quantity: "0", name: "Suit" },
  { id: "14", price: "4.00", pieces: "1", quantity: "0", name: "Sweater" },
  { id: "15", price: "3.00", pieces: "1", quantity: "0", name: "Tie" },
  { id: "16", price: "4.50", pieces: "1", quantity: "0", name: "Trousers" },
  { id: "17", price: "1.90", pieces: "1", quantity: "0", name: "Waistcoat" },
];

// create all products in order page
let i = 0;
arrayOfProducts.forEach((item) => {
  const div = document.createElement("div");
  const productName = document.createElement("h4");
  const productImg = document.createElement("img");
  const numberDiv = document.createElement("div");
  const increase = document.createElement("i");
  const decrease = document.createElement("i");
  const numberOfProduct = document.createElement("label");
  const productPrice = document.createElement("h4");

  productName.innerText = item.name;
  productImg.src = `../assets/img/products/${i}.png`;
  numberOfProduct.innerText = 0;
  productPrice.innerText = item.price;

  increase.id = `in${i}`;
  numberOfProduct.id = `qu${i}`;
  decrease.id = `de${i}`;
  div.id = `pr${i}`;
  increase.className = "fa-solid fa-plus plusBtn";
  decrease.className = "fa-solid fa-minus minusBtn";
  i++;

  numberDiv.append(increase, numberOfProduct, decrease);
  div.append(productName, productImg, productPrice, numberDiv);
  products.append(div);
});

let orderList = [];
products.addEventListener("click", (e) => {
  let targetId = e.target.id.slice(2);
  const quantity = document.querySelector(`#qu${targetId}`);
  const product = document.querySelector(`#pr${targetId}`);

  if (e.target.id.slice(0, 2) === "in") {
    arrayOfProducts[targetId].quantity = +quantity.innerText + 1;
    quantity.innerText = +quantity.innerText + 1;
    product.style.backgroundColor = "#50C87861";
    if (!orderList.includes(targetId)) orderList.push(targetId);
  } else if (e.target.id.slice(0, 2) === "de" && quantity.innerText > 0) {
    arrayOfProducts[targetId].quantity = +quantity.innerText - 1;
    quantity.innerText = +quantity.innerText - 1;
  }

  bill(orderList);
  calculateTotalPrice(orderList);
  const productInBill = document.querySelector(`#tr${targetId}`);
  if (quantity.innerText == 0 && productInBill) {
    // when productInBill remove once, it's value will be null and
    // productInBill.remove() won't work, so we declare if productInBill
    // is not null, then we can use remove()
    arrayOfProducts[targetId].quantity = 0;
    product.style.backgroundColor = "#ffff";
    productInBill.remove();
    orderList.splice(orderList.indexOf(targetId), 1);
  }
});

function bill(orders) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  orders.forEach((item) => {
    const tr = document.createElement("tr");
    const tdN = document.createElement("td");
    const tdP = document.createElement("td");
    const tdQ = document.createElement("td");

    tdN.innerText = arrayOfProducts[+item].name;
    tdP.innerText = (
      arrayOfProducts[+item].price * arrayOfProducts[+item].quantity
    ).toFixed(2);
    tdQ.innerText = arrayOfProducts[+item].quantity;

    tr.id = `tr${arrayOfProducts[+item].id}`;
    tdP.className = "TCenter";
    tdQ.className = "TCenter";

    tr.append(tdN, tdP, tdQ);
    tbody.append(tr);
  });
}

let finalPrice;
function calculateTotalPrice(orders) {
  const final = document.querySelector(".finalPrice");
  let totalPrice = 0;
  orders.forEach((item) => {
    totalPrice +=
      +arrayOfProducts[+item].price * +arrayOfProducts[+item].quantity;
  });
  final.innerText = `IRR${totalPrice.toFixed(2)}`;
  finalPrice = final.innerText;
}

submit_btn.addEventListener("click", () => {
  let data = {
    api_token: "e1cfd0f9b4a1f8f5d200749b797d43d5e07c0ada",
    customerID: "1",
    products: arrayOfProducts,
    finalTotal: finalPrice,
  };
  fetch("https://cleancloudapp.com/api/addOrder", {
    method: "POST",
    headers: "application/json",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
