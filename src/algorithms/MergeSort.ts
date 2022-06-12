import { Isteps, SortingAlgorithm } from "./algorithm";

export const MergeSort = (array: number[], steps : Isteps[]) => {
    sort(array,  0, array.length - 1, steps)
}
const sort = (array: number[], left: number, right: number,steps: Isteps[]) => {
    if(left >= right) return;
    let middle = left + Math.floor((right-left)/2);

    sort(array, left, middle, steps);
    sort(array, middle+1, right, steps);
    merge(array, left, middle, right, steps);
}
const merge = (array: number[], left: number, middle: number, right : number,steps: Isteps[]) => {
    let mergedArray: number[] = [];
    let leftArr: number[] = [];
    let rightArr: number[] = [];
    
    for (let i = 0; i < (middle - left + 1); i++)
        leftArr.push(array[left + i]);
    for (let j = 0; j < (right - middle); j++)
        rightArr.push(array[middle + 1 + j]);
    
    while(leftArr.length && rightArr.length){    
        steps.push({
            array: [...array],
            pair: [leftArr[0],rightArr[0]],
            pairIndex: [],
            isSorted: false
        });  
        if(leftArr[0] < rightArr[0]){
            mergedArray.push(leftArr.shift()!)
        }else{
            mergedArray.push(rightArr.shift()!)
        }
    }
    while(leftArr.length)
        mergedArray.push(leftArr.shift()!)
    while(rightArr.length)
        mergedArray.push(rightArr.shift()!)
    let i = left;
    while(mergedArray.length){
        let tmp = mergedArray.shift()
        array[i] = tmp === undefined ? array[i] : tmp
        steps.push({
            array: [...array],
            pair: [array[i]],
            pairIndex: [],
            isSorted: false
        });
        i++;
    }
}

export const MergeSortAlgorithm: SortingAlgorithm = {
    bestCase: "n log n",
    average: "n log n",
    worstCase: "n log n",
    memory: "n",
    name: "Merge Sort"
}
