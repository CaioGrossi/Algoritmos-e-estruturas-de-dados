/* 
    Stack é uma estrutra de dados que pode ou não ser de memoria sequencial (array para sequencial e algo como listas ligadas para não sequencial).
    A diferença principal de uma stack é que ela segue uma regra padrão para remover e adicionar elementos, sendo esta a FILO (first in last out )
    de que impõe remoções e adições somente no topo da pilha, ou seja, o primeiro a ser adicionado será o ultimo a ser removido.

    (este é um exemplo de stack usando os arrays em JavaScript. Um exemplo de memória sequencial e acesada por índice).
 */

class Stack {

    constructor () {
        this.items = [];
    }

    push(item) {
        return this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}