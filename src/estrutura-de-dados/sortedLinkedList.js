import LinkedList from './linkedList';

function defaultCompare (a,b) {
    if(a === b) {
        return 0;
    }

    return a < b ? -1 : 1
}

function defaultEqualsfn(a,b) {
    return a === b;
}


class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEqualsfn, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }

    insert(element, index = 0) {
        if(this.isEmpty()) {
            return super.insert(element, 0);
        }

        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);

    }

    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;

        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp === -1) {
                return i;
            }
            current = current.next;
        }

        return i;

    }
}




