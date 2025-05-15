class Stack {
    constructor() {
        this.items = [];
    }

  
    push(element) {
        this.items.push(element);
    }

    isEmpty() {
        return this.items.length === 0;
    }
    
    pop() {
        if (this.items.length !== 0) {
            return this.items.pop();
        } else {
            console.log("Stack is empty");
            return null; 
        }
    }

   
    peek() {
        if (this.items.length !== 0) {
            return this.items[this.items.length - 1];
        } else {
            console.log("Stack is empty");
            return null; 
        }
    }

  
    size() {
        return this.items.length;
    }

   
    clear() {
        this.items = [];
    }
}



let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop()); 
console.log(stack.size()); 
stack.clear();
console.log(stack.isEmpty()); 

