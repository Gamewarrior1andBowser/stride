//const product = ["text", "img", "img", "img"];
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


