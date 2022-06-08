import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { setArrayStep } from "../slice/arraysteps/arrayStepsSlice";
import { Isteps } from "./algorithm";


export const MergeSort = (arr: number[], dispatch:Dispatch<AnyAction>) => {

    let steps: Isteps[] = [];
    let array = [...arr];   
    sort(array,  0, array.length - 1)
    steps.push({
        array: [...array],
        pair: [0],
        pairIndex: [],
        isSorted: false
    });
    dispatchArray(steps, 200,dispatch, arr);
}
const sort = (arr: number[], left: number, right: number,) => {
    if(left >= right) return;
    let middle = Math.floor(left + (right-left)/2);
    sort(arr, left, middle);
    sort(arr, middle+1, right);
    merge(arr, left, middle, right);
}
const merge = (arr: number[], left: number, middle: number, right : number) => {
    let array: number[] = [];
    let leftArr = arr.slice(left, middle);
    let rightArr = arr.slice(middle + 1, right);
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            array.push(leftArr.shift()!)
        }else{
            array.push(rightArr.shift()!)
        }
    }
    for(let i = left; i < right; i++){
        let tmp = array.shift()!
        arr[i] = tmp === undefined ? arr[i] : tmp
    }
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

