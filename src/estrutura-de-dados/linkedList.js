/* 
    LinkedList é uma estrutura de dados bastante utilizada que consiste em uma entidade lista que  tem uma propriedade que aponta para o primeiro elemento dessa
    lista que é um Nó. Cada elemento de uma lista é chamado de Nó e possui duas propriedades em uma LinkedList padrão, que são eles o valor do nó e uma propriedade que aponta 
    para o  próximo nó da lista. Uma lista não segue regras para remoção ou adição de elementos, podendo ser adicionados no final, começo ou por posição. No geral, uma lista é 
    somente uma estrutura de dados de memória não sequencial que tem como dados Nós que sempre apontam para o proximo Nó, até chegar ao fim da lista no qual vai apontar 
    para NULL e claro a própria lista tem uma propriedade que aponta para o seu primeiro Nó.
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

export default class LinkedList {

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

    isEmpty() {
        if (this.count = 0) {
            return true;
        }

        return false;
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

