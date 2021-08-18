import React, { Component } from 'react'
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    formStyle: {
        position: "absolute",
        bottom: "0px",
        margin: "0 15px",
    },
    buttonStyle: {
        position: "absolute",
        bottom: "0px",
        margin: "0 200px",
    }
})

export default function Card() {
    const classes = useStyles();
    return (
            <>
            <Paper className="card" elevation={3} >
                <h1>Budget 400€</h1>
                <h2>Kontotyp</h2>
                {/* <form noValidate autoComplete="off">
                    <TextField className={classes.formStyle} id="outlined-basic" label="Outlined" variant="outlined" />
                    <Button className={classes.buttonStyle} variant="contained" color="primary">Submit</Button>
                </form> */}
            </Paper>
            </>
            )
  }

