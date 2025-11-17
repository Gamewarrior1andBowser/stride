//const brandName = ["text", "img", "img", "img"];
let brand = "";
const login = document.getElementById("login");
const popup = document.getElementById("popup");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const text = document.getElementById("text");


if (brand == "") {
  text.value = brandName[0];
  img1.value = brandName[1];
  img2.value = brandName[2];
  img3.value = brandName[3];
}


popup.addEventListener('click', function() {
  profile.classList.toggle('visible');
})

login.addEventListener('click', function() {
  profile.classList.toggle('visible');
})