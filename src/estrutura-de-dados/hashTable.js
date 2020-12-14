/*
    HashTable é uma estrutura de dados bem parecida com Dictionary porem usa uma função de hash para criar um hashCode de acordo com a chave passada, fazendo o hashcode apontat
    para o real valor do dado. Por ter uma função que gera um Hash, pode haver situações em que serão geradas a mesma chave para valores diferentes, assim tendo que
    tratar de colisões.
*/

import ValuePair from '../utils/valuePair';

export function defaultToString (item) {
    if(item == null) {
        return "NULL"
    } else if (item == undefined) {
        return 'UNDEFINED'
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`
    }

    return item.toString();
}


class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    loseloseHashCode(key) {
        if(typeof key === 'number') {
            return key;
        }

        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }

        return hash % 37;
    }

    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    put(key, value) {
        if(key != null && value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }

        return false;
    }
    
    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];

        if(valuePair != null) {
            delete this.table[hash];
            return true;
        }

        return false;
    }


    toString() {
        if(this.isEmpty()) {
            return '';
        }

        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
        for (let i = 0; i < keys.length; i++) {
            objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`;
        }

        return objString;
    }
}