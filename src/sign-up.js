const customerName = document.querySelector("#customerName");
const customerTel = document.querySelector("#customerTel");
const customerAddress = document.querySelector("#customerAddress");
const customerPassword = document.querySelector("#customerPassword");
const signUpBtn = document.querySelector("#signUp");

signUpBtn.addEventListener("click", () => {
  if (!customerName.value || !customerTel.value || !customerEmail.value) {
    alert("You should complete the field with star");
    return;
  }

  let data = {
    api_token: "e1cfd0f9b4a1f8f5d200749b797d43d5e07c0ada",
    customerName: customerName.value,
    customerTel: customerTel.value,
    customerEmail: customerEmail.value,
    customerAddress: customerAddress.value,
    customerPassword: customerPassword.value,
  };

  fetch("https://cleancloudapp.com/api/addCustomer", {
    method: "POST",
    headers: "application/json",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success", data))
    .catch((error) => console.log("Error", error));

  location.href = "home.html";
});
