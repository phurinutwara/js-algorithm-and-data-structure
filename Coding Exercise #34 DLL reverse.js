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
    reverse(){
        [this.head, this.tail] = [this.tail, this.head]
        let next, prev = null, node = this.tail

        //first forward
        while(node){
            //tmp the next
            next = node.next
            //set linkage
            node.next = prev

            //pre setting for next loop
            prev = node
            node = next
            
        }
        node = this.head
        while(node){
            // tmp for assigning
            prev = node.prev
            // re linkage
            node.prev = next

            //pre setting for next loop
            next = node
            node = prev

        }
        

        return this
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
    print() {return console.log(this.printf(), this.printb())}
}

let list = new DoublyLinkedList()
list.push(1).push(2).push(3).push(4)