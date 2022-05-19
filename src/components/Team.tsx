import React, {FormEvent, useState} from "react";
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import InputAdornment from '@mui/material/InputAdornment';
import {Button, Paper} from "@mui/material";

import {ITeam} from "../types/team";

type TeamProps = {
    team: ITeam;
    handleAddPoint: (name: string, point: number, id: number) => void;
    handleSubPoint: (name: string, point: number, id: number) => void;
}
const Team: React.FC<TeamProps> = (props: TeamProps) => {
    const [point, setPoint] = useState<number | null>(null);
    const [error, setError] = useState(false);
    const {name, points, id} = props.team;

    const handleAdd = (e: FormEvent) => {
        e.preventDefault();
        if (!point) {
            setError(true);
            return;
        }
        let newPoint = points + point;
        props.handleAddPoint(name, newPoint, id);
        setPoint(null);
    }

    const handleSub = (e: FormEvent) => {
        e.preventDefault();
        if (!point) {
            setError(true)
            return;
        }
        let newPoint = points - point;
        props.handleSubPoint(name, newPoint, id);
        setPoint(null);
    }

    return (
        <Grid
            item
            xs={12} sm={6} md={4}
        >
            <Paper
                elevation={5}
                style={{
                    paddingTop: '5%',
                    paddingBottom: '8%',
                    borderRadius: 10
                }}
            >
                <Grid
                    container
                    direction='column'
                    alignItems="center"
                >
                    <h2>{name}</h2>
                    <h4>${points}</h4>
                    <TextField
                        error={error}
                        id={error ? "outlined-error-helper-text" : "outlined-basic"}
                        helperText={error ? "Cannot be empty!" : null}
                        onFocus={() => setError(false)}
                        label={"Points"}
                        type="number"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        size={'small'}
                        value={point ? point : ''}
                        style={{
                            marginTop: '2%',
                            marginBottom: '2%'
                        }}
                        variant="outlined"
                        onChange={(e) => setPoint(parseFloat(e.target.value))}
                    />
                    <Grid
                        container
                        xs={6}
                        alignItems="center"
                        justifyContent="space-evenly"
                    >
                        <Grid item>
                            <Button
                                variant="contained"
                                color="error"
                                startIcon={<RemoveCircleOutlineIcon/>}
                                size="small"
                                onClick={handleSub}
                            >Sub</Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="success"
                                startIcon={<AddCircleOutlineIcon/>}
                                size="small"
                                onClick={handleAdd}
                            >Add</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}
export default Team;