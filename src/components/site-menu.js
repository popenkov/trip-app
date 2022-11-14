import { createElement } from "./../utils.js";

export default class SiteMenu {
  constructor(values) {
    this._values = values;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    if (this._element) {
      this._element = null;
    }
  }

  getTemplate() {
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${this._values
      .map(
        (value) =>
          `<a class="trip-tabs__btn  ${
            value.active ? `trip-tabs__btn--active` : ``
          }" href="#">${value.title}</a>`
      )
      .join(``)}
    </nav>`;
  }
}
