class Set {
    constructor() {
        this.items = {};
    }

    add(element) {
        if(!this.has(element)) {
            this.items[element] = element;
            return true;
        }

        return false;
    }

    delete(element) {
        if(this.has(element)) {
            delete this.items[element];
            return true;
        }

        return false;
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    values() {
        return Object.values(this.items);
    }

    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.value().forEach(value => unionSet.add(value));

        return unionSet;
    }

    intersection(otherSet) {
        const intersectionSet = new Set;
        let biggerSet = otherSet.values();
        let smallerSet = this.values();

        if(this.size() > otherSet.size()) {
            biggerSet = this.values();
            smallerSet = otherSet.values();
        }

        smallerSet.forEach(value => {
            if(biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        })

        return intersectionSet;

    }

    difference(otherSet) {
        const differenceSet = new Set();
        this.values().forEach(value => {
            if(!otherSet.has(value)) {
                differenceSet.add(value);
            }
        })

        return differenceSet;
    }

    isSubset(otherSet) {
        if(this.size() > otherSet.size()) {
            return false;
        }

        let isSubset = true;

        this.values().every(value => {
            if(!otherSet.has(value)) {
                isSubset = false;
                return false;
            }

            return true;
        })

        return isSubset;
    }
}