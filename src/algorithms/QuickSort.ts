import { Isteps, SortingAlgorithm } from "./algorithm";

export const QuickSort = (array:number[], steps: Isteps[]) => {
    sort(array, 0, array.length-1, steps);
}

const sort = (array: number[],left: number, right: number, steps: Isteps[]) => {   
     if(left >= right) return;
     let partionindex = partion(array,left, right, steps);

     sort(array, left, partionindex - 1, steps);
     sort(array, partionindex + 1, right, steps);
}

const partion = (array: number[], left: number, right: number, steps:Isteps[]): number => {
    let pivot = array[right];

    let pivotIndex = left-1

    for( let i = left; i <= right-1; i++){
        if(array[i] >= pivot) continue;
        pivotIndex++;
        let tmp = array[pivotIndex];
        steps.push({
            array: [...array],
            pair: [tmp,array[i]],
            isSorted: false
        }); 
        array[pivotIndex] = array[i];
        array[i] = tmp;
    }
    
    let tmp = array[pivotIndex + 1];
    steps.push({
        array: [...array],
        pair: [tmp,array[right]],
        isSorted: false
    }); 
    
    array[pivotIndex+1] = array[right];
    array[right] = tmp;
    
    return pivotIndex + 1;
}

export const QuickSortAlgorithm: SortingAlgorithm = {
    bestCase: "n log n",
    average: "n log n",
    worstCase: "n^2",
    memory: "log n",
    name: "Quick Sort"
}