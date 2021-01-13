/*
    Queue é uma estrutua de dadoa que pode ou não ser de memória sequencial. A particularidade da Queue é a regra que ela segue para a remoção e adição de elementos,
    sendo a FIFO (first in first out). A Queue so aceita adições no seu final e so aceita remoções no seu começo, por isso o primeiro a entrar é o primeiro a sair.
*/

export default class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(item) {
    this.items[this.count] = item;
    item.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.count - this.lowestCount == 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[this.lowestCount]}`;

    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}
