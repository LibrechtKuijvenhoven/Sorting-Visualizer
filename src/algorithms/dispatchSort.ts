import { AnyAction, Dispatch } from "redux";
import { setArrayStep } from "../slice/arraysteps/arrayStepsSlice";
import { Isteps, SortingAlgorithm } from "./algorithm";
import { BubbleSort } from "./BubbleSort";
import { HeapSort } from "./HeapSort";
import { InsertionSort } from "./InsertionSort";
import { MergeSort } from "./MergeSort";

export const dispatchSort = (arr: number[], dispatch:Dispatch<AnyAction>, speed : number, algorithm: SortingAlgorithm) =>{
    console.log(algorithm);
    
    let array = [...arr];
    let steps: Isteps[] = [];
    switch (algorithm.name){
        case "Merge Sort":
            MergeSort(array, steps);
        case "Bubble Sort":
            BubbleSort(array, steps);
        case "Heap Sort":
            HeapSort(array, steps);
        case "Insertion Sort":
            InsertionSort(array, steps);
    }

    dispatchArray(steps, speed, dispatch, array);
}

const dispatchArray = (steps: Isteps[], speed: number, dispatch :Dispatch<AnyAction>, array: number[]) => {
    steps.forEach((step, i) => {
        console.log(step);
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
