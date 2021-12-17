const form2 = document.querySelector('#submit_form');
// const fullName = form2.elements[0];
// const emailAdress = form2.elements[1];
// const msg = form2.elements[2];

/// /// Store data in object

form2.addEventListener('submit', (e) => {
  e.preventDefault();
    const obj = {
    fullname: document.querySelector('#name').value,
    EmailAdress: document.querySelector('#email').value,
    message: document.querySelector('#msg').value,
  };

  localStorage.setItem('DATA', JSON.stringify(obj));
});

/// // store data in locale storage

// let name = document.querySelectorAll('.input1');

// localStorage.setItem('DATA', JSON.stringify(dataForm));

// name.forEach( input => {
//     input.addEventListener('change',() => {

//     })
// })

/// //// Get data

// let getData = localStorage.getItem('DATA');

// let get_data = JSON.parse(getData);

// form2.addEventListener('load', (e) => {
//     e.target.value = get_data.fullname;
//     e.target.value = get_data.EmailAdress;
//     e.target.value = get_data.message;
// }
// );
