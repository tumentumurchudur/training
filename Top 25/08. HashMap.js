// Differences between HashMap and HashTable.
/*
  1. Hashtable is synchronized, whereas HashMap is not. This makes HashMap better for non-threaded applications,
     as unsynchronized Objects typically perform better than synchronized ones.
  2. Hashtable does not allow null keys or values. HashMap allows one null key and any number of null values.
  3. One of HashMap's subclasses is LinkedHashMap, so in the event that you'd want predictable iteration order
     (which is insertion order by default), you could easily swap out the HashMap for a LinkedHashMap.
*/

// Generates an index/hash using the given string and its bucket size.
// Hash function, which is used to map key to hash value
const hash = (key, max) => {
  const hash = 0;

  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % max;
};

function HashTable() {
  // Store values as [ [[k1, v1]], [[k2, v2], [k3, v3]], [...], ... ]
  let storage = [];
  const storageLimit = 14;

  this.print = function() {
    console.log(storage)
  }

  this.add = function(key, value) {
    const index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ];
    } else {
      let inserted = false;

      // storage = [ [ [key1, val1] ], [ [key2, val2], [key3, val3] ], [], ...]
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function(key) {
    const index = hash(key, storageLimit);

    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    const index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };

};

// Test the hash function.
console.log(hash('quincy', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();
