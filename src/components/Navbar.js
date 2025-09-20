import React, { Component } from 'react'
import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'


export class Navbar extends Component {
    render() {
        return (
            <>
                <nav>
                    <div className="logo">
                    <Link to={"/"}><img src={`${logo}`} alt="UniverseYatra" title='UniverseYatra' /></Link>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </>
        )
    }
}
