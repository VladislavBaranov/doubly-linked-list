const Node = require('./node');

class LinkedList {
     constructor() {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }

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

    head() {
         // Create a new Node
    const node = {
        data: data,
        prev: null,
        next: null
      }
      
      // Save the first Node
      const temp = this.head;
      
      // Point head to the new Node
      this.head = node;
      
      // Add the rest of node behind the new first Node
      this.head.next = temp;
      
      this.count++;
      
      if(this.count === 1) {
        // If first node, 
        // point tail to it as well
        this.tail = this.head;
      }
    }

    tail() {
        var
        node = this._tail;
      return (node !== null) ? node.data : null;
    }

    at(index) {
        var node, i;

      if (index > -1 && index < this._length) {
        node = this._head;
        i = 0;
        while (i < index) {
          node = node.next;
          i += 1;
        }
        return node;
      }

      return null;
    }

    insertAt(index, data) {
        if (index < this.length) {
            var node = {
                value: value,
                next: null,
                prev: null,
            }

            var nodeCur = this._at(index);
            var nodePrev = nodeCur.prev;
            var nodeNext = nodeCur.next;

            node.prev = nodePrev;
            node.next = nodeNext;
            nodePrev.next = node;
            nodeNext.prev = node;

            this.length++;

            return this;
        } else {
            throw new Error("The index of the item that you have selected more than the length of the list.");
        }

    }

    isEmpty() {
        return this._length === 0;
    }

    clear() {
        while (!this.isEmpty()) {
            this.remove();
    }

    deleteAt(index) {
        var
        node = this._getAt(index),
        isHead = this._isHead(node),
        isTail = this._isTail(node);

      if (node !== null) {
        if (isHead) {
          this._head = node.next;
        }
        if (isTail) {
          this._tail = node.previous;
        }
        if (node.hasNext()) {
          node.next.previous = node.previous;
        }
        if (node.hasPrevious()) {
          node.previous.next = node.next;
        }
        this._length -= 1;
        
        return node.data;
      }

      return null;
    }

    reverse() {
        var node_buf = {
            value: null,
            next: null,
            prev: null,
        }

        var node_head = this._head;
        var node_tail = this._tail;

        var i = 0;

        while (i < Math.floor(this.length / 2)) { 
            node_buf.value = node_tail.value;
            node_tail.value = node_head.value;
            node_head.value = node_buf.value;
            node_head = node_head.next;
            node_tail = node_tail.prev;
            i++;
        }

        return this;
    }

    IndexOf(data) {
        var index = 0, resultIndex = -1;
  
        this._traverse(function (node) {
          if (node.data === data) {
            resultIndex = index;
            return breaker;
          }
          index += 1;
        });
        return resultIndex;
      };
}

module.exports = LinkedList;
