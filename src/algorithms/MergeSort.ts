import { Isteps, SortingAlgorithm } from "./algorithm";

export const MergeSort = (array: number[], steps : Isteps[]) => {
    sort(array,  0, array.length - 1)
    steps.push({
        array: [...array],
        pair: [0],
        pairIndex: [],
        isSorted: false
    });
}
const sort = (array: number[], left: number, right: number,) => {
    if(left >= right) return;
    let middle = Math.floor(left + (right-left)/2);
    sort(array, left, middle);
    sort(array, middle+1, right);
    merge(array, left, middle, right);
}
const merge = (array: number[], left: number, middle: number, right : number) => {
    let mergedArray: number[] = [];
    let leftArr = array.slice(left, middle);
    let rightArr = array.slice(middle + 1, right);
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            mergedArray.push(leftArr.shift()!)
        }else{
            mergedArray.push(rightArr.shift()!)
        }
    }
    for(let i = left; i < right; i++){
        let tmp = mergedArray.shift()!
        array[i] = tmp === undefined ? array[i] : tmp
    }
}

export const MergeSortAlgorithm: SortingAlgorithm = {
    bestCase: "n log n",
    average: "n log n",
    worstCase: "n log n",
    memory: "n",
    name: "Merge Sort"
}
