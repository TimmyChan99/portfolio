const form = document.querySelector('#submit_form');
const emailAdrdress = document.getElementById('email');

const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
const msgError = document.querySelector('#message_error');
const msgSuccess = document.querySelector('#message_success');

form.addEventListener('submit', (e) => {
  if (!emailAdrdress.value.match(emailPattern)) {
    e.preventDefault();
    msgError.classList.toggle('error');

    setTimeout(() => { msgError.classList.toggle('error'); }, 3000);
  } else {
    msgSuccess.classList.toggle('success');

    setTimeout(() => { form.submit(); }, 2000);
  }
});
