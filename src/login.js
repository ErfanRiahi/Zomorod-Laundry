const customerEmail = document.querySelector("#customerEmail");
const customerPassword = document.querySelector("#customerPassword");
const loginBtn = document.querySelector("#login");
const profile = document.querySelector(".rightSide");
const mobileProfile = document.querySelector(".signUp-btn");

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
    })
    .catch((error) => console.log("Error", error));
});

function setProfile(data) {
  const userName = data.Name;
  const userId = data.ID;
  sessionStorage.setItem("userName", userName);
  sessionStorage.setItem("userId", userId);
  profile.innerHTML = `<a href="profile.html" class="links"><i class="fa-regular fa-user"></i> ${userName}</a>`;
  profile.style.color = "white";
  mobileProfile.innerHTML = `<i class="fa-regular fa-user"></i> ${userName}`;
  mobileProfile.href = "profile.html";
  mobileProfile.style.color = "white";
  location.href = "profile.html";
}
