class MaxBinaryHeap {
    constructor(){
        this.values = []
    }

    // Insertion Methods

    insert(val){
        this.values.push(val)
        this.bubbleUp()
        return this
    }

    bubbleUp(){
        let curIndex = this.values.length - 1
        let parentIndex = Math.floor((curIndex - 1) / 2)

        while ( parentIndex >= 0 && this.values[parentIndex] < this.values[curIndex]){
            // Swaping
            [this.values[curIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[curIndex]]

            // set new indexes
            curIndex = parentIndex
            parentIndex = Math.floor((curIndex - 1) / 2)
        }
    }

    // Extraction Methods

    exractMax(){
        // Edge case when only one left
        if (this.values.length === 0) return undefined
        
        // Swap latest with the root
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]]

        // pop and keep the values
        let poppedRoot = this.values.pop()

        // sink until it's heap
        this.sinkDown()
        return poppedRoot
    }

    sinkDown(){
        let pIndex = 0
        let lIndex = (2 * pIndex) + 1, rIndex = (2 * pIndex) + 2
        
        while (!!this.values[lIndex] || !!this.values[rIndex]){
            let maxIndex = ((this.values[lIndex] ?? 0) > (this.values[rIndex] ?? 0)) ? lIndex : rIndex
            if ( this.values[maxIndex] > this.values[pIndex]){
                // Swap
                [this.values[maxIndex], this.values[pIndex]] = [this.values[pIndex], this.values[maxIndex]]
                
                //pre-setting for next loop
                pIndex = maxIndex
                lIndex = (2 *  pIndex) + 1, rIndex = (2 * pIndex) + 2
            }
            else break
        }
    }
}

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
heap.exractMax()
