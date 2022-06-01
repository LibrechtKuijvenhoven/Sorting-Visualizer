import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { setArrayStep } from "../slice/arraysteps/arrayStepsSlice";
import { Isteps} from "./algorithm";

export const BubbleSort = (arr: number[], dispatch:Dispatch<AnyAction>) => {
    let steps: Isteps[] = [];
    let array = [...arr];       
    for(let i = 0; i < arr.length;i++){
        for (let j = 0; j < arr.length - 1; j++) {
            if(array[j] > array[j+1]){
                let pair = [array[j], array[j+1]]
                let tmparr = array.splice(0)
                let tmp =tmparr[j]
                tmparr[j] = tmparr[j+1]
                tmparr[j+1] = tmp
                steps.push({
                    array: [...tmparr], 
                    pair: pair,
                    pairIndex:[j, j+1],
                    isSorted: false
                });
                array = tmparr
            }
        }
    }  
    steps.push({
        array: [...array], 
        pair: [],
        pairIndex:[],
        isSorted: true
    });
    dispatchArray(steps,50,dispatch, array);
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
