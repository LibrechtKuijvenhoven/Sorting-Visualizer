import { Isteps, SortingAlgorithm} from "./algorithm";

export const InsertionSort = (array: number[], steps: Isteps[] ) => { 
    for(let i = 0; i < array.length;i++){
        let j = i
        while (j > 0 && array[j - 1] > array[j]){
                let pair = [array[j-1], array[j]]
                let tmparr = [...array]
                let tmp = tmparr[j]
                tmparr[j] = tmparr[j-1]
                tmparr[j-1] = tmp
                steps.push({
                    array: [...tmparr], 
                    pair: pair,
                    pairIndex:[j-1, j],
                    isSorted: false
                });
                array = [...tmparr]
                j--;
        }
    }  
    steps.push({
        array: [...array], 
        pair: [],
        pairIndex:[],
        isSorted: true
    });
} 
export const InsertionSortAlgorithm: SortingAlgorithm = {
    bestCase: "n",
    average: "n^{2}",
    worstCase: "n^{2}",
    memory: "1",
    name: "Insertion Sort"
}
