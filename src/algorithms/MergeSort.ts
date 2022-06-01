import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { setArrayStep } from "../slice/arraysteps/arrayStepsSlice";
import { Isteps } from "./algorithm";


export const MergeSort = (arr: number[], dispatch:Dispatch<AnyAction>) => {
    let steps: Isteps[] = [];
    let array = [...arr];   


}
const sort = (arr: number[], left: number, right: number) => {
    if(left >= right) return;
    let middle = left + (right -left  / 2);
    sort(arr,left,middle);
    sort(arr, middle+1, right);
    merge(arr, left , middle ,right);
}
const merge = (arr: number[], left: number, middle: number, right : number) => {
    let array: number[] = [];
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle + 1, arr.length);
    // while(leftArr.length && rightArr.length){
    //     if(leftArr[i] <)
    // }


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

