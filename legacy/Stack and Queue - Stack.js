class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.first) [this.first, this.last] = [newNode, newNode]
        else {
            newNode.next = this.first
            this.first = newNode
        }
        return ++this.size
    }

    pop(){
        if(!this.first) return null
        let poppedNode = this.first
        if(this.size === 1) [this.first, this.last] = [null, null]
        else this.first = this.first.next
        this.size--
        return poppedNode.val
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

