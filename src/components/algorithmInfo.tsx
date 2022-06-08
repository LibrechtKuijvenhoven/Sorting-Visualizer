import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

export const AlgoritmInfo = () => {
    const props = useSelector((state: RootState) => ({
        AlgoritmInfo: state.pReducer.algorithm.algorithm
    }))
    return(
        <h1>{props.AlgoritmInfo?.name}</h1>
    )

}