const profilePopupForm = document.forms.profilePopup__form;
const addPopupForm = document.forms.addPopup__form;

const author = profilePopupForm.elements.author;
const aboutAuthor = profilePopupForm.elements.aboutAuthor;
const saveSubmit = profilePopupForm.elements.save;

const title = addPopupForm.elements.title;
const link = addPopupForm.elements.link;
const addSubmit = addPopupForm.elements.add;

// const submit = document.forms.elements.

// profilePopupForm.addEventListener('input', (evt) => {
//   console.log(evt.target);
// });

// profilePopupForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   console.log(evt.target);
// });

profilePopupForm.addEventListener('input', (evt) => {
  saveSubmit.classList.add('popup__button_disabled');
  if (!evt.target.validity.valid) {
    evt.target.classList.add('popup__input_type_error');
    saveSubmit.classList.add('popup__button_disabled');
  } else {
    evt.target.classList.remove('popup__input_type_error');
    saveSubmit.classList.remove('popup__button_disabled');
    saveSubmit.removeAttribute('disabled');
  }
});

// function enableValidation()

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible',
// });

// evt.preventDefault();

// export { author, aboutAuthor, saveSubmit, title, link, addSubmit };
