let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav-links");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
  console.log(items);
});
prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
