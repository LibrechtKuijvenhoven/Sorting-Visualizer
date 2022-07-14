import { Isteps, SortingAlgorithm } from "./algorithm";

export const SelectionSort = (array:number[], steps: Isteps[]) => {
    for (let i = 0; i < array.length; i++) {
        let min = getMin(array, i, steps);
        let tmp = array[i];
        steps.push({
            array: [...array],
            pair: [tmp,array[min]],
            isSorted: false
        }); 
        
        array[i] = array[min];
        array[min] = tmp
    }
}
const getMin = (array:number[],startIndex: number, steps:Isteps[]): number => {
    let minIndex = startIndex;
    for(let i = startIndex; i < array.length; i++){
        steps.push({
            array: [...array],
            pair: [array[i]],
            isSorted: false
        }); 
        if(array[i] < array[minIndex])
            minIndex = i
    }
    return minIndex;
}

export const SelectionSortAlgorithm: SortingAlgorithm = {
    bestCase: "n^2",
    average: "n^2",
    worstCase: "n^2",
    memory: "1",
    name: "Selection Sort"
}