let editButton = document.querySelector('.edit-button');
let popup = document.querySelector('.popup');

function showPopup() {
  popup.classList.add('popup_show');
  console.log('Popup is show');
}

editButton.addEventListener('click', showPopup);

let closeButton = popup.querySelector('.popup__window_close');

function closePopup() {
  popup.classList.remove('popup_show');
  console.log('Popup is closed');
}

closeButton.addEventListener('click', closePopup);

// let likeButton = document.querySelectorAll('element__footer_like');

// function likeOk() {
//   likeButton.setAttribute('src', './images/like-on.svg');
// }

// likeButton.addEventListener('click', likeOk);

let submitButton = popup.querySelector('.popup__window_submit');

function setAuthorInfo() {
  let authorTitle = document.querySelector('.profile__info_author-text');
  let authorTitleInput = popup.querySelector('.popup__window_form_author');
  let authorSubtitle = document.querySelector('.profile__info_about-author');
  let authorSubtitleInput = document.querySelector(
    '.popup__window_form_about-author'
  );

  if (
    authorTitleInput.value.length !== 0 &&
    authorSubtitleInput.value.length !== 0
  ) {
    authorTitle.innerHTML = authorTitleInput.value;
    authorSubtitle.innerHTML = authorSubtitleInput.value;
    closePopup();
    authorTitleInput.value = '';
    authorSubtitleInput.value = '';
  } else {
    alert('Заполните данные профиля!');
  }
}

submitButton.addEventListener('click', setAuthorInfo);
