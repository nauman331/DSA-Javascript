class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        return this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        } else {
            return this.items.shift();
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        } else {
            return this.items[0];
        }
    }

    size() {
        return this.items.length;
    }
}

function reverseQueue(queue) {
    let stack = [];
    let size = queue.size();

    for (let i = 0; i < size; i++) {
        stack.push(queue.dequeue());
    }

    for (let i = 0; i < size; i++) {
        queue.enqueue(stack.pop());
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front()); 
console.log(queue.dequeue()); 
console.log(queue.front()); 
console.log(queue.size()); 
console.log(queue.isEmpty()); 

reverseQueue(queue);
console.log("Reversed Queue:");
console.log(queue.items); 
