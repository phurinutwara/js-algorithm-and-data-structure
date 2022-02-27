class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) [this.head, this.tail] = [newNode, newNode]
        else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }

    reverse(){
        let prev = null, next, node = this.head

        while(node){
            next = node.next
            node.next = prev

            prev = node
            node = next
        }
        [this.head, this.tail] = [this.tail, this.head]
        return this
    }

    printf(){
        let arr = [], current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        return arr
    }
}

let list = new SinglyLinkedList()
list.push(1).push(2).push(3).push(4)