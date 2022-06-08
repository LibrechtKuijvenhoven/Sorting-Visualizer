import { Isteps, SortingAlgorithm} from "./algorithm";

export const BubbleSort = (arr: number[], steps: Isteps[]) => {      
    for(let i = 0; i < arr.length;i++){
        for (let j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j+1]){
                let pair = [arr[j], arr[j+1]]
                let tmparr = arr.splice(0)
                let tmp =tmparr[j]
                tmparr[j] = tmparr[j+1]
                tmparr[j+1] = tmp
                steps.push({
                    array: [...tmparr], 
                    pair: pair,
                    pairIndex:[j, j+1],
                    isSorted: false
                });
                arr = tmparr
            }
        }
    }  
    steps.push({
        array: [...arr], 
        pair: [],
        pairIndex:[],
        isSorted: true
    });
} 

export const BubbleSortAlgorithm: SortingAlgorithm = {
    bestCase: "n",
    average: "n^{2}",
    worstCase: "n^{2}",
    memory: "1",
    name: "Bubble Sort"
}