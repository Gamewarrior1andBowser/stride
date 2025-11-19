const AeroFlow = ["Stride AeroFlow Running Shoe", "$129.99", "The Stride AeroFlow is engineered for comfort, speed, and durability. Featuring breathable mesh fabric, ultra-light cushioning, and a supportive sole — perfect for running, training, or everyday wear. It fits naturally around your foot, giving you a light and comfortable feel from the moment you put it on. The mesh design allows plenty of airflow, so your feet stay cool and dry even during long runs or workouts. It’s built to support you through any activity without feeling heavy.", "../media/shoe.jpg"];
let item = "";
const txt1 = document.getElementById("product-name");
const txt2 = document.getElementById("product-price");
const txt3 = document.getElementById("product-description");
const img = document.getElementById("product-img");


if (item == "") {
  txt1.value = product[0];
  txt2.value = product[1];
  txt3.value = product[2];
  img.value = product[3];
}


