/*
    Essa é mais uma implementação de uma LinkedList só que dessa vez circular. A única diferença é que a propriedade do ultimo Nó da lista que apontaria
    para NULL aponta para o primeiro Nó da lista. Por isso o nome de circular.
*/

function defaultEqualsfn(a,b) {
    return a === b;
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor(equalsFn = defaultEqualsfn) {
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;

            if(index == 0) {
                if(this.head == null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size() - 1);
                    this.head = node;
                    current.next = this.head;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }

            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index) {
        if(index >= 0 && index < this.count) {
            let current = this.head;

            if (index == 0) {
                if(this.size() == 1) {
                    this.head = null;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size - 1);
                    this.head = this.head.next;
                    current = removed;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
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

    size() {
        return this.count;
    }
}