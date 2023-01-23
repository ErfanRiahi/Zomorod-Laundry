const resetBtn = document.querySelector(".signUp button");
const customerEmail = document.querySelector("#customerEmail");

resetBtn.addEventListener("click", () => {
  if (!customerEmail.value) {
    alert("Please enter your password");
    return;
  }

  fetch("https://cleancloudapp.com/api/passwordCustomer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => console.log("Error", error));

  customerEmail.value = "";
  alert("We send you an email");
  location.href = "login.html";
});
