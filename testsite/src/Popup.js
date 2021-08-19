import React, { useState, useEffect, Component } from 'react'
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import styles from "./Popup.module.css"
import { makeStyles } from '@material-ui/core/styles'
import { BsX } from "react-icons/bs";
import Axios from "axios"
import axios from 'axios';

const useStyles = makeStyles({
    popupStyle: {
        "background-color": "rgb(255 229 155)",
        width: "500px",
        height: "500px",
        margin: "50px auto",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
    },
    close: {
        float: "right",
        size: "70",
    },
    img: {
        display: "block",
        height: "200px",
        margin: "0 auto",
        textAlign: "center",
    },
    box: {
        width: "400px",
        height: "400px",
        margin: "auto",
        "background-color": "green",
    },
})



export default function Popup() {

    const [cat, setCat] = useState({});

    const onClick = () => {
        axios.get("https://thatcopy.pw/catapi/rest/")
            .then(response => {
                setCat(response.data)
                 console.log(cat)
            });
    };

    useEffect(() => {

    }, []);

    
    const classes = useStyles();

        return (
            <Paper className={classes.popupStyle} elevation={3}>
                {/* <BsX className={classes.close} size={70}/> */}
                <div className={classes.box}>
                    <img className={classes.img} src={cat.url} alt="no image showing" />
                    {/* <h1>Kontotyp</h1>
                    <h2>Budget 400€</h2> */}
                    <Button onClick={ onClick } color="primary" variant="contained">Change cat</Button>
                </div>
            </Paper>
        )
}
