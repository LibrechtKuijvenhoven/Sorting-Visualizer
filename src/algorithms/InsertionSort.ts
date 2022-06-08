import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { setArrayStep } from "../slice/arraysteps/arrayStepsSlice";
import { Isteps} from "./algorithm";

export const InsertionSort = (arr: number[], dispatch:Dispatch<AnyAction>, speed: number) => {
    let steps: Isteps[] = [];
    let array = [...arr];       
    for(let i = 0; i < arr.length;i++){
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
    dispatchArray(steps,speed ,dispatch, array);
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
