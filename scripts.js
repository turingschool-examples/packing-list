let body = document.querySelector('body');
let modal = document.querySelector('#form-modal');
let buttonClose = document.querySelector('#form-close');
let buttonOpen = document.querySelector('#button');

buttonOpen.addEventListener('click', toggleModal);
buttonClose.addEventListener('click', hideModal);

function toggleModal() {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');
}

function hideModal() {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
}