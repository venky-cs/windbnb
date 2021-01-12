import React,{useState,useContext} from 'react'
import { UserContext } from '../App'

function PopUp({close}) {
    const Context=useContext(UserContext)
    const [focus,setFocus]=useState(false);
    const [guest,setGuest]=useState('12');
    console.log(focus)
    console.log(Context.updateLocation)
    return (
        <div className="overlay">
            <button className="close" onClick={() => close()}>X</button>
        <div className="pop-up">
            <div className="search">
                <input type="text" name="" id="" placeholder="Add Location" value= {Context.location} onFocus={() => setFocus(true)}/>
                <input type="text" name="" id="" placeholder="Add Guest" value={guest} onFocus={() => setFocus(true)}/>
                <button onClick={() =>setFocus(false)}>Search</button>
            </div>

            <div className="list">
                {focus && Context.list.map(list => {
                    return(
                    <>
                    <li onClick={(e) => Context.updateLocation(e)} value={list}>{list}</li>
                    </>
                    )
                })}
            </div>

        </div>
        </div>
    )
}

export default PopUp
