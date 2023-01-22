const header = document.querySelector("header");
const bars = document.querySelector(".bars");
const rightSide = document.querySelector(".rightSide");
const sidebarMenu = document.querySelector("#sidebar-menu ul");
const main = document.querySelector("main");
let flag = false;

let userName = sessionStorage.getItem("userName");

if (!userName) {
  rightSide.innerHTML = `<a href="sign-up.html" class="links">Sign up</a><span> /
                    </span><a href="src/login.html" class="links login">Login</a>`;
  bars.insertAdjacentElement(
    "afterend",
    `<a href="src/sign-up.html" class="links signUp-btn">Sign up</a>`
  );
} else {
  const a = document.createElement("a");
  a.href = "src/profile.html";
  a.className = "links signUp-btn";
  a.innerHTML = `<i class="fa-regular fa-user"></i> ${userName}`;
  rightSide.innerHTML = `<a href="src/profile.html" class="links"><i class="fa-regular fa-user"></i> ${userName}</a>`;
  bars.insertAdjacentElement("afterend", a);
}

bars.addEventListener("click", () => {
  if (!flag) {
    sidebarMenu.style.display = "block";
    flag = true;
    setTimeout(() => {
      sidebarMenu.style.opacity = "1";
    }, 20);
  } else if (flag) {
    sidebarMenu.style.display = "none";
    flag = false;
    sidebarMenu.style.opacity = "0";
  }
});
