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
    const isSorting = useSelector((state: RootState) => (state.pReducer.isSorting))
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [algorithm, setAlgorithmText] = useState<string>("Algorithms");
    const [sizeOfArray, setSizeOfArray] = useState<number>(100);
    const [speedOfSort, setSpeedOfSort] = useState<number>(10);
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
    const chooseSpeedToSort = (speed: number | number[]) => { 
        if (typeof speed === "number" ){    
            setSpeedOfSort(speed);
        }
    };
    const sort = () => {       
        dispatchSort(state.arraySteps.array, dispatch, speedOfSort, state.algorithm.algorithm!);
    }
    const generateNewArray = () => {
        let generated =  generateArray(sizeOfArray);
        dispatch(setArrayStep({
            array: generated, 
            pair: [], 
            isSorted: false
        }));  
    }
    return(
        <div className={isSorting ? "ToolBox-container disabled" : "ToolBox-container" } > 
            <p className="size-of-array">Size of array: {sizeOfArray}</p>
            <Slider className="slider" aria-label="SizeOfArray"
                defaultValue={sizeOfArray}
                min={10}
                max={200}
                onChange = {(e,v) => chooseSizeOfArrayToSort(v)}
            />
            <p className="speed-of-sort">Sorting speed: {speedOfSort}ms</p>
            <Slider className="slider" aria-label="SpeedOfSort"
                defaultValue={speedOfSort}
                min={10}
                max={200}
                onChange = {(e,v) => chooseSpeedToSort(v)}
            />
            <Button aria-controls={isOpen ? 'algo-menu' : undefined}
                className="type-selector"
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
                            <MenuItem onClick={() => chooseAlgorithm(TypeOfAlgorithm[Number(key)])} key={index} disableRipple 
                            className={algorithm === TypeOfAlgorithm[Number(key)] ? "active" : ""}>
                                {TypeOfAlgorithm[Number(key)]} sort
                            </MenuItem >
                        );
                })}
            </Menu>
            <Button className="sort-button" onClick={sort}>Sort</Button>
            <Button className="new-array-button" onClick={generateNewArray}>Generate New Array</Button>
        </div>
    );
}