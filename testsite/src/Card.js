import React, { Component } from 'react'
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonStyle: {
        position: "absolute",
        bottom: "0px",
        margin: "0 200px",
    },
    card: {
        width: "500px",
        height: "150px",
        backgroundColor: "green",
        margin: "50px auto",
        display: "flex",
    },
    column: {
        backgroundColor: "yellow",
        width: "33%",
        "border-style": "groove",
        borderWidth: 2,
    },
    avatar: {
        "max-width": "100%",
        "max-height": "100%",
    },
    btn: {
        margin: "0 auto",
        display: "block",
    }
})

export default function Card(props) {
    const classes = useStyles();
    return (
            <>
            <Paper className={classes.card} elevation={3} >
                {/* <h1>Budget </h1> */}

                <div className={classes.column} ><p>Name</p><p>{props.name}</p></div>
                
                <div className={classes.column} ><p>€</p><p>{props.amount}</p></div>
                
                <div className={classes.column} ><img className={classes.avatar} src={props.cat.url} alt="cat image" /></div>
                
            </Paper>
           
            </>
            )
  }

