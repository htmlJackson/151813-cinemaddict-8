import Util from './util.js';

const TITLES = new Set([
  `The Shawshank Redemption`,
  `The Green Mile`,
  `Forrest Gump`,
  `Schindler's List`,
  `Intouchables`,
  `Léon`,
  `Inception`,
  `The Lion King`,
  `Fight Club`,
  `Иван Васильевич меняет профессию`,
  `La vita è bella`,
  `Knockin' on Heaven's Door`,
  `The Godfather`,
  `Pulp Fiction`,
  `The Prestige`
]);

const POSTERS = new Set([
  `accused`,
  `blackmail`,
  `blue-blazes`,
  `fuga-da-new-york`,
  `moonrise`,
  `three-friends`
]);

const GENRES = new Set([
  `Action`,
  `Adventure`,
  `Comedy`,
  `Crime`,
  `Drama`,
  `History`,
  `Horror`,
  `Science`,
  `Western`,
  `Musical`
]);

const FISH_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const TextSentenses = {
  MIN: 1,
  MAX: 3
};

const Rating = {
  GAP: 100,
  COEF: 10
};

const YEAR_GAP = 50;

const FilmDuration = {
  MIN: 90,
  MAX: 180
};

const MINS_IN_HOUR = 60;

const COMMENTS_RANDOM_COUNTER = 100;

const NUMBER_OF_CARDS = 7;

export const card = {
  get title() {
    return Util.getRandomSetItem(TITLES);
  },
  get picture() {
    return `images/posters/${Util.getRandomSetItem(POSTERS)}.jpg`;
  },
  get description() {
    const fishArray = FISH_TEXT.split(`.`);
    const resultArray = [];
    for (let i = 0; i < Util.getRandomInteger(TextSentenses.MIN, TextSentenses.MAX); i++) {
      resultArray.push(fishArray[Util.getRandomIndex(fishArray.length)]);
    }
    return resultArray.join(`.`);
  },
  get rating() {
    return Util.getRandomIndex(Rating.GAP) / Rating.COEF;
  },
  get year() {
    return new Date().getFullYear() - Util.getRandomIndex(YEAR_GAP);
  },
  get duration() {
    const generatedDuration = Util.getRandomInteger(FilmDuration.MIN, FilmDuration.MAX);
    return `${Math.floor(generatedDuration / MINS_IN_HOUR)}h ${generatedDuration % MINS_IN_HOUR}m`;
  },
  get genre() {
    return Util.getRandomSetItem(GENRES);
  },
  get comments() {
    return Util.getRandomIndex(COMMENTS_RANDOM_COUNTER);
  }
};

const cardsArray = [];

for (let i = 0; i < NUMBER_OF_CARDS; i++) {
  cardsArray.push(card);
}

export {cardsArray};
