const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

/////////////////////////////////////////////////////////////////////////////////////

const elementsBlock = document.querySelector('.elements');
const profileButton = document.querySelector('.edit-button');
const profilePopup = document.querySelector('.profile-popup');
const addButton = document.querySelector('.add-button');
const addPopup = document.querySelector('.add-popup');
const picPopup = document.querySelector('.pic-popup');

// ОБЪЯВЛЯЕМ ФУНКЦИИ ОТКРЫТИЯ POPUP'S

function showProfilePopup() {
  profilePopup.classList.add('popup_show');
  authorTitleInput.value = authorTitle.textContent;
  authorSubtitleInput.value = authorSubtitle.textContent;
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
  if (evt.target.classList.contains('popup__close-icon')) {
    closePopup();
  }
});

/////////////////////////////////////////////////////////////////////////////////////
// ЗАСТАВЛЯЕМ РАБОТАТЬ ОКНО РЕДАКТИРОВАНИЯ ПРОФИЛЯ

const submitProfileButton = profilePopup.querySelector(
  '.profile-popup__window_submit'
);

const authorTitle = document.querySelector('.profile__info_author-text');
const authorTitleInput = profilePopup.querySelector(
  '.profile-popup__window_form_author'
);
const authorSubtitle = document.querySelector('.profile__info_about-author');
const authorSubtitleInput = document.querySelector(
  '.profile-popup__window_form_about-author'
);

function setAuthorInfo() {
  if (
    authorTitleInput.value.length !== 0 &&
    authorSubtitleInput.value.length !== 0
  ) {
    authorTitle.textContent = authorTitleInput.value;
    authorSubtitle.textContent = authorSubtitleInput.value;
    closePopup();
    authorTitleInput.value = '';
    authorSubtitleInput.value = '';
  } else {
    alert('Заполните данные профиля!');
  }
}

submitProfileButton.addEventListener('click', setAuthorInfo);

/////////////////////////////////////////////////////////////////////////////////////
// ЗАСТАВЛЯЕМ РАБОТАТЬ ОКНО ДОБАВЛЕНИЯ ПУБЛИКАЦИИ

const submitAddButton = document.querySelector('.add-popup__window_submit');
const elementTitleInput = document.querySelector(
  '.add-popup__window_form-title'
);
const elementLinkInput = document.querySelector('.add-popup__window_form-link');

function addItemElement() {
  const addedArrayElement = {
    name: `${elementTitleInput.value}`,
    link: `${elementLinkInput.value}`,
  };
  if (
    elementTitleInput.value.length !== 0 &&
    elementLinkInput.value.length !== 0
  ) {
    initialCards.unshift(addedArrayElement);
    initialCardsElement.unshift('');
    console.log(initialCardsElement);
    console.log(initialCards);
    elementTitleInput.value = '';
    elementLinkInput.value = '';
    closePopup();
    createItemElement(0);

    console.log(initialCardsElement);
  } else {
    alert('Введите информацию!');
  }
}

submitAddButton.addEventListener('click', addItemElement);

/////////////////////////////////////////////////////////////////////////////////////
// ФУНКЦИЯ СОЗДАНИЯ ЭЛЕМЕНТА

const initialCardsElement = [];

function createItemElement(index) {
  const nameImage = initialCards[index].name;
  const linkImage = initialCards[index].link;
  const itemElement = document.createElement('div');
  itemElement.classList.add('element');

  const elementImage = document.createElement('img');
  elementImage.classList.add('element__image');
  elementImage.setAttribute('src', `${linkImage}`);

  const elementTrash = document.createElement('img');
  elementTrash.classList.add('element__trash-icon');
  elementTrash.setAttribute('src', './images/trash.svg');

  const elementFooter = document.createElement('div');
  elementFooter.classList.add('element__footer');

  const elementFooterTitle = document.createElement('h4');
  elementFooterTitle.classList.add('element__footer_title');
  elementFooterTitle.textContent = nameImage;

  const elementFooterLike = document.createElement('img');
  elementFooterLike.setAttribute('src', './images/like.svg');
  elementFooterLike.classList.add('element__footer_like');

  elementFooter.append(elementFooterTitle, elementFooterLike);
  itemElement.append(elementImage, elementTrash, elementFooter);
  elementsBlock.prepend(itemElement);
  initialCardsElement[index] = itemElement;
}

function addElementStartPage() {
  for (let i = 0; i <= initialCards.length; i++) {
    createItemElement(i);

    elementsBlock.append(initialCardsElement[i]);
  }
}

/////////////////////////////////////////////////////////////////////////////////////
// ФУНКЦИЯ УДАЛЕНИЯ ЭЛЕМЕНТА

function deleteItemElement() {}

elementsBlock.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__trash-icon')) {
    const index = [
      ...elementsBlock.querySelectorAll('.element__trash-icon'),
    ].indexOf(evt.target);
    initialCardsElement[index].remove();
    initialCardsElement.splice(index, 1);
  }
});

/////////////////////////////////////////////////////////////////////////////////////
// ЛАЙКИ

elementsBlock.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__footer_like')) {
    evt.target.classList.toggle('element__footer_like-on');
  }
});

/////////////////////////////////////////////////////////////////////////////////////
// ВЫЗОВ ФУНКЦИИ НАЧАЛЬНОЙ ОТРИСОВКИ ЭЛЕМЕНТОВ
addElementStartPage();
