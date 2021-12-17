const form2 = document.querySelector('#submit_form');
const x = document.querySelector('#name');
const email = document.querySelector('#email');
const messg = document.querySelector('#msg');

form2.addEventListener('change', () => {
  const obj = {
    fullname: document.querySelector('#name').value,
    EmailAdress: document.querySelector('#email').value,
    message: document.querySelector('#msg').value,
  };

  localStorage.setItem('DATA', JSON.stringify(obj));
});

const getData = localStorage.getItem('DATA');
const getDataValue = JSON.parse(getData);

window.addEventListener('load', () => {
  if (localStorage.getItem('DATA')) {
    x.value = getDataValue.fullname;
    email.value = getDataValue.EmailAdress;
    messg.value = getDataValue.message;
  }
});
