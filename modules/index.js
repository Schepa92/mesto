import { initialCards, Card } from './card.js';

/////////////////////////////////////////////////////////////////////////////////////

export const elementsBlock = document.querySelector('.elements');
const profileButton = document.querySelector('.edit-button');
const profilePopup = document.querySelector('.profile-popup');
const addButton = document.querySelector('.add-button');
const addPopup = document.querySelector('.add-popup');
const picPopup = document.querySelector('.pic-popup');

// ОБЪЯВЛЯЕМ ФУНКЦИИ ОТКРЫТИЯ POPUP'S

function showProfilePopup() {
  profilePopup.classList.add('popup_show');
  author.value = authorTitle.textContent;
  aboutAuthor.value = aboutAuthorSubtitle.textContent;
}

function showAddPopup() {
  addPopup.classList.add('popup_show');
}

function showPicPopup() {
  picPopup.classList.add('popup_show');
}

profileButton.addEventListener('click', showProfilePopup);
addButton.addEventListener('click', showAddPopup);

// ВЫЗОВ PIC-POPUP ПО КЛИКУ НА ИЗОБРАЖЕНИЕ

elementsBlock.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__image')) {
    let imageSource = evt.target.getAttribute('src');
    picPopup
      .querySelector('.pic-popup__image')
      .setAttribute('src', imageSource);
    showPicPopup();
  }
});

/////////////////////////////////////////////////////////////////////////////////////
// ОБЪЯВЛЯЕМ ФУНКЦИИ ЗАКРЫТИЯ POPUP'S

function closePopup() {
  profilePopup.classList.remove('popup_show');
  addPopup.classList.remove('popup_show');
  picPopup.classList.remove('popup_show');
}

document.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('popup__close-icon') ||
    evt.target.classList.contains('opacity-background')
  ) {
    closePopup();
  }
});

/////////////////////////////////////////////////////////////////////////////////////
// ЗАСТАВЛЯЕМ РАБОТАТЬ ОКНО РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const profilePopupForm = document.forms.profilePopup__form;
const author = profilePopupForm.elements.author;
const aboutAuthor = profilePopupForm.elements.aboutAuthor;
const saveSubmit = profilePopupForm.elements.save;

const authorTitle = document.querySelector('.profile__info_author-text');
const aboutAuthorSubtitle = document.querySelector(
  '.profile__info_about-author'
);

function setAuthorInfo() {
  authorTitle.textContent = author.value;
  aboutAuthorSubtitle.textContent = aboutAuthor.value;
  author.value = '';
  aboutAuthor.value = '';
  closePopup();
}

saveSubmit.addEventListener('click', setAuthorInfo);

/////////////////////////////////////////////////////////////////////////////////////
// ЗАСТАВЛЯЕМ РАБОТАТЬ ОКНО ДОБАВЛЕНИЯ ПУБЛИКАЦИИ

const addPopupForm = document.forms.addPopup__form;
const title = addPopupForm.elements.title;
const link = addPopupForm.elements.link;
const addSubmit = addPopupForm.elements.add;

function addItemElement() {
  if (title.value.length !== 0 && link.value.length !== 0) {
    const card = new Card(`${title.value}`, `${link.value}`);
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
    title.value = '';
    link.value = '';
    closePopup();
  } else {
    alert('Введите информацию!');
  }
}

addSubmit.addEventListener('click', addItemElement);

/////////////////////////////////////////////////////////////////////////////////////
// ФУНКЦИЯ УДАЛЕНИЯ ЭЛЕМЕНТА

// elementsBlock.addEventListener('click', (evt) => {
//   if (evt.target.classList.contains('element__trash-icon')) {
//     console.log(evt.target);
//     const index = [
//       ...elementsBlock.querySelectorAll('.element__trash-icon'),
//     ].indexOf(evt.target);
//     initialCards.splice(index, 1);

//     // let del = document.querySelector(`elements div:nth-child(${index})`);

//     console.log(evt.currentTarget.querySelectorAll('element'));
//   }
// });

/////////////////////////////////////////////////////////////////////////////////////
// ЛАЙКИ

elementsBlock.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__footer_like')) {
    evt.target.classList.toggle('element__footer_like-on');
  }
});

/////////////////////////////////////////////////////////////////////////////////////
