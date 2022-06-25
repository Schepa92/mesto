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

const profileButton = document.querySelector('.edit-button');
const profilePopup = document.querySelector('.profile-popup');
const addButton = document.querySelector('.add-button');
const addPopup = document.querySelector('.add-popup');

function showProfilePopup() {
  profilePopup.classList.add('profile-popup_show');
  authorTitleInput.value = authorTitle.textContent;
  authorSubtitleInput.value = authorSubtitle.textContent;
}

function showAddPopup() {
  addPopup.classList.add('add-popup_show');
}

profileButton.addEventListener('click', showProfilePopup);
addButton.addEventListener('click', showAddPopup);

/////////////////////////////////////////////////////////////////////////////////////

const closeButtonProfilePopup = profilePopup.querySelector(
  '.profile-popup__window_close'
);
const closeButtonAddPopup = addPopup.querySelector('.add-popup__window_close');

function closeProfilePopup() {
  profilePopup.classList.remove('profile-popup_show');
}

function closeAddPopup() {
  addPopup.classList.remove('add-popup_show');
}

closeButtonProfilePopup.addEventListener('click', closeProfilePopup);
closeButtonAddPopup.addEventListener('click', closeAddPopup);

/////////////////////////////////////////////////////////////////////////////////////

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
    closeProfilePopup();
    authorTitleInput.value = '';
    authorSubtitleInput.value = '';
  } else {
    alert('Заполните данные профиля!');
  }
}

submitProfileButton.addEventListener('click', setAuthorInfo);

/////////////////////////////////////////////////////////////////////////////////////

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

    elementTitleInput.value = '';
    elementLinkInput.value = '';
    closeAddPopup();
    createItemElement(0);
  } else {
    alert('Введите информацию!');
  }
}

submitAddButton.addEventListener('click', addItemElement);

/////////////////////////////////////////////////////////////////////////////////////

const elementsBlock = document.querySelector('.elements');

const initialCardsElement = [];

function createItemElement(index) {
  const nameImage = initialCards[index].name;
  const linkImage = initialCards[index].link;
  const itemElement = document.createElement('div');
  itemElement.classList.add('element');

  const elementImage = document.createElement('img');
  elementImage.classList.add('element__image');
  elementImage.setAttribute('src', `${linkImage}`);

  const elementFooter = document.createElement('div');
  elementFooter.classList.add('element__footer');

  const elementFooterTitle = document.createElement('h4');
  elementFooterTitle.classList.add('element__footer_title');
  elementFooterTitle.textContent = nameImage;

  const elementFooterLike = document.createElement('img');
  elementFooterLike.setAttribute('src', './images/like.svg');
  elementFooterLike.classList.add('element__footer_like');

  elementFooter.append(elementFooterTitle, elementFooterLike);
  itemElement.append(elementImage, elementFooter);
  elementsBlock.prepend(itemElement);
  initialCardsElement[index] = itemElement;
  return index;
}
rewrewrwerewr;

function addElementStartPage() {
  for (let i = 0; i <= initialCards.length; i++) {
    createItemElement(i);

    elementsBlock.append(initialCardsElement[i]);
  }
}

/////////////////////////////////////////////////////////////////////////////////////

elementsBlock.addEventListener('click', (evt) => {
  console.log('click!');
  if (evt.target.classList.contains('element__footer_like')) {
    const index = [
      ...elementsBlock.querySelectorAll('.element__footer_like'),
    ].indexOf(evt.target);
    const countLike = elementsBlock.querySelectorAll('.element__footer_like')[
      index
    ];
    countLike.classList.toggle('element__footer_like-on');
  }
});

/////////////////////////////////////////////////////////////////////////////////////

// elementsBlock.addEventListener('click', (evt) => {
//   console.log('click!');
//   if (evt.target.classList.contains('element')) {
//     const index = [...elementsBlock.querySelectorAll('.element')].indexOf(
//       evt.target
//     );
//     const countLike = elementsBlock.querySelectorAll('.element__footer_like')[
//       index
//     ];
//     countLike.classList.toggle('element__footer_like-on');
//   }
// });

addElementStartPage();
