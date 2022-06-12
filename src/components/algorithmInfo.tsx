import { Card, CardContent, Table, TableCell, TableRow, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

export const AlgoritmInfo = () => {
    const props = useSelector((state: RootState) => ({
        AlgoritmInfo: state.pReducer.algorithm.algorithm
    }))
    return(
        <>
            <Card>
                <CardContent>
                    <Typography variant="h1" component="div">
                        {props.AlgoritmInfo?.name}
                    </Typography>
                    <Table>
                        <TableRow>
                            <TableCell>Best case</TableCell>
                            <TableCell align="right">{props.AlgoritmInfo?.bestCase}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Average case</TableCell>
                            <TableCell align="right">{props.AlgoritmInfo?.average}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Worst case</TableCell>
                            <TableCell align="right">{props.AlgoritmInfo?.worstCase}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Memory space</TableCell>
                            <TableCell align="right">{props.AlgoritmInfo?.memory}</TableCell>
                        </TableRow>
                    </Table>
                </CardContent>
            </Card>
        </>
    )

}