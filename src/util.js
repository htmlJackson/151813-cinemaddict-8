export default {
  getRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  },
  getRandomIndex(n) {
    return Math.floor(Math.random() * n);
  },
  getRandomBoolean() {
    return !!this.getRandomIndex(2);
  },
  getRandomSetItem(set) {
    return [...set][this.getRandomIndex(set.size)];
  },
  getRandomArrayItem(array) {
    return array[this.getRandomIndex(array.length)];
  }
};
