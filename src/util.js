export default {
  getRandomIndex(n) {
    return Math.floor(Math.random() * n);
  },
  getRandomBoolean() {
    return !!this.getRandomIndex(2);
  },
  getRandomSetItem(set) {
    return [...set][this.getRandomIndex(set.size)];
  }
};
