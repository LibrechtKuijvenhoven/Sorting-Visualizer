import { Isteps, SortingAlgorithm } from "./algorithm";

export const HeapSort = (array: number[] , steps:Isteps[]) =>{
    let arrayLength = array.length;
    buildHeap(array, steps);

    for (let i = arrayLength - 1; i > 0; i--) {
        let tmp = array[i];
        array[i] = array[0];
        array[0] = tmp;
        maxHeap(array, i, 0, steps);
    }
    steps.push({
        array: [...array], 
        pair: [],
        pairIndex:[],
        isSorted: true
    });
}

const buildHeap = (array: number[] , steps: Isteps[]) => {
    let length = array.length;
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        maxHeap(array, length, i, steps);
    }
}

const maxHeap = (array: number[], length: number, i: number, steps: Isteps[]) => {
    let left = 2 * i + 1
    let right = 2 * i + 2
    let max = i
    if(left < length && array[left] > array[max])
        max = left
    if(right < length && array[right] > array[max])
        max = right
        
    if(max === i) return;

    let pair = [array[i], array[max]]
    let tmp = array[i];
    array[i] = array[max];
    array[max] = tmp;
    steps.push({
        array: [...array], 
        pair: pair,
        pairIndex:[],
        isSorted: false
    });
    maxHeap(array, length, max, steps);
}

export const HeapSortAlgorithm: SortingAlgorithm = {
    bestCase: "n log n",
    average: "n log n",
    worstCase: "n log n",
    memory: "1",
    name: "Heap Sort"
}