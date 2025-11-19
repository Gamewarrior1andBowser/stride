const AeroFlow = ["Stride AeroFlow Running Shoe", "$129.99", "The Stride AeroFlow is engineered for comfort, speed, and durability. Featuring breathable mesh fabric, ultra-light cushioning, and a supportive sole — perfect for running, training, or everyday wear. It fits naturally around your foot, giving you a light and comfortable feel from the moment you put it on. The mesh design allows plenty of airflow, so your feet stay cool and dry even during long runs or workouts. It’s built to support you through any activity without feeling heavy.", "../media/shoe.jpg"];
const alt = ["(Name)", "(Price)", "(Description)", "../media/stride-logo.png"];

const product = [AeroFlow, alt];
let index = 0;
const txt1 = document.querySelector(".product-name");
const txt2 = document.querySelector(".product-price");
const txt3 = document.querySelector(".product-description");
const img = document.querySelector(".product-img");
const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");
const indexDisplay = document.querySelector(".index");
const productDisplay = document.querySelector(".maximum");

function switchProduct() {
  indexDisplay.value = String(index + 1);
  txt1.value = product[index][0];
  txt2.value = product[index][1];
  txt3.value = product[index][2];
  img.value = product[index][3];
}

productDisplay.innerText = String(product.length);
buttonLeft.addEventListener('click', function() {
  if (index > 0) {
    index -= 1;
  } else {
    index = product.length - 1;
  }
  switchProduct();
});
buttonRight.addEventListener('click', function() {
  if (index < product.length - 1) {
    index += 1;
  } else {
    index = 0;
  }
  switchProduct();
});
