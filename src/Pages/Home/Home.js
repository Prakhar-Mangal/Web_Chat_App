import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Home.js'

export default class Home extends Component {
    render() {
        return (
            <div className="App">
            <a><Link to="/login">Login</Link></a>
            </div>
        )
    }
}
