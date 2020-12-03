
function defaultEqualsfn(a,b) {
    return a === b;
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {

    constructor(equalsfn = defaultEqualsfn) {
        this.count = 0;
        this.head = null;
        this.equalsfn = equalsfn;
    }

    push (element) {
        const node = new Node(element);
        let current;

        if (this.head == null) {
            this.head = node
        } else {
            current = this.head;

            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }

        this.count++;
    }

    removeAt(index) {
        if(index >= 0 && index < this.count) {
            let current = this.head;
            
            if(index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element
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

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);

            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }

            this.count++;
            return true;
        }

        return false;
    }

    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count; i++) {
            if(this.equalsfn(element, current.element)) {
                return i
            }

            current = current.next;
        }

        return -1;
    }

    size() {
        return this.count;
    }

    toString() {
        if(this.head == null) {
            return '';
        }

        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size(); i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }

        return objString;
    }
}

