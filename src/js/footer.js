const BASE_URL = 'https://portfolio-js.b.goit.study/api/request';
const form = document.querySelector('.form');
const modalTitle = document.querySelector('.modal-title');
const modalMessage = document.querySelector('.modal-text');
const inputEmail = document.getElementById('email');
const inputComments = document.getElementById('comments');
const modal = document.querySelector('.backdrop');
const closeButton = document.querySelector('.modal-close-btn');
const succes = document.querySelector('.succes');
const invalid = document.querySelector('.invalid');
// import pathErrorIcon from '/img/icons.svg#error';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

// entering data into input

inputEmail.addEventListener('input', () => {
  const maxLength = 30;
  if (inputEmail.value.length > maxLength) {
    inputEmail.value = inputEmail.value.substring(0, maxLength) + '...';
  }
});

inputComments.addEventListener('input', () => {
  const maxLength = 30;
  if (inputComments.value.length > maxLength) {
    inputComments.value = inputComments.value.substring(0, maxLength) + '...';
  }
});

closeButton.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.remove('is-open');
}

modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

window.onkeydown = function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
};

const emailInput = document.getElementById('email');

emailInput.addEventListener('blur', function () {
  const pattern = new RegExp(inputEmail.getAttribute('pattern'));
  const value = inputEmail.value;
  if (inputEmail.value === '') {
    invalid.classList.add('invalid-is-hidden');
    succes.classList.add('succes-is-hidden');
    inputEmail.classList.remove('border-bottom');
    inputEmail.classList.remove('border-bottom-succes');
  } else if (pattern.test(value)) {
    inputEmail.classList.add('border-bottom-succes');
    succes.classList.remove('succes-is-hidden');
    invalid.classList.add('invalid-is-hidden');
  } else {
    succes.classList.add('succes-is-hidden');
    invalid.classList.remove('invalid-is-hidden');
    inputEmail.classList.add('border-bottom');
  }
});

// izitoast

function showErrorToast(message) {
  iziToast.show({
    title: 'Attention!',
    titleColor: 'black',
    titleSize: '20px',
    titleLineHeight: '150%',
    message: message,
    messageSize: '18px',
    messageLineHeight: '150%',
    theme: 'light',
    iconColor: 'white',
    position: 'center',
    timeout: 2000,
    backgroundColor: '#ed3b44',
    titleColor: '#fafafa',
    messageColor: 'rgba(250, 250, 250, 0.6)',
    closeOnEscape: true,
    titleLineHeight: '120%',
  });
}

// API request

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(e) {
  e.preventDefault();

  const { email, comments } = e.target.elements;

  if (!email.value.trim()) {
    showErrorToast('Email can not be empty');
    return;
  }

  const data = {
    email: email.value.trim(),
    comment: comments.value.trim() || ' ',
  };

  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      modal.classList.add('is-open');
      modalTitle.innerHTML = data.title;
      modalMessage.innerHTML = data.message;
    })
    .catch(error => {
      showErrorToast(error.message);
    });
}
