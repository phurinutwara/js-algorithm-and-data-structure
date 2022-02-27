class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor(val) {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) { // identical to Array.push()
        let newNode = new Node(val)
        if (!this.first) [this.first, this.last] = [newNode, newNode]
        else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    dequeue() { // identical to Array.shift()
        if (!this.first) return null
        let dequeuedNode = this.first
        if (this.size === 1) [this.first, this.last] = [null, null]
        else this.first = this.first.next
        this.size--
        return dequeuedNode.val
    }
}

let q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)