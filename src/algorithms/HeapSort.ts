import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { setArrayStep } from "../slice/arraysteps/arrayStepsSlice";
import { Isteps } from "./algorithm";

export const HeapSort = (arr: number[], dispatch:Dispatch<AnyAction>, speed: number) =>{
    let steps:Isteps[] = [];
    let array = [...arr];
    let arrayLength = array.length;
    buildHeap(array, steps);

    for (let i = arrayLength - 1; i > 0; i--) {
        let tmp = array[i];
        array[i] = array[0];
        array[0] = tmp;
        maxHeap(array, i, 0, steps);
    }
    steps.push({
        array: [...array], 
        pair: [],
        pairIndex:[],
        isSorted: true
    });

    dispatchArray(steps, speed, dispatch, array);
}

const buildHeap = (array: number[] , steps: Isteps[]) => {
    let length = array.length;
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        maxHeap(array, length, i, steps);
    }

}
const maxHeap = (array: number[], length: number, i: number, steps: Isteps[]) => {
    let left = 2 * i + 1
    let right = 2 * i + 2
    let max = i
    if(left < length && array[left] > array[max])
        max = left
    if(right < length && array[right] > array[max])
        max = right
    if(max != i){
        let pair = [array[i], array[max]]
        let tmp = array[i];
        array[i] = array[max];
        array[max] = tmp;

        steps.push({
            array: [...array], 
            pair: pair,
            pairIndex:[],
            isSorted: false
        });
        maxHeap(array, length, max, steps);
    }
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