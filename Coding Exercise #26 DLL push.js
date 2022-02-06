class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val){
        let newNode = new Node(val)
        if (this.length === 0) [this.head, this.tail] = [newNode, newNode]
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }   
}
