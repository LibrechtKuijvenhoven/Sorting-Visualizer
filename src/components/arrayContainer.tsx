import { Card } from "@mui/material";
import { blue, green, yellow } from "@mui/material/colors";
import React from "react"
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import "../styles/Array.css";

export const Arraycontainer = () => {
    const props = useSelector((state: RootState) => ({
        array: state.pReducer.arraySteps.array,
        pair: state.pReducer.arraySteps.pair,
        isSorted: state.pReducer.arraySteps.isSorted
    }))
    
    return(
        <Card className="array-card">
            <div className="Array-Bars-Container" >
                {props.array.map((v,i) => {         
                    return(
                        <div className={"Array-Bar "} key={i} style={
                            {height: (v*2.5),                            
                            background: 
                                props.isSorted && props.pair?.includes(v) ? green[500] : 
                                                    props.pair?.includes(v) ? yellow[500] : blue[500]}}>
                            {props.array.length < 30 ? v : ''}
                        </div>
                        )
                    })
                }
            </div>
        </Card>
    )
}
