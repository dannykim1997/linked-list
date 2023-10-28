class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        let current = this.head;
        let position = 0;
        while (current) {
            if (position === index) {
                return current;
            }
            position++;
            current = current.nextNode;
        }
        return null;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        if (this.head === this.tail) {
            const removedNode = this.head;
            this.head = null;
            this.tail = null;
            return removedNode;
        }

        let current = this.head;
        while (current.nextNode !== this.tail) {
            current = current.nextNode;
        }

        const removedNode = this.tail;
        current.nextNode = null;
        this.tail = current;
        return removedNode;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            index++;
            current = current.nextNode;
        }
        return null;
    }

    toString() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(`( ${current.value} )`);
            current = current.nextNode;
        }
        return result.join(' -> ') + ' -> null';
    }
}

const myList = new LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);
myList.prepend(5);

console.log('LinkedList size:', myList.size());
console.log('Head:', myList.head.value);
console.log('Tail:', myList.tail.value);

console.log('Node at index 1:', myList.at(1).value);

const removedNode = myList.pop();
console.log('Removed Node:', removedNode.value);

console.log('Contains 20:', myList.contains(20));
console.log('Index of 30:', myList.find(30));

console.log('LinkedList as a string:', myList.toString());
