import React from "react";
import { Slider, Button } from "@mui/material";
import Menu from '@mui/material/Menu';
import { MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TypeOfAlgorithm } from "../algorithms/algorithm";
import { useDispatch, useSelector } from "react-redux";
import { setAlgorithm } from "../slice/algorithm/algorithmSlice";
import { setSize } from "../slice/sizearray/sizeArraySlice";
import "../styles/ToolBar.css";
import { RootState } from "../store/store";
import { generateArray } from "../utils/array";
import { setArrayToSort } from "../slice/arraytosort/arrayToSortSlice";
import { BubbleSort } from "../algorithms/BubbleSort";
import { setArrayStep } from "../slice/arraysteps/arrayStepsSlice";
import { MergeSort } from "../algorithms/MergeSort";
import { HeapSort } from "../algorithms/HeapSort";
import { InsertionSort } from "../algorithms/InsertionSort";

export const ToolBar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);
    const dispatch = useDispatch();
    const idk = useSelector((state: RootState) => state.pReducer)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const chooseAlgorithm = (TypeOfAlgorithm: any) => {
        dispatch(setAlgorithm({algorithm: TypeOfAlgorithm}));
        setAnchorEl(null);
    };
    const chooseSizeOfArrayToSort = (size: number | number[]) => {
        console.log(size);
        
        dispatch(setSize({size : size}))
    };
    const sort = () => {       
        MergeSort(idk.arrayToSort.arrayToSort, dispatch);
        BubbleSort(idk.arrayToSort.arrayToSort, dispatch, 150);
    }
    const generateNewArray = () => {
        let generated =  generateArray(30);
        
        dispatch(setArrayToSort({arrayToSort: generated}));  
        dispatch(setArrayStep({array: generated}));  
    }
    return(
        <div className="ToolBox-container">
            <Slider
                aria-label="Temperature"
                defaultValue={50}
                step={10}
                min={10}
                max={110}
                onChange = {(e,v) => chooseSizeOfArrayToSort(v)}
            />
            <Button 
                aria-controls={isOpen ? 'algo-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                variant="contained"
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Algoritms
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
            <Button onClick={generateNewArray}>NewArray</Button>
        </div>
    );
}