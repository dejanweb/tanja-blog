import React from 'react'

import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import './layout.css'
import './bootstrap.min.css'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        {props.children}
                    </div>
                    <div className="col-12 col-md-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout