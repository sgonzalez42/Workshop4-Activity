const title = document.getElementById("title");
const message = document.getElementById("message");
const output = document.getElementById("output");
const nameInput = document.getElementById("nameInput");

const changeTextBtn = document.getElementById("changeTextBtn");
const greetBtn = document.getElementById("greetBtn");
const colorBtn = document.getElementById("colorBtn");

// Starter example
changeTextBtn.addEventListener("click", () => {
  message.textContent = "The text has been changed!";
});


colorBtn.addEventListener("click", () => {
    colorBtn.style.color = "red";
});
  
greetBtn.addEventListener("click", () => {
    greetBtn.style.backgroundColor = "blue";
  });

