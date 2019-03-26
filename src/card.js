import Component from './component.js';
class Card extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._rating = data.rating;
    this._year = data.year;
    this._duration = data.duration;
    this._genre = data.genre;
    this._picture = data.picture;
    this._description = data.description;
    this._comments = data.comments;
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  _onButtonClick() {
    if (typeof this._onClick === `function`) {
      this._onClick();
    }
  }

  bind() {
    this._element.querySelector(`.film-card__comments`)
      .addEventListener(`click`, this._onButtonClick.bind(this));
  }

  get template() {
    return `<article class="film-card film-card--no-controls">
      <h3 class="film-card__title">${this._title}</h3>
      <p class="film-card__rating">${this._rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${this._year}</span>
        <span class="film-card__duration">${this._duration}</span>
        <span class="film-card__genre">${this._genre}</span>
      </p>
      <img src="${this._picture}" alt="" class="film-card__poster">
      <p class="film-card__description">${this._description}</p>
      <button class="film-card__comments">${this._comments} comments</button>
    </article>`;
  }

}

export {Card as default};
