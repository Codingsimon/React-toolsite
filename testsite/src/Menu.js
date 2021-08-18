import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

export default class Menu extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>Codingsimons Tools</Toolbar>
            </AppBar >
        )
    }
}
