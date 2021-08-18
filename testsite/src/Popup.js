import React, { Component } from 'react'
import Paper from "@material-ui/core/Paper"
import styles from "./Popup.module.css"
import { makeStyles } from '@material-ui/core/styles'
import { BsX } from "react-icons/bs";

const useStyles = makeStyles({
    popupStyle: {
        "background-color": "rgb(255 229 155)",
        width: "500px",
        height: "500px",
        margin: "50px auto",
    },
    close: {
        float: "right",
        size: "70",
    }
})



export default function Popup() {

    const classes = useStyles();

        return (
            <Paper className={styles.h1} className={classes.popupStyle} elevation={3}>
                <BsX className={classes.close} size={70}/>
                <h1>Kontotyp</h1>
                <h2>Budget 400€</h2>
            </Paper>
        )
}
