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
        let newNode = new Node(val)
        if (!this.head) this.head = newNode, this.tail = newNode
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if (!this.tail) return undefined
        let oldTail = this.tail
        if (this.length !== 1) this.tail.prev.next = null, this.tail = this.tail.prev
        else [this.head, this.tail] = [null, null]
        oldTail.prev = null, oldTail.next = null
        this.length--
        return oldTail
    }
}