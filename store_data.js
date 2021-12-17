

const form2 = document.querySelector('#submit_form');
const fullName = form2.elements[0];
const emailAdress = form2.elements[1];
const msg = form2.elements[2];

////// Store data in object

let dataForm = {
    fullname: document.querySelector('#name').value,
    EmailAdress: document.querySelector('#email').value,
    message: document.querySelector('#msg').value
};

///// store data in locale storage

localStorage.setItem('DATA', JSON.stringify(dataForm));


