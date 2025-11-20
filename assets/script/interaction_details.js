const AeroFlow = ["Stride AeroFlow Running Shoe", "$129.99", "The Stride AeroFlow marks a hige milestone for our team - The first-ever shoe designed and produced in-house by Stride. After years of curating the best footwear from top brands, we wanted to create something that truly represents who we are, fast, clean, reliable and built for everyone.", "The Stride AeroFlow is engineered for comfort, speed, and durability. Featuring breathable mesh fabric, ultra-light cushioning, and a supportive sole — perfect for running, training, or everyday wear. It fits naturally around your foot, giving you a light and comfortable feel from the moment you put it on. The mesh design allows plenty of airflow, so your feet stay cool and dry even during long runs or workouts. It’s built to support you through any activity without feeling heavy.", "./assets/media/stride-shoe.png"];
const alt = ["Air Force 1 '07", "$120", "A timeless classic that blends everyday comfort with iconic street style.", "The Nike Air Force 1 '07 takes everything people love about the original and updates it with modern comfort and premium details. Built with durable leather and the signature Air cushioning, it delivers a supportive, smooth ride all day long.", "./assets/media/air-force-1-07.avif"];

const product = [AeroFlow, alt];
let index = 0;
const txt1 = document.querySelector(".product-name");
const txt2 = document.querySelector(".product-price");
const txt4 = document.querySelector(".product-snippet");
const txt3 = document.querySelector(".product-description");
const img = document.querySelector(".shoe-prod-img");
const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");
const indexDisplay = document.querySelector(".index");
const productDisplay = document.querySelector(".maximum");

function switchProduct() {
  indexDisplay.innerText = String(index + 1);
  txt1.innerText = product[index][0];
  txt2.innerText = product[index][1];
  txt3.innerText = product[index][2];
  txt4.innerText = product[index][3];
  img.src = product[index][4];
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
