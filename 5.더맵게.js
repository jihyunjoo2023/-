function solution(scoville, K) {
  const heap = new MinHeap();
  for (const e of scoville) {
    heap.push(e);
  }

  let result = 0;
  while (heap.size() > 1 && heap.peek() < K) {
    const min1 = heap.pop();
    const min2 = heap.pop();
    heap.push(min1 + min2 * 2);
    ++result;
  }

  return heap.peek() < K ? -1 : result;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  push(v) {
    this.heap.push(v);
    let i = this.size() - 1;
    let parentI = Math.floor((i - 1) / 2);
    while (i > 0 && this.heap[i] < this.heap[parentI]) {
      this.swap(i, parentI);
      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const minV = this.heap[0];
    this.heap[0] = this.heap.pop();

    let i = 0;
    while (i < this.size()) {
      const leftI = i * 2 + 1;
      const rightI = i * 2 + 2;
      let small = leftI;
      if (rightI < this.size() && this.heap[leftI] > this.heap[rightI]) {
        small = rightI;
      }
      if (this.heap[small] < this.heap[i]) {
        this.swap(small, i);
      }
      i = small;
    }

    return minV;
  }
}
