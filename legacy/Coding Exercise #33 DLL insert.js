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
    get(index){
        if (index < 0 || index >= this.length) return null
        let counter = 0, current = this.head
        while (counter != index){
            counter++
            current = current.next
        }
        return current
    }
    unshift(val){
        if (!this.length) return this.push(val)
        let newNode = new Node(val)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }
    shift(){
        if (!this.head) return undefined
        let removedNode = this.head
        if (this.length === 1) [this.head, this.tail] = [null, null]
        else {
            removedNode.next.prev = null
            this.head = this.head.next
            removedNode.next = null
        }
        this.length--
        return removedNode
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
    remove(index){
        if (index < 0 || index >= this.length) return undefined
        else if (index === 0) return this.shift()
        else if (index === this.length - 1) return this.pop()
        
        let foundNode = this.get(index), beforeNode = foundNode.prev, afterNode = foundNode.next
        beforeNode.next = afterNode, afterNode.prev = beforeNode
        foundNode.next = null, foundNode.prev = null
        this.length--
        return foundNode
    }
    insert(index, val){
        if (index < 0 || index > this.length) return undefined
        else if (index === 0)!!this.unshift(val)
        else if (index === this.length) return !!this.push(val)

        let newNode = new Node(val)
        let foundNode = this.get(index - 1)
        let afterNode = foundNode.next

        //self link
        newNode.prev = foundNode, newNode.next = afterNode
        //old position link to newNode
        foundNode.next = newNode
        //after position link to newNode
        afterNode.prev = newNode

        this.length++
        return !!newNode
    }
}