import makeFilter from './make-filter.js';
import {dataCards} from './data.js';
import Card from './card.js';
import Popup from './popup.js';

const mainNavigation = document.querySelector(`.main-navigation`);
const filmListContainer = document.querySelector(`.films-list .films-list__container`);
const filmListExtra = document.querySelectorAll(`.films-list--extra .films-list__container`);

mainNavigation.insertAdjacentHTML(`beforeend`, `
  ${makeFilter(`All`, 0, true)}
  ${makeFilter(`Watchlist`, 13)}
  ${makeFilter(`History`, 4)}
  ${makeFilter(`Favorites`, 8)}
  ${makeFilter(`Stats`, 0, false, true)}
`);

const generateRandomCards = () => {
  for (const dataCard of dataCards) {
    const cardComponent = new Card(dataCard);
    const cardPopup = new Popup(dataCard);
    cardComponent.render(filmListContainer);

    cardComponent.onClick = () => {
      cardPopup.render(document.body);
      cardPopup.onClick = () => {
        cardPopup.unrender();
      };
    };
  }
};

const clearBoard = () => {
  while (filmListContainer.firstChild) {
    filmListContainer.removeChild(filmListContainer.firstChild);
  }
};

generateRandomCards();

const filtersList = document.querySelectorAll(`.main-navigation__item`);

Array.from(filtersList).forEach((elem) => {
  elem.addEventListener(`click`, () => {
    clearBoard();
    filmListContainer.insertAdjacentHTML(`beforeend`, generateRandomCards());
  });
});

Array.from(filmListExtra).forEach((elem) => {
  const cardExtraComponent = new Card(dataCards[0]);
  const cardExtraComponent2 = new Card(dataCards[0]);
  cardExtraComponent.render(elem);
  cardExtraComponent2.render(elem);
});
