import React, { useState } from "react";
import { Slider, Button, Divider } from "@mui/material";
import Menu from '@mui/material/Menu';
import { MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TypeOfAlgorithm } from "../algorithms/algorithm";
import { useDispatch } from "react-redux";
import algorithm, { setAlgorithm } from "../slice/algorithm/algorithmSlice";
import { setSize } from "../slice/sizearray/sizeArraySlice";




export const ToolBar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);
    const dispatch = useDispatch();


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
    return(
        <div>
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
                    .map(key => {
                        return (
                            <MenuItem onClick={() => chooseAlgorithm(TypeOfAlgorithm[Number(key)])} disableRipple>
                                {TypeOfAlgorithm[Number(key)]} sort
                            </MenuItem >
                        );
                })}
            </Menu>
        </div>
    );
}