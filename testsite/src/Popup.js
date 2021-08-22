import React, { useState, useEffect, Component } from 'react'
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import styles from "./Popup.module.css"
import { makeStyles } from '@material-ui/core/styles'
import { BsX } from "react-icons/bs";
import Axios from "axios"
import axios from 'axios';
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles({
    popupStyle: {
        "background-color": "rgb(255 229 155)",
        width: "500px",
        height: "500px",
        margin: "50px auto",
        // display: "flex",
        // "justify-content": "center",
        // "align-items": "center",
    },
    close: {
        float: "right",
    },
    title: {
        float: "left",
        margin: "10px",
    },
    img: {
        display: "block",
        height: "150px",
        margin: "0 auto",
        textAlign: "center",
    },
    box: {
        width: "400px",
        height: "400px",
        margin: "70px 50px",
        // "background-color": "green",
        position: "absolute",
    },
    btn: {
        margin: "10px auto",
        display: "block",
    },
    inputField: {
        margin: "10px 100px",
        display: "block",
    },
    line: {
        "border-top": "2px dashed #a8a8a8",
      },
})


const Popup = ({ setBudget, setCategoryName }) => {

    const [cat, setCat] = useState({});

    const fetchCat = () => {
        axios.get("https://thatcopy.pw/catapi/rest/")
            .then(response => {
                setCat(response.data)
                 console.log(cat)
            });
    };

    useEffect(() => {
        axios.get("https://thatcopy.pw/catapi/rest/")
            .then(response => {
                setCat(response.data)
                 console.log(cat)
            });
    }, []);

    const classes = useStyles();


        return (
            <Paper className={classes.popupStyle} elevation={3}>
                <h2 className={classes.title} >Edit budget</h2>
                <BsX className={classes.close} size={50} />
                <div className={classes.box}>
                    


                    <form>

                        <img className={classes.img} src={cat.url} alt="no image showing" />   

                        <Button className={classes.btn} onClick={ fetchCat } color="primary" variant="contained">Change cat avatar</Button>

                    
                        <TextField onChange={(event) => setBudget(event.target.value)} className={classes.inputField} type="number" id="outlined-basic" label="Amount in €" variant="outlined" />
                    
                        <TextField onChange={(event) => setCategoryName(event.target.value)} name="name" className={classes.inputField} id="outlined-basic" label="Budget name" variant="outlined" />
                    
                        <hr className={classes.line} ></hr>
                    
                        <Button /*onClick={() => setBudget("df")}*/  type="submit" className={classes.btn} color="primary" variant="contained">Submit</Button>
                    </form>
                </div>
            </Paper>
        )
}

export default Popup;
