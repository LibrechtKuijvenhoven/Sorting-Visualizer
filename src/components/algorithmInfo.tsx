import { Card, CardContent, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import "../styles/info.css"

export const AlgoritmInfo = () => {
    const props = useSelector((state: RootState) => ({
        AlgoritmInfo: state.pReducer.algorithm.algorithm
    }))
    const serializeString = (string:string | undefined) => {
        if(string?.match(/[A-Za-z0-9]+\^[0-9a-zA-Z.]+/)){
            let strings = string.split("^")
            let after = strings[1].split(" ")
            return <span>{strings[0]}<sup>{after[0]}</sup>{after[1]}</span>
        }
        return <span>{string}</span>
    }
    return(
        <Card className="info-card">
            <CardContent>
                <Typography variant="h2" component="div">
                    {props.AlgoritmInfo?.name}
                </Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Best case</TableCell>
                            <TableCell align="right">{serializeString(props.AlgoritmInfo?.bestCase)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Average case</TableCell>
                            <TableCell align="right">{serializeString(props.AlgoritmInfo?.average)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Worst case</TableCell>
                            <TableCell align="right">{serializeString(props.AlgoritmInfo?.worstCase)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Memory space</TableCell>
                            <TableCell align="right">{serializeString(props.AlgoritmInfo?.memory)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )

}