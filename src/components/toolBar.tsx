import React, { useEffect, useState } from "react";
import { Slider, Button } from "@mui/material";
import Menu from '@mui/material/Menu';
import { MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getSortingAlgotihm, TypeOfAlgorithm } from "../algorithms/algorithm";
import { useDispatch, useSelector } from "react-redux";
import "../styles/ToolBar.css";
import { RootState } from "../store/store";
import { generateArray } from "../utils/array";
import { setArrayStep } from "../slice/arraysteps/arrayStepsSlice";
import { dispatchSort } from "../algorithms/dispatchSort";
import { setAlgorithm } from "../slice/algorithm/algorithmSlice";

export const ToolBar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [algorithm, setAlgorithmText] = useState("Algorithms");
    const [sizeOfArray, setSizeOfArray] = useState(50);
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.pReducer)
    const isOpen = Boolean(anchorEl);

    useEffect(() => {
        generateNewArray()
    },[]);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const chooseAlgorithm = (TypeOfAlgorithm: any) => {
        setAlgorithmText(TypeOfAlgorithm + " sort");
        dispatch(setAlgorithm(getSortingAlgotihm(TypeOfAlgorithm)));
        setAnchorEl(null);
    };
    const chooseSizeOfArrayToSort = (size: number | number[]) => { 
        if (typeof size === "number" ){    
            setSizeOfArray(size);
            generateNewArray();
        }
    };
    const sort = () => {       
        dispatchSort(state.arraySteps.array, dispatch, 25, state.algorithm.algorithm!);
    }
    const generateNewArray = () => {
        let generated =  generateArray(sizeOfArray);
        dispatch(setArrayStep({
            array: generated, 
            pair: [], 
            pairIndex: [], 
            isSorted: false
        }));  
    }
    return(
        <div className="ToolBox-container">
            <p>Size of array: {sizeOfArray}</p>
            <Slider aria-label="SizeOfArray"
                defaultValue={50}
                min={10}
                max={100}
                onChange = {(e,v) => chooseSizeOfArrayToSort(v)}
            />
            <Button aria-controls={isOpen ? 'algo-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                variant="contained"
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >{algorithm}
            </Button>
            <Menu id="algo-menu" 
                MenuListProps={{
                    'aria-labelledby': 'algo-menu-button',
                }}
                anchorEl={anchorEl}
                open={isOpen} 
                onClose={handleClose}
                >
                {Object.keys(TypeOfAlgorithm).filter(key =>!isNaN(Number(key)))
                    .map((key, index) => {
                        return (
                            <MenuItem onClick={() => chooseAlgorithm(TypeOfAlgorithm[Number(key)])} key={index} disableRipple>
                                {TypeOfAlgorithm[Number(key)]} sort
                            </MenuItem >
                        );
                })}
            </Menu>
            <Button onClick={sort}>Sort</Button>
            <Button onClick={generateNewArray}>Generate New Array</Button>
        </div>
    );
}