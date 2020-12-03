function defaultEqualsfn(a,b) {
    return a === b;
}

class Node {
    constructor(element, next, prev) {
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList{
    constructor(equalsFn = defaultEqualsfn) {
        this.head = null;
        this.tail = null;
        this.count = 0;
        this.equalsFn = equalsFn;
    }

    insert(element, index) {
        if(index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;

            if (index === 0) {
                if(this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            } else if (index === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }

            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index) { 
        if(index >= 0 && index < this.count) {
            let current = this.head;

            if(index == 0) {
                this.head = current.next;
                
                if (this.count == 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if(index == this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count--;
            return current.element;
        }

        return undefined;
    }

    getElementAt(index) {
        if(index >= 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i < index ; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
}