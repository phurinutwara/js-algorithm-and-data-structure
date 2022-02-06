class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null
        this.tail = null
        this.length = 0    
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    shift(){
        if (!this.head) return undefined
        let removedNode = this.head
        if (this.length === 1) [this.head, this.tail] = [null, null]
        else {
            removedNode.next.prev = null
            this.head = this.head.next
        }
        this.length--
        return removedNode
    }
}