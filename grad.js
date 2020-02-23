let gradient = document.querySelector("#gradient");
let color = document.querySelector("#color");
let color2 = document.querySelector("#color2");
let inputs = document.querySelectorAll("input");


for (let i = 0; i < inputs.length; i++) {
  const element = inputs[i];
  element.addEventListener("input", () => draw());
}

function draw() {
  let clr =
    "linear-gradient(" +
  color.value +
    ", " +
    color2.value +
    ")";
  gradient.style.background = clr;
}




  
