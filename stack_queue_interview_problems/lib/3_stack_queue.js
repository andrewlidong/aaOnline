// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this._stack = [];
    }

    pop() {
        return this._stack.pop();
    }

    push(val) {
        this._stack.push(val);
    }

    peek() {
        return this._stack[this._stack.length - 1];
    }

    isEmpty() {
        return this._stack.length === 0;
    }

    size() {
        return this._stack.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this._newStack = new Stack();
        this._oldStack = new Stack();
    }

    size() {
        return this._newStack.size() + this._oldStack.size();
    }

    enqueue(val) {
        this._newStack.push(val);
    }

    _shiftStacks() {
        if (this._oldStack.isEmpty()) {
            while (!this._newStack.isEmpty()) {
                this._oldStack.push(this._newStack.pop());
            }
        }
    }

    dequeue() {
        this._shiftStacks();
        return this._oldStack.pop();
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
