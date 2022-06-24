let editButton = document.querySelector('.edit-button'); // привязываем кнопку editButton к переменной
let profilePopup = document.querySelector('.profile-popup'); // привязываем блок popup к переменной
let addButton = document.querySelector('.add-button');
let addPopup = document.querySelector('.add-popup');

function showProfilePopup() {
  // объявляем функцию показа popup
  profilePopup.classList.add('profile-popup_show'); // добавляем к объекту popup селектор со значением display: block чтобы блок стал видимым
  authorTitleInput.value = authorTitle.textContent; // при открытии окна, в текст по-умолчанию - значение из элемента профиля
  authorSubtitleInput.value = authorSubtitle.textContent;

  console.log('Profile-Popup is show');
}

editButton.addEventListener('click', showProfilePopup); // создаем слушателя на событие "клик по кнопке editButton", который вызывает функцию показать popup

function showAddPopup() {
  addPopup.classList.add('add-popup_show');
  console.log('add-Popup is show');
}

addButton.addEventListener('click', showAddPopup);

/////////////////////////////////

let closeButtonProfilePopup = profilePopup.querySelector(
  '.profile-popup__window_close'
); // привязываем кнопку close (для закрытия popup) к переменной

let closeButtonAddPopup = addPopup.querySelector('.add-popup__window_close'); // привязываем кнопку close (для закрытия popup) к переменной

function closeProfilePopup() {
  // объявляем функцию закрытия popup
  profilePopup.classList.remove('profile-popup_show'); // удаляем у объекта popup селектор со значением display: block чтобы блок стал невидимым, значние становится по-умолчанию display: none;
  console.log('Popup is closed');
}

function closeAddPopup() {
  // объявляем функцию закрытия popup
  addPopup.classList.remove('add-popup_show');
  console.log('Popup is closed');
}

closeButtonProfilePopup.addEventListener('click', closeProfilePopup); // создаем слушателя на событие "клик по кнопке close", который вызывает функцию закрытия popup
closeButtonAddPopup.addEventListener('click', closeAddPopup);
/////////////////////////////

let submitProfileButton = profilePopup.querySelector(
  '.profile-popup__window_submit'
); // привязываем кнопку submitButton (сохранить) к переменной

let authorTitle = document.querySelector('.profile__info_author-text');
let authorTitleInput = profilePopup.querySelector(
  '.profile-popup__window_form_author'
);
let authorSubtitle = document.querySelector('.profile__info_about-author');
let authorSubtitleInput = document.querySelector(
  '.profile-popup__window_form_about-author'
);

function setAuthorInfo() {
  // объявляем функцию, которая введет данные из форм в блок профиля
  if (
    authorTitleInput.value.length !== 0 &&
    authorSubtitleInput.value.length !== 0
  ) {
    authorTitle.textContent = authorTitleInput.value; // добавляем в объект значение (.value) которое ввели в форму
    authorSubtitle.textContent = authorSubtitleInput.value;
    closeProfilePopup(); // закрываем popup
    authorTitleInput.value = ''; // обнуляем поля ввода форм
    authorSubtitleInput.value = '';
  } else {
    alert('Заполните данные профиля!'); // если длина имени или информации равна 0, то выведется окно
  }
}

submitProfileButton.addEventListener('click', setAuthorInfo); // создаем слушателя на событие "клик по кнопке СОХРАНИТЬ", который вызывает функцию ввода данных из форм в блок профиля

let elemensBlock = document.querySelector('.elements');
let submitAddButton = document.querySelector('.add-popup__window_submit');
let elementSubtitle = document.querySelector(
  '.add-popup__window_form-subtitle'
);

function addElement() {
  if (elementSubtitle.value.length !== 0) {
    elemensBlock.insertAdjacentHTML(
      'beforeend',
      `            <div class="element">
  <img src="#" alt="">
  <div class="element__footer">
      <h2 class="element__footer_title">${elementSubtitle.value}</h2>
      <img class="element__footer_like" src="./images/like.svg" alt="like">
  </div>
</div>`
    );
    elementSubtitle.value = '';
    closeAddPopup();
  } else {
    alert('Введите описание!');
  }
}

submitAddButton.addEventListener('click', addElement);

/////////////////////////

const elements = document.querySelector('.elements'); // выбираем блок elements, в котором находятся все кнопки лайк
elements.addEventListener('click', (evt) => {
  // создаем событие на клик
  if (evt.target.classList.contains('element__footer_like')) {
    // target возвращает нам сам div элемента. Если свойства этого элемента содержат в себе класс element__footer_like
    const index = [
      // то мы создаем переменную и присваиваем ей значение: массив включает в себя список всех кнопок блока, расширяем его с помощью ..., находим инжекс элемента по содержимому
      ...elements.querySelectorAll('.element__footer_like'),
    ].indexOf(evt.target);
    const count = elements.querySelectorAll('.element__footer_like')[index]; // обращаемся к определенной кнопке по ее индексу
    count.classList.toggle('element__footer_like-on'); // если класса нет, то добавить, если есть - убрать
  }
});
