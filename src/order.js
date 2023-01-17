const productsDiv = document.querySelector(".products");
const billDiv = document.querySelector("table");
const submit_btn = document.querySelector(".totalPriceBtn");
const menu = document.querySelector(".sectionMenu");
const dry = document.querySelector(".dry");
const laundry = document.querySelector(".laundry");
const pressed = document.querySelector(".pressed");
const repairs = document.querySelector(".repairs");
const alternations = document.querySelector(".alternations");
const allProducts = [dry, laundry, pressed, repairs, alternations];

const fetchAPI = async () => {
  try {
    const res = await fetch("data.json");

    //   const res = fetch("https://cleancloudapp.com/api/getProducts", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => main(data))

    const data = await res.json();
    main(data.Products);
  } catch (error) {
    console.log("something went wrong\n" + error);
  }
};

fetchAPI();

function main(data) {
  laundry.style.display = "none";
  pressed.style.display = "none";
  repairs.style.display = "none";
  alternations.style.display = "none";

  for (let i = 1; i <= allProducts.length; i++) {
    data
      .filter((item) => item.section == i)
      .forEach((item) => {
        const div = document.createElement("div");
        const productName = document.createElement("h4");
        const productImg = document.createElement("img");
        const numberDiv = document.createElement("div");
        const increase = document.createElement("i");
        const decrease = document.createElement("i");
        const numberOfProduct = document.createElement("label");
        const productPrice = document.createElement("h4");
        const laundryItem = document.querySelector("#m1");

        productName.innerText = item.name;
        productImg.src = `../assets/img/products/${item.id}.png`;
        numberOfProduct.innerText = 0;
        productPrice.innerText = item.price;
        laundryItem.style.backgroundColor = "#50c878";
        laundryItem.style.color = "white ";

        productName.id = `na${item.id}`;
        productPrice.id = `pr${item.id}`;
        div.id = `pc${item.id}`;
        increase.id = `in${item.id}`;
        numberOfProduct.id = `qu${item.id}`;
        decrease.id = `de${item.id}`;
        laundryItem.className = "colored";

        increase.className = "fa-solid fa-plus plusBtn";
        decrease.className = "fa-solid fa-minus minusBtn";

        numberDiv.append(increase, numberOfProduct, decrease);
        div.append(productName, productImg, productPrice, numberDiv);
        allProducts[i - 1].append(div);
      });
  }

  menu.addEventListener("click", (e) => {
    if (e.target) {
      const coloredItem = document.querySelector(".colored");
      coloredItem.classList.remove("colored");
      coloredItem.style.backgroundColor = "white";
      coloredItem.style.color = "black";
      let test = (allProducts.filter(
        (item) =>
          item.className.split(" ")[0] ==
          coloredItem.innerText.split(" ")[0].toLowerCase()
      )[0].style.display = "none");

      e.target.style.backgroundColor = "#50c878";
      e.target.color = "white";
      e.target.className = "colored";
      allProducts.filter(
        (item) =>
          item.className.split(" ")[0] ==
          e.target.innerText.split(" ")[0].toLowerCase()
      )[0].style.display = "grid";
    }
  });
}

let orderList = [];
function selectProduct(data) {
  productsDiv.addEventListener("click", (e) => {
    let targetId = e.target.id.slice(2);
    const product = document.querySelector(`#pc${targetId}`);
    const name = document.querySelector(`#na${targetId}`);
    const price = document.querySelector(`#pr${targetId}`);
    const quantity = document.querySelector(`#qu${targetId}`);

    if (e.target.id.slice(0, 2) === "in") {
      quantity.innerText = +quantity.innerText + 1;
      product.style.backgroundColor = "#50C87861";
      if (!orderList.some((item) => item.id == targetId))
        orderList.push({
          id: targetId,
          name: data[targetId].name,
          price: data[targetId].price,
          quantity: quantity.innerText,
        });
      else if (orderList.some((item) => item.id == targetId))
        +orderList.filter((item) => item.id == targetId)[0].quantity++;
    } else if (e.target.id.slice(0, 2) === "de" && quantity.innerText > 0) {
      quantity.innerText = +quantity.innerText - 1;
      +orderList.filter((item) => item.id == targetId)[0].quantity--;
    }

    bill(orderList);
    calculateTotalPrice(orderList);

    const productInBill = document.querySelector(`#tr${targetId}`);
    if (
      e.target.id.slice(0, 2) === "de" &&
      quantity.innerText == 0 &&
      productInBill
    ) {
      // when productInBill remove once, it's value will be null and
      // productInBill.remove() won't work, so we declare if productInBill
      // is not null, then we can use remove()
      product.style.backgroundColor = "#ffff";
      productInBill.remove();
      orderList.splice(orderList.indexOf(targetId), 1);
    }
  });
}

function bill(orders) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  orders.forEach((item) => {
    const tr = document.createElement("tr");
    const tdN = document.createElement("td");
    const tdP = document.createElement("td");
    const tdQ = document.createElement("td");
    const tdT = document.createElement("td");

    tdN.innerText = item.name;
    tdP.innerText = (+item.price).toFixed(2);
    tdQ.innerText = item.quantity;
    tdT.innerText = (item.price * item.quantity).toFixed(2);

    tr.id = `tr${item.id}`;
    tdP.className = "TCenter";
    tdQ.className = "TCenter";
    tdT.className = "TCenter";

    tr.append(tdN, tdP, tdQ, tdT);
    tbody.append(tr);
  });
}

let finalPrice;
function calculateTotalPrice(orders) {
  const final = document.querySelector(".finalPrice");
  let totalPrice = 0;
  orders.forEach((item) => {
    totalPrice += +item.price * +item.quantity;
  });
  final.innerText = `IRR${totalPrice.toFixed(2)}`;
  finalPrice = totalPrice.toFixed(2);
}

submit_btn.addEventListener("click", () => {
  let data = {
    api_token: "e1cfd0f9b4a1f8f5d200749b797d43d5e07c0ada",
    customerID: "1",
    products: orderList,
    finalTotal: finalPrice,
  };
  console.log(finalPrice);
  // fetch("https://cleancloudapp.com/api/addOrder", {
  //   method: "POST",
  //   headers: "application/json",
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));
});
