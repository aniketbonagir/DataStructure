/*Write a class that can support the following two functionalities: 1) the continuous insertion of numbers
and 2) the instant (O(1) time) retrieval of the median of the numbers that have been inserted thus far.
The getMedian() method, which handles the retrieval of the median, has already been written for you.
You simply have to write the insert() method.
Sample input: insert(5), insert(10), getMedian(), insert(100), getMedian()
Sample output: -, -, 7.5, -, 10

*/


function myFunction() {
    
    let cMedian = new ContinuousMedianHandler();
    cMedian.insert(5);
    console.log(cMedian.getMedian());
    cMedian.insert(10);
    console.log(cMedian.getMedian());
    cMedian.insert(100);
    console.log(cMedian.getMedian());
    cMedian.insert(200);
    console.log(cMedian.getMedian());
}

class ContinuousMedianHandler {
  constructor() {
    // Write your code here.
    this.lowerHalf = new Heap([], MAX_HEAP)
    this.greaterHalf = new Heap([], MIN_HEAP)
    this.median = null;
  }

  insert(number) {
    if(this.lowerHalf.heap.length == 0 || this.lowerHalf.peek() > number) {
            this.lowerHalf.insert(number);
        } else {
            this.greaterHalf.insert(number);
        }
        
        this.rebalance();
        this.updateMedian();
        
        
  }
    
    rebalance() {
        if(this.lowerHalf.heap.length - this.greaterHalf.heap.length === 2) {
            this.greaterHalf.insert(this.lowerHalf.remove());
        } else if(this.greaterHalf.heap.length-this.lowerHalf.heap.length ===2) {
            this.lowerHalf.insert(this.greaterHalf.remove());
        }
    }
    
    updateMedian() {
        if(this.lowerHalf.heap.length === this.greaterHalf.heap.length) {
            this.median = (this.lowerHalf.peek() + this.greaterHalf.peek())/2;
        } else if(this.lowerHalf.heap.length > this.greaterHalf.heap.length) {
            this.median = this.lowerHalf.peek();
        } else {
            this.median = this.greaterHalf.peek();
        }
    }

  getMedian() {
    return this.median;
  }
}

class Heap {
  constructor(array, comparisonFunc) {
    this.heap = this.buildHeap(array);
    this.comparison = comparisonFunc;
  }

  buildHeap(array) {
    // Write your code here.
    // first parent of last element =  (currentIdx-1)/2
    // last elementIDx = array.length-1
    // parent of last element is (elementIDx-1)/2 i.e array.length-2 / 2
        let firstParentIdx = Math.floor((array.length-2)/2);
        for(let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
            this.siftDown(currentIdx, array.length-1, array);
        }
        return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx*2 + 1;
        while(childOneIdx <= endIdx) {
            let childTwoIdx = (currentIdx*2 + 2 <= endIdx) ? currentIdx*2 + 2 : -1;
            let swapIdx;
            if(childTwoIdx !== -1 && this.comparison(heap[childTwoIdx], heap[childOneIdx])) {
                swapIdx = childTwoIdx;
            } else {
                swapIdx = childOneIdx;
            }
            if(this.comparison(heap[swapIdx], heap[currentIdx])) {
                this.swap(heap, currentIdx, swapIdx);
                currentIdx = swapIdx;
                childOneIdx = currentIdx*2 + 1;
            } else {
                return;
            }
        }
            
        
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx-1)/2);
        while(currentIdx > 0 && this.comparison(heap[currentIdx], heap[parentIdx])) {
            this.swap(heap, parentIdx, currentIdx);
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx-1)/2);
        }
  }

  peek() {
    // Write your code here.
        return this.heap[0];
  }

  remove() {
    // Write your code here.
        this.swap(this.heap, 0, this.heap.length-1);
        let removedElem = this.heap.pop();
        this.siftDown(0, this.heap.length-1, this.heap);
        return removedElem;
        
  }

  insert(value) {
    // Write your code here.
        this.heap.push(value);
        this.siftUp(this.heap.length-1, this.heap);
  }
    
    swap(array, i ,j) {
        let tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
        // [array[i] , array[j]] = [array[j], array[i]];
    }
}

function MIN_HEAP(a, b) {
    return a < b
}

function MAX_HEAP(a, b) {
    return a > b
}