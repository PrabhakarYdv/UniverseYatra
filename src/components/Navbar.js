import React, { Component } from 'react'
import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    handleCategoryClick = (event) => {
        event.preventDefault();
        const category = event.currentTarget.dataset.category
        alert(`${category.toUpperCase()}: Under Maintenance, will come back soon.`)
    }

    render() {

        return (
            <>
                <nav>
                    <div className="logo">
                        <Link to={"/"}><img src={`${logo}`} alt="UniverseYatra" title='UniverseYatra' /></Link>
                    </div>
                    <div className="category-nav">
                        <ul>
                            <li><Link to={"/technology"} data-category="technology" onClick={this.handleCategoryClick}>Technology</Link></li>
                            <li><Link to={"/business"} data-category="business" onClick={this.handleCategoryClick}>Business</Link></li>
                            <li><Link to={"/sports"} data-category="sports" onClick={this.handleCategoryClick}>Sports</Link></li>
                            <li><Link to={"/science"} data-category="science" onClick={this.handleCategoryClick}>Science</Link></li>
                            <li><Link to={"/health"} data-category="health" onClick={this.handleCategoryClick}>Health</Link></li>
                            <li><Link to={"/entertainment"} data-category="entertainment" onClick={this.handleCategoryClick}>Entertainment</Link></li>
                        </ul>
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
