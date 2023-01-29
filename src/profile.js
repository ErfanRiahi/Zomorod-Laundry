let userName = sessionStorage.getItem("userName");
let userId = sessionStorage.getItem("userId");
const user_name = document.querySelector("#nameOfUser");
const userOrder = document.querySelector("#userOrder");
const logOutBtn = document.createElement("button");
const editProfile = document.createElement("button");
let userData;
let apiToken = "f7292852be387f3b46ad34d4023b77131e2755c8";

const getUser = async (cid) => {
  try {
    let body = {
      api_token: apiToken,
      customerID: `${cid}`,
    };

    const res = await fetch("https://cleancloudapp.com/api/getCustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    userData = data;
    createProfile(data);
  } catch (error) {
    alert("something went wrong\n" + error);
  }
};

getUser(userId);
function createProfile(data) {
  const userInfo = document.querySelector("#userInfo");
  const user_name = document.createElement("h1");
  const user_id = document.createElement("h2");
  const user_email = document.createElement("h3");
  const user_tel = document.createElement("h3");
  const user_address = document.createElement("h3");

  user_name.innerHTML = `<i class="fa-solid fa-user"></i> ${data.Name}`;
  user_id.innerHTML = `id: ${data.ID}`;
  user_email.innerHTML = `Email: ${data.Email}`;
  user_tel.innerHTML = `Tel: ${data.Tel}`;
  user_address.innerHTML = `Address: ${data.Address}`;
  logOutBtn.innerHTML = "Log out";
  editProfile.innerHTML = "Edit Profile";

  logOutBtn.className = "btn";
  editProfile.className = "btn";

  userInfo.append(
    user_name,
    user_id,
    user_email,
    user_tel,
    user_address,
    logOutBtn,
    editProfile
  );
}

logOutBtn.addEventListener("click", () => {
  userName = "";
  userId = 0;
  sessionStorage.setItem("userName", userName);
  sessionStorage.setItem("userId", userId);
  location.href = "login.html";
});

const getOrder = async (cid) => {
  try {
    let body = {
      api_token: apiToken,
      customerID: `${cid}`,
    };
    const res = await fetch("https://cleancloudapp.com/api/getOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    showOrders(data.Orders);
  } catch (err) {
    alert("something went wrong\n" + err);
  }
};

getOrder(userId);
function showOrders(data) {
  const tbody = document.querySelector("tbody");
  data.forEach((item) => {
    const tr = document.createElement("tr");
    const productId = document.createElement("td");
    const productSummary = document.createElement("td");
    const total = document.createElement("td");
    const deleteProduct = document.createElement("td");
    const deleteBtn = document.createElement("button");

    tbody.style.textAlign = "center";
    productId.innerHTML = item.id;
    productSummary.innerHTML = item.summary;
    total.innerHTML = item.total;
    deleteBtn.innerHTML = `Delete`;
    deleteBtn.id = item.id;

    deleteProduct.append(deleteBtn);
    tr.append(productId, productSummary, total, deleteProduct);
    tbody.append(tr);
  });
  tbody.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON") {
      deleteOrder(e.target.id);
    }
  });
}

const deleteOrder = async (orderId) => {
  try {
    let data = {
      api_token: apiToken,
      orderID: `${orderId}`,
    };
    const res = await fetch("https://cleancloudapp.com/api/deleteOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    location.href = "profile.html";
  } catch (err) {
    alert("something went wrong\n" + err);
  }
};

const editProfileDiv = document.querySelector("#editProfileDiv");
const profilePage = document.querySelector("#container");
const okBtn = document.querySelector("#okBtn");

editProfileDiv.style.display = "none";
editProfile.addEventListener("click", () => {
  profilePage.style.display = "none";
  editProfileDiv.style.display = "block";

  const cName = document.querySelector("#customerName");
  const cTel = document.querySelector("#customerTel");
  const cEmail = document.querySelector("#customerEmail");
  const cPass = document.querySelector("#customerPassword");
  const cAddress = document.querySelector("#customerAddress");

  cName.placeholder = userData.Name;
  cTel.placeholder = userData.Tel;
  cEmail.placeholder = userData.Email;
  cAddress.placeholder = userData.Address;

  okBtn.addEventListener("click", () => {
    let newCustomerName, newCustomerTel, newCustomerEmail, newCustomerAddress;
    if (!cName.value) newCustomerName = cName.placeholder;
    else newCustomerName = cName.value;
    if (!cTel.value) newCustomerTel = cTel.placeholder;
    else newCustomerTel = cTel.value;
    if (!cEmail.value) newCustomerEmail = cEmail.placeholder;
    else newCustomerEmail = cEmail.value;
    if (!cAddress.value) newCustomerAddress = cAddress.placeholder;
    else newCustomerAddress = cAddress.value;

    try {
      let data = {
        api_token: apiToken,
        customerID: `${userId}`,
        customerName: newCustomerName,
        customerTel: newCustomerTel,
        customerEmail: newCustomerEmail,
        customerAddress: newCustomerAddress,
      };
      const res = fetch("https://cleancloudapp.com/api/updateCustomer", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      location.href = "profile.html";
    } catch (err) {
      alert("something went wrong\n" + err);
    }
  });
});
