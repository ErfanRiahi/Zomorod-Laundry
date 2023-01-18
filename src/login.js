const customerEmail = document.querySelector("#customerEmail");
const customerPassword = document.querySelector("#customerPassword");
const loginBtn = document.querySelector("#login");
const profile = document.querySelector(".rightSide");
const Login = document.querySelector("h1");

Login.addEventListener("click", () => {
  profile.innerHTML = '<i class="fa-regular fa-user"></i> ';
});

loginBtn.addEventListener("click", () => {
  if (!customerEmail.value || !customerPassword.value) {
    alert("You should complete the field with star");
    return;
  }

  let data = {
    api_token: "e1cfd0f9b4a1f8f5d200749b797d43d5e07c0ada",
    customerEmail: customerEmail.value,
    customerPassword: customerPassword.value,
  };

  fetch("https://cleancloudapp.com/api/loginCustomer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      getUser(data.cid);
      // console.log("Success", data);
    })
    .catch((error) => console.log("Error", error));
});

const updateInfo = document.querySelector("#update");
updateInfo.addEventListener("click", () => {
  var request = new XMLHttpRequest();

  request.open("POST", "https://cleancloudapp.com/api/updateCustomer");

  request.setRequestHeader("Content-Type", "application/json");

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log("Status:", this.status);
      console.log("Headers:", this.getAllResponseHeaders());
      console.log("Body:", this.responseText);
    }
  };

  var body = {
    api_token: "e1cfd0f9b4a1f8f5d200749b797d43d5e07c0ada",
    customerID: "2",
    customerPassword: "127317",
  };

  request.send(JSON.stringify(body));
});

const user = document.querySelector("#user");
const getUser = async (cid) => {
  try {
    let body = {
      api_token: "e1cfd0f9b4a1f8f5d200749b797d43d5e07c0ada",
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
    setProfile(data);
  } catch (error) {
    alert("something went wrong\n" + error);
  }
};

const productBtn = document.querySelector("#product");
productBtn.addEventListener("click", () => {
  let data = {
    api_token: "e1cfd0f9b4a1f8f5d200749b797d43d5e07c0ada",
  };
  fetch("https://cleancloudapp.com/api/getProducts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success", data))
    .catch((err) => console.log("Error", err));
});

const getOrder = document.querySelector("#getOrder");
getOrder.addEventListener("click", () => {
  let data = {
    api_token: "e1cfd0f9b4a1f8f5d200749b797d43d5e07c0ada",
    customerID: "1",
  };

  fetch("https://cleancloudapp.com/api/getOrders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success", data))
    .catch((err) => console.log("Error", err));
});

function setProfile(data) {
  const name = data.Name;
  profile.innerHTML = `<i class="fa-regular fa-user"></i> ${name}`;
  profile.style.color = "white";
  // location.href = "index.html";
}
