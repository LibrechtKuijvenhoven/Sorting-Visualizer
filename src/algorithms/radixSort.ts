import { Isteps, SortingAlgorithm} from "./algorithm";

export const RadixSort = (array: number[], steps: Isteps[]) => {      

    let max = getMax(array);
    for(let exponant = 1; Math.floor(max / exponant) > 0; exponant *=10){
        countingSort(array, exponant, steps);        
    }
    
} 
const getMax = (array: number[]) => {
    let max = array[0];
    array.forEach(e => {
        if (e > max) max = e;
    });
    return max;
}
const countingSort = (array: number[], exponant: number, steps: Isteps[]) => {
    let output = new Array(array.length);
    let count = [];

    for (let i = 0; i < 10; i++) 
        count.push(0);
    
    for (let i = 0; i < array.length; i++) 
        count[Math.floor(array[i] / exponant) % 10]++;

    for (let i = 1; i < 10; i++)
        count[i] += count[i-1];    
    
    for(let i = array.length - 1; i>= 0; i--){
        output[count[Math.floor(array[i]/ exponant) % 10] -1] = array[i];
        count[(Math.floor(array[i]/ exponant) % 10)]--;
        steps.push({
            array: [...output],
            pair: [array[i]],
            isSorted: false
        });
    }

    for (let i = 0; i < array.length; i++) 
        array[i] = output[i];
        
}

export const RadixSortAlgorithm: SortingAlgorithm = {
    bestCase: "n",
    average: "n^. k/d",
    worstCase: "n^. k/d",
    memory: "n + 2^d",
    name: "Radix Sort"
}