class Queue {
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
        if(this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    }

    size() {
        return this.count - this.lowestCount;
    }

    isEmpty() {
        return this.count - this.lowestCount == 0
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[this.lowestCount]}`;

        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }

        return objString;
    }
}