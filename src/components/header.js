import React from 'react'
import { Link } from 'gatsby'

import './bootstrap.min.css'


const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>Tanja Dinic</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header