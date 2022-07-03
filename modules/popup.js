class popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  _getTemplate() {
    const isPopup = document
      .querySelector('profile-popup')
      .content.cloneNode(true);
    return isPopup;
  }

  open() {
    this._popup = this._getTemplate();
    this._popup.classList.add('popup_show');
  }
  close() {
    this._popup = this._getTemplate();
  }
  setEventListeners() {
    this._popup = this._getTemplate();
  }
}
