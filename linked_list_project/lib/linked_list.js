// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newTail = new Node(val);

        if (this.length === 0) {
            this.tail = newTail;
            this.head = newTail;
            this.length ++;
        } else {
            this.tail.next = newTail;
            this.tail = newTail;
            this.length ++;
        }

        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        let removedTail = this.tail;
        if (this.length === 0) {
            return;
        } else {
            if (this.length === 1) {
                removedTail = this.tail;
                this.head = null;
                this.tail = null;
                this.length --;
                return removedTail;
            } else if (this.length === 2) {
                this.head.next = null;
                this.tail = this.head;
                this.length--;
                return removedTail;
            } else {
                let tailPrev = this.head;
                while (tailPrev.next !== this.tail) {
                    tailPrev = tailPrev.next;
                }
                tailPrev.next = null;
                this.tail = tailPrev;
                this.length--;
                return removedTail;
            }
        }
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newHead = new Node(val);

        if (this.length === 0) {
            this.head = newHead;
            this.tail = newHead;
            this.length++;
        } else {
            let oldHead = this.head;
            this.head = newHead;
            this.head.next = oldHead;
            this.length++;
        }

        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        let removedHead = this.head;
        if (this.length === 0) {
            return;
        } else {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
                this.length--;
                return removedHead;
            } else if (this.length === 2) {
                this.head = this.tail;
                this.length--;
                return removedHead;
            } else {
                newHead = this.head.next;
                this.head = newHead;
                this.length--;
                return removedHead;
            }
        }
    }

    // TODO: Implement the contains method here
    contains(target) {
        let iter = this.head;
        while (iter !== null) {
            if (iter.value === target) return true;
            iter = iter.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index > this.length -1) return null;

        let currIdx = this.head;
        for (let idxCount = 0; idxCount < index; idxCount++) {
            currIdx = currIdx.next;
        }
        return currIdx;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index > this.length - 1 || index < 0) return false;

        let setNode = new Node(val);

        let prev = this.head;
        for (let idxCount = 0; idxCount < index - 1; idxCount++) {
            prev = prev.next;
        }
        let curr = prev.next;
        
        prev.next = setNode;
        setNode.next = curr.next;
        curr.next = null;

        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index > this.length - 1 || index < 0) return false;

        let insertNode = new Node(val);

        let prev = this.head;
        for (let idxCount = 0; idxCount < index - 1; idxCount++) {
            prev = prev.next;
        }
        let curr = prev.next;

        prev.next = insertNode;
        insertNode.next = curr;
        
        this.length++;
        return true;

    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index > this.length - 1 || index < 0) return;

        let prev = this.head;
        for (let idxCount = 0; idxCount < index -1; idxCount++) {
            prev = prev.next;
        }
        let curr = prev.next;

        prev.next = curr.next;
        this.length--;

        return curr;

    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;