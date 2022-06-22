import { BubbleSortAlgorithm } from "./BubbleSort";
import { HeapSortAlgorithm } from "./HeapSort";
import { InsertionSortAlgorithm } from "./InsertionSort";
import { MergeSortAlgorithm } from "./MergeSort";
import { QuickSortAlgorithm } from "./QuickSort";
import { SelectionSortAlgorithm } from "./SelectionSort";

export type SortingAlgorithm = {
    bestCase: string,
    average: string,
    worstCase: string,
    memory: string,
    name: string;
}

export const getSortingAlgotihm = (algorithm: string): SortingAlgorithm => {
    console.log(algorithm);
    
    switch (algorithm) {
        case "Heap":
            return HeapSortAlgorithm;
        case "Merge":
            return MergeSortAlgorithm;
        case "Bubble":
            return BubbleSortAlgorithm;
        case "Insertion":
            return InsertionSortAlgorithm;
        case "Quick":
            return QuickSortAlgorithm;
        case "Selection":
            return SelectionSortAlgorithm;
        default:
            return HeapSortAlgorithm;
    }
};
export enum TypeOfAlgorithm {
    Heap,
    Quick,
    Bubble,
    Merge,
    Insertion,
    Selection
}
export interface Isteps {
    array: number[],
    pair: number[],
    pairIndex: number[],
    isSorted: boolean
};