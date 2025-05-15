
class Node {
    constructor(data) {
        this.data = data;  
        this.next = null;  
    }
}

class LinkedList {
    constructor() {
        this.head = null;  
    }


    insertAtEnd(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    traverse() {
        let temp = this.head;
        let listElements = "";
        while (temp !== null) {
            listElements += temp.data + " -> ";
            temp = temp.next;
        }
        console.log(listElements + "null");
    }


    deleteByValue(value) {

        if (!this.head) {
            console.log("List is empty");
            return;
        }


        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let temp = this.head;
        while (temp.next !== null && temp.next.data !== value) {
            temp = temp.next;
        }


        if (temp.next === null) {
            console.log("Node not found");
            return;
        }


        temp.next = temp.next.next;
    }
}


let list = new LinkedList();


list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.traverse();  


list.deleteByValue(20);
list.traverse();  
