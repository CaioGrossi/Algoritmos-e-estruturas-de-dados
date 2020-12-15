/*
    Uma implementação da tabela hash com um tratamento de colisão diferente. Quando houver colisão de um hash, o método put tentará colocar o valor nas próximas posições
    qu estiverem vazias. Os efeitos colaterais que uma remoção pode causar são tratados pela função verifyRemoveSideEffect.
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

class HashTableLinearProbing {
    constructor(toStrFn = defaultToString) {
        this.table = {};
        this.toStrFn = toStrFn;
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

            if(this.table[position] == null) {
                this.table[position] = new ValuePair(key, value);
            } else {
                let index = position++;
                
                while(this.table[index] != null) {
                    index++;
                }

                this.table[index] = new ValuePair(key, value);
            }

            return true;
        }
        return false;
    }

    get(key) {
        const position = this.hashCode(key);

        if (this.table[position] != null) {
            if(this.table[position].key === key) {
                return this.table[position].value;
            }

            let index = position++;

            while (this.table[index] != null && this.table[index].key != key) {
                index++;
            }

            if(this.table[index] != null && this.table[index].key === key) {
                return this.table[position].value;
            }
        }

        return undefined;
    }

    remove(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
          if (this.table[position].key === key) {
            delete this.table[position];
            this.verifyRemoveSideEffect(key, position);
            return true;
          }
          let index = position + 1;
          while (this.table[index] != null && this.table[index].key !== key) {
            index++;
          }
          if (this.table[index] != null && this.table[index].key === key) {
            delete this.table[index];
            this.verifyRemoveSideEffect(key, index);
            return true;
          }
        }
        return false;
      }
    
      verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key);
        let index = removedPosition + 1;
        while (this.table[index] != null) {

          const posHash = this.hashCode(this.table[index].key);

          if (posHash <= hash || posHash <= removedPosition) {
            this.table[removedPosition] = this.table[index];
            delete this.table[index];
            removedPosition = index;
          }

          index++;
        }

      }
}