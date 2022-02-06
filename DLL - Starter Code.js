// Node
// - val
// - next
// - prev !(new one)

// DoublyLinkedList
// - head
// - tail
// - length

class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head) [this.head, this.tail] = [newNode, newNode]
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if (!this.head) return undefined
        let poppedNode = this.tail
        if (this.length === 1) [this.head, this.tail] = [null, null]
        else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }

    shift(){
        if (!this.head) return undefined
        let oldHead = this.head
        if (this.length === 1) [this.head, this.tail] = [null, null]
        else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    unshift(val){
        let newNode = new Node(val)
        if (!this.head) [this.head, this.tail] = newNode, newNode
        else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index){
        if (index < 0 || index >= this.length) return null
        let mid = Math.floor(this.length/2), node
        if (index <= mid){
            node = this.head
            for(let i = 0; i != index; i++)
                node = node.next
        }
        else {
            node = this.tail
            for(let i = this.length-1; i != index; i--)
                node = node.prev
        }
        return node
    }

    set(index, val){
        let foundNode = this.get(index)
        if (foundNode != null) foundNode.val = val
        return !!foundNode
    }

    insert(index, val){
        if (index < 0 || index > this.length) return false
        else if (index === 0) this.unshift(val)
        else if (index === this.length) this.push(val)
        
        let newNode = new Node(val)
        let beforeNode = this.get(index - 1), afterNode = beforeNode.next
        newNode.next = afterNode, newNode.prev = beforeNode
        beforeNode.next = newNode, afterNode.prev = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        else if (index === 0) return this.shift()
        else if (index === this.length - 1) return this.pop()

        let removedNode = this.get(index)
        let beforeNode = removedNode.prev
        let afterNode = removedNode.next
        beforeNode.next = afterNode, afterNode.prev = beforeNode
        removedNode.prev = null, removedNode.next = null
        this.length--
        return removedNode
    }

    printf(){
        let arr = []
        let current = this.head
        while (current){
            arr.push(current.val)
            current = current.next
        }
        return arr
    }

    printb(){
        let arr = []
        let current = this.tail
        while (current){
            arr.push(current.val)
            current = current.prev
        }
        return arr
    }

    print(){ console.log(this.printf(),this.printb()) }
    
}
let arr = Array.from({length: 3}, (v, i) => i)
let list = new DoublyLinkedList
for (let val of arr) list.push(val)