const login = document.querySelector(".login-dialog");
const button = document.querySelector(".fa-x");
const user = document.getElementById("modal-open");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const close = document.getElementById("x");

function openModal(){
    console.log('hello');
    modal.classList.remove('hidden');
    modalContent.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    modalContent.classList.add('hidden');
}

user.addEventListener('click', () => {
  openModal();
});

close.addEventListener('click', () => {
  closeModal();
});