const login = document.querySelector(".login-dialog");
const button = document.querySelector(".fa-x");
const user = document.querySelector(".fa-circle-user");


user.addEventListener('click', function() {
  login.classList.add('visible');
});

button.addEventListener('click', function() {
  login.classList.remove('visible');
});
