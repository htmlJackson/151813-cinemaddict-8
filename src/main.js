import makeFilter from './make-filter.js';
import makeCard from './make-card.js';
import {cardsArray} from './data.js';

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
  let result = ``;

  for (const card of cardsArray) {
    result += makeCard(card);
  }

  return result;
};

const clearBoard = () => {
  while (filmListContainer.firstChild) {
    filmListContainer.removeChild(filmListContainer.firstChild);
  }
};

filmListContainer.insertAdjacentHTML(`beforeend`, generateRandomCards());

const filtersList = document.querySelectorAll(`.main-navigation__item`);

Array.from(filtersList).forEach((elem) => {
  elem.addEventListener(`click`, () => {
    clearBoard();
    filmListContainer.insertAdjacentHTML(`beforeend`, generateRandomCards(Math.floor((Math.random() * 10) + 1)));
  });
});

Array.from(filmListExtra).forEach((elem) => {
  elem.insertAdjacentHTML(`beforeend`, `
    ${makeCard(cardsArray[0], true)}
    ${makeCard(cardsArray[0], true)}
  `);
});
