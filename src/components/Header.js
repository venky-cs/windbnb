import React from 'react'
import logo from './logo.png'

function Header() {
    return (
        <div className="header">
            <div className="logo">
            <img src={logo} alt="logo"/>
            </div>

            <div className="search">
                <input type="text" name="" id=""/>
                <input type="text" name="" id=""/>
                <button>Search</button>
            </div>
        </div>
    )
}

export default Header
