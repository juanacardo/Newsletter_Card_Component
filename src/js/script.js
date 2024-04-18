
const form = document.querySelector('.subscribe-form__form');
const successMessage = document.querySelector('.subscribe-form__success-message');

// create the pristine instance
const pristine = new Pristine(form, {
  classTo: 'subscribe-form__group',
  errorTextParent: 'subscribe-form__group',
  errorTextClass: 'subscribe-form__error-message',
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    form.submit();
        form.reset();
    successMessage.classList.add('show');
  }
});
