import React, { useState } from 'react'
import logo from './logo.png'
import PopUp from './PopUp'

function Header() {
    const [popup, setPopup] = useState(false)
    console.log(popup)
    return (
        <div className="header">
            <div className="logo">
            <img src={logo} alt="logo"/>
            </div>

            <div className="search">
                <input type="text" name="" id="" placeholder="Add Location" onClick={() => setPopup(true)}/>
                <input type="text" name="" id="" placeholder="Add Guest" onClick={() => setPopup(true)}/>
                <button>Search</button>
            </div>

            {popup && <PopUp />}
        </div>
    )
}

export default Header
