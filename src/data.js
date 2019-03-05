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

const FISH_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const TextSentenses = {
  MIN: 1,
  MAX: 3
};

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
    for (let i = TextSentenses.MIN; i <= Util.getRandomIndex(TextSentenses.MAX); i++) {
      resultArray.push(fishArray[Util.getRandomIndex(fishArray.length)]);
    }
    return resultArray.join(`.`);
  }

};
