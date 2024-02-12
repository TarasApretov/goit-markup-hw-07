class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(item) {
    return items.push(item);
  }

  removeItem(item) {
    let index = this.#items.indexOf(item);
    if (index > -1) return this.#items.splice(index, 1);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
const items = storage.getItems();
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
