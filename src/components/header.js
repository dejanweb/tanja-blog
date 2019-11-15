import React from 'react'
import { Link } from 'gatsby'

import HeaderStyles from './header.module.scss'
import './bootstrap.min.css'


const Header = () => {
    return (
        <header className={HeaderStyles.headstyle}>
            <div className="container text-center">
                <h1 className={HeaderStyles.heroheader}>Tanja Dinic</h1>
                <ul className="list-unstyled d-flex justify-content-center pb-2">
                    <li>
                        <Link className={HeaderStyles.link} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={HeaderStyles.link} to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header