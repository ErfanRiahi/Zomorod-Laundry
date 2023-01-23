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
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => console.log("Error", error));

  location.href = "login.html";
});

fetch(
  "https://api.ipgeolocation.io/ipgeo?apiKey=38f2a274c2c54cf099ede910260a9b92"
)
  .then((response) => response.json())
  .then((data) => setCallingCode(data))
  .catch((error) => console.log("Error", error));

function setCallingCode(data) {
  const callCode = document.querySelector("input[type='tel'");
  callCode.value = data.calling_code;
}
