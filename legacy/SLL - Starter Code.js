// piece of data - val
// reference to next node - next

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if (!this.head) [this.head, this.tail] = [newNode, newNode]
        else [this.tail.next, this.tail] = [newNode, newNode]
        this.length++
        return this
    }

    pop(){
        if (!this.head) return undefined
        let current = this.head, newTail = current
        while(current.next){
            if(current.next !== null) newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length == 0) this.head =null
        return current
    }

    shift(){
        if (!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length == 0) this.tail = null
        return currentHead
    }

    unshift(val){
        let newNode = new Node(val)
        if (!this.head) [this.head, this.tail] = [newNode, this.head]
        else [newNode.next, this.head] = [this.head, newNode]
        this.length++
        return this
    }

    get(index){
        if (index < 0 || index >= this.length) return null
        let result = this.head;
        for(let i = 0; i < index; i++)
            result = result.next
        return result
    }

    set(index, val){
        let foundNode = this.get(index)
        if (foundNode){
            foundNode.val = val
            return true
        }
        return false
    }

    insert(index, val){
        if (index < 0 || index > this.length) return false
        else if (index === this.length) return !!this.push(val)
        else if (index === 0) return !!this.unshift(val)
        
        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        let tmpNode = prevNode.next
        [prevNode.next, newNode.next] = [newNode, tmpNode]
        this.length++
        return true
        
    }

    remove(index){
        if (index < 0 || index >= this.length) return undefined
        else if (index === this.length - 1) return this.pop()
        else if (index === 0) return this.shift()

        let prevNode = this.get(index - 1), current = prevNode.next
        prevNode.next = current.next
        this.length--
        return current
    }

    reverse(){
        [this.head, this.tail] = [this.tail, this.head]
        let next, prev = null, node = this.tail      

        while(node){
            // swap linkage
            next = node.next // tmp
            node.next = prev

            // presetting for next loop
            prev = node
            node = next
        }
        

        
    }

    print(){
        let arr = []
        let current = this.head
        while(current){
           arr.push(current.val)
           current = current.next 
        }
        console.log(arr)
    }
}

var list = new SinglyLinkedList()
list.push("1")
list.push("2")
list.push("3")
list.push("4")