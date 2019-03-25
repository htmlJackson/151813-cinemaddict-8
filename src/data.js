import Util from './util.js';

const TITLES = [
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
];

const POSTERS = [
  `accused`,
  `blackmail`,
  `blue-blazes`,
  `fuga-da-new-york`,
  `moonrise`,
  `three-friends`
];

const GENRES = [
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
];

const FISH_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const FISH_ARRAY = FISH_TEXT.split(`.`);

const TextSentences = {
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
    return Util.getRandomArrayItem(TITLES);
  },
  get picture() {
    return `images/posters/${Util.getRandomArrayItem(POSTERS)}.jpg`;
  },
  get description() {
    const resultArray = [];
    for (let i = 0; i < Util.getRandomInteger(TextSentences.MIN, TextSentences.MAX); i++) {
      resultArray.push(Util.getRandomArrayItem(FISH_ARRAY));
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
    return Util.getRandomArrayItem(GENRES);
  },
  get comments() {
    return Util.getRandomIndex(COMMENTS_RANDOM_COUNTER);
  }
};

const dataCards = [];

for (let i = 0; i < NUMBER_OF_CARDS; i++) {
  dataCards.push(card);
}

export {dataCards};
