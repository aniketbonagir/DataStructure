// Build min Heap

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
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
			if(childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
				swapIdx = childTwoIdx;
			} else {
				swapIdx = childOneIdx;
			}
			if(heap[currentIdx] > heap[swapIdx]) {
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
		while(currentIdx > 0 && heap[parentIdx] > heap[currentIdx]) {
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