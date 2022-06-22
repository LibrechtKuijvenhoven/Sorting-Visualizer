import { Isteps, SortingAlgorithm} from "./algorithm";

export const BubbleSort = (array: number[], steps: Isteps[]) => {      
    for(let i = 0; i < array.length;i++){
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j] <= array[j+1]) continue;

            steps.push({
                array: [...array], 
                pair: [array[j], array[j+1]],
                pairIndex:[j, j+1],
                isSorted: false
            });
            let tmp =array[j]
            array[j] = array[j+1]
            array[j+1] = tmp
        }
    }  
} 

export const BubbleSortAlgorithm: SortingAlgorithm = {
    bestCase: "n",
    average: "n^2",
    worstCase: "n^2",
    memory: "1",
    name: "Bubble Sort"
}