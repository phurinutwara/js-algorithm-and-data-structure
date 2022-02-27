class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(val, current = this.root) { //recursively
        let newNode = new Node(val)
        if (current === this.root && current === null){
            this.root = newNode
            return this
        } else {
            if(val === current.val) return undefined;
            else if(val < current.val) {
                if (current.left === null){
                    current.left = newNode
                    return this
                } else {
                    current = this.insert(val,current.left)
                }
            } 
            else if(val > current.val) {
                if (current.right === null){
                    current.right = newNode
                    return this
                } else {
                    current = this.insert(val,current.right)
                }
            }
        }
        return undefined
    }

    find(val, current = this.root) { //recursively
        const notFound = undefined
        if (current === this.root && current === null) return notFound
        else {
            let nextNode
            if (val === current.val) return current
            else if (val > current.val){
                if (current.right === null) return notFound
                else nextNode = current.right
            }
            else if (val < current.val){
                if (current.left === null) return notFound
                else nextNode = current.left
            }
            return this.find(val, nextNode)
        }
    }

    contains(val, current = this.root) { //recursively
        const notFound = false, Found = true
        if (current === this.root && current === null) return Found
        else {
            let nextNode
            if (val === current.val) return Found
            else if (val > current.val){
                if (current.right === null) return notFound
                else nextNode = current.right
            }
            else if (val < current.val){
                if (current.left === null) return notFound
                else nextNode = current.left
            }
            return this.contains(val, nextNode)
        }
    }
}

let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(2)
tree.insert(7)
tree.insert(11)
tree.insert(16)

// !! Painful !!
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(5)
// tree.root.left.right = new Node(7.5)
// !!