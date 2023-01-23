import { myHeader, myFooter, myForm } from "../components/helper.js";

myHeader();
myFooter();

const bars = document.querySelector(".bars");
const sidebarMenu = document.querySelector("#sidebar-menu ul");
const main = document.querySelector("main");
let flag = false;

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

const year = document.querySelector("#year");
const d = new Date();
year.innerHTML = d.getFullYear();
