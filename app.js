const form = document.getElementById('newsletter-form');
const thanksHeader = document.getElementById('thanks-header');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');
const mainCard = document.querySelector('.main-card');
const successCard = document.querySelector('.success-card');
const dismissButton = document.getElementById('dismiss-button');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  const domainPattern = /\.(com|net|org|edu|gov|io|co)$/i;

  if (!emailInput.checkValidity() || !domainPattern.test(emailValue)) {
    errorMessage.classList.remove('hide');
    emailInput.classList.add('error');
    return;
  }

  if (!emailInput.checkValidity()) {
    errorMessage.classList.remove('hide');
    emailInput.classList.add('error');
    return;
  }

  errorMessage.classList.add('hide');
  emailInput.classList.remove('error');

  mainCard.classList.add('hide');
  successCard.classList.remove('hide');

  // Remove previous message if any
  const oldSuccessMessage = thanksHeader.nextElementSibling;
  if (oldSuccessMessage && oldSuccessMessage.tagName === 'P') {
    oldSuccessMessage.remove();
  }

  // Insert personalized success message
  const successHTML = `
    <p>A confirmation email has been sent to <span class="email-success"><b>${emailValue}</b></span>.
    Please open it and click the button inside to confirm your subscription.</p>
  `;
  thanksHeader.insertAdjacentHTML('afterend', successHTML);
});

// Only add dismiss listener once
dismissButton.addEventListener('click', function () {
  successCard.classList.add('hide');
  mainCard.classList.remove('hide');
});
