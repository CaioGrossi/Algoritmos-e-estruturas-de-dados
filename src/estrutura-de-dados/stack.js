/* 
    Stack é uma estrutra de dados que pode ou não ser de memoria sequencial (array para sequencial e algo como listas ligadas para não sequencial).
    A diferença principal de uma stack é que ela segue uma regra padrão para remover e adicionar elementos, sendo esta a FILO (first in last out )
    de que impõe remoções e adições somente no topo da pilha, ou seja, o primeiro a ser adicionado será o ultimo a ser removido.

    (este é um exemplo de stack usando os objetos em JavaScript para melhorar o acesso aos elementos)
 */

class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(item) {
        this.items[this.count] = item;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count == 0;
    }

    pop() {
        if(this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek() {
        if(this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1]
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }
        
        let objString = ``;
        for (let i = 0; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }

        return objString;
    }
}