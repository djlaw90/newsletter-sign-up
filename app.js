const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function (event) {
    if (!emailInput.checkValidity()) {
      event.preventDefault();
      errorMessage.classList.remove('hide');
      emailInput.classList.add('error');
    } else {
      errorMessage.classList.add('hide');
      emailInput.classList.remove('error');
    }
  });