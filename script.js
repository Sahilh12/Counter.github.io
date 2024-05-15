const zero = document.querySelector(".zero span");
const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");
const input = document.querySelector("input");
const resetBtn = document.querySelector(".reset-btn");

incrementBtn.addEventListener("click", () => {
  zero.innerText = parseInt(zero.innerText) + parseInt(input.value);
});
decrementBtn.addEventListener("click", () => {
  zero.innerText = parseInt(zero.innerText) - parseInt(input.value);
});
resetBtn.addEventListener("click", () => {
  zero.innerText = 0;
});
