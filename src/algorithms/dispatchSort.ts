import { AnyAction, Dispatch } from "redux";
import { setArrayStep } from "../slice/arraysteps/arrayStepsSlice";
import { Isteps, SortingAlgorithm } from "./algorithm";
import { BubbleSort } from "./BubbleSort";
import { HeapSort } from "./HeapSort";
import { InsertionSort } from "./InsertionSort";
import { MergeSort } from "./MergeSort";
import { QuickSort } from "./QuickSort";
import { SelectionSort } from "./SelectionSort";

export const dispatchSort = (arr: number[], dispatch:Dispatch<AnyAction>, speed : number, algorithm: SortingAlgorithm) =>{
    let array = [...arr];
    let steps: Isteps[] = [];
    switch (algorithm.name){
        case "Merge Sort":
            MergeSort(array, steps);
            break;
        case "Bubble Sort":
            BubbleSort(array, steps);
            break;
        case "Heap Sort":
            HeapSort(array, steps);
            break;
        case "Insertion Sort":
            InsertionSort(array, steps);
            break;
        case "Quick Sort":
            QuickSort(array, steps);
            break;
        case "Selection Sort":
            SelectionSort(array, steps);
            break;
    }    
    steps.push({
        array: [...array],
        pair: [],
        pairIndex: [],
        isSorted: true
    });
    
    dispatchArray(steps, speed, dispatch, array);
}

const dispatchArray = (steps: Isteps[], speed: number, dispatch :Dispatch<AnyAction>, array: number[]) => {
    steps.forEach((step, i) => {
        setTimeout(() => {
            dispatch(setArrayStep({
                array: step.array, 
                pair: step.pair, 
                pairIndex: step.pairIndex, 
                isSorted: step.isSorted
            }))
        }, speed * i);
    });
}
