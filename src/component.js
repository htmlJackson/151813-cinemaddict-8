import Util from './util.js';
class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }

    this._element = null;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  get element() {
    return this._element;
  }

  render(container) {
    if (this._element) {
      container.removeChild(this._element);
      this._element = null;
    }

    this._element = Util.createDivElement(this.template);
    container.appendChild(this._element);

    this.bind();
  }

  unrender() {
    this._element = null;
  }
}

export {Component as default};
