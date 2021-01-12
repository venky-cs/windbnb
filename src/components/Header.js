import React, { useState,useContext } from 'react'
import logo from './logo.png'
import PopUp from './PopUp'

import {UserContext} from '../App'

function Header() {
    const [popup, setPopup] = useState(false)
    console.log(popup)

    const Context=useContext(UserContext)
    return (
        <div className="header">
            <div className="logo">
            <img src={logo} alt="logo"/>
            </div>

            <div className="search">
                <input type="text" name="" id="" placeholder="Add Location" value={Context.location} onClick={() => setPopup(true)}/>
                <input type="text" name="" id="" placeholder="Add Guest" onClick={() => setPopup(true)}/>
                <button>Search</button>
            </div>

            {popup && <PopUp close={closePopup}/>}
        </div>
    )

    function closePopup(){
        setPopup(false);
    }
}

export default Header
