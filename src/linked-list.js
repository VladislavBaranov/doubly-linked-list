const Node = require('./node');

class LinkedList {
    constructor() {
        this.data = [];
        this._tail = new Node();
        this._head = new Node();
    }

    get length() {
        return this.data.length
    }

    append(data) {
        this.data = this.data.concat([new Node(data)]);
        return this;
    }

    tail() {
        return this.data.length ? this.data[this.data.length - 1].data : null;
    }

    head() {
        return this.data.length ? this.data[0].data : null;
    }

    at(index) {
        return this.data[index].data;
    }

    insertAt(index, data) {
        var firstPart = this.data.slice(0, index),
            secondPart = this.data.slice(index);
        this.data = firstPart.concat([new Node(data)], secondPart);

        return this;
    }

    isEmpty() {
        return !this.data.length;
    }

    clear() {
        this.data = [];
        return this;
    }

    deleteAt(index) {
        this.data.splice(index, 1);
        return this;
    }

    reverse() {
        this.data.reverse();
        return this;
    }

    indexOf(findData) {
        var temp = -1;
        this.data.forEach((item, index) => {
            console.log(item.data, index);

            if (item.data === findData) {
                temp = index;
            }
        });
        return temp;
    }
}

module.exports = LinkedList;
