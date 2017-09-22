const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;}

     append(data) {
        const node = {
            data: data,
            prev: null,
            next: null
          }
          
          if(this.count === 0) {
            // If this is the first Node, assign it to head
            this.head = node;
          } else {
            // If not the first node, link it to the last node
            this.tail.next = node;
        }
        
        this.tail = node;
        
        //this.count++;
          
    }


    head() {}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
