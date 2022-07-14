import { AnyAction, Dispatch } from "redux";
import { setArrayStep } from "../slice/arraysteps/arrayStepsSlice";
import { setIsSorting } from "../slice/arraysteps/isSortingSlice";
import { Isteps, SortingAlgorithm } from "./algorithm";
import { BubbleSort } from "./BubbleSort";
import { HeapSort } from "./HeapSort";
import { InsertionSort } from "./InsertionSort";
import { MergeSort } from "./MergeSort";
import { QuickSort } from "./QuickSort";
import { RadixSort } from "./radixSort";
import { SelectionSort } from "./SelectionSort";

export const dispatchSort = (arr: number[], dispatch:Dispatch<AnyAction>, speed : number, algorithm: SortingAlgorithm) =>{
    let array = [...arr];
    let steps: Isteps[] = [];

    dispatch(setIsSorting(true));

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
        case "Radix Sort":
            RadixSort(array, steps);
            break;
    }    
    for(let i = 0; i < array.length; i++){
        steps.push({
            array: [...array],
            pair: [...array.slice(0,i+1)],
            isSorted: true
        });
    }
    dispatchArray(steps, speed, dispatch, array);
}

const dispatchArray = (steps: Isteps[], speed: number, dispatch :Dispatch<AnyAction>, array: number[]) => {
    steps.forEach((step, i) => {
        setTimeout(() => {
            dispatch(setArrayStep({
                array: step.array, 
                pair: step.pair, 
                isSorted: step.isSorted
            }))
        }, speed * i);
    });
    setTimeout(() => {
        dispatch(setIsSorting(false));        
    }, speed * steps.length)
}
