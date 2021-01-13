import React,{useState,useContext,useEffect} from 'react'
import { UserContext } from '../App'

function PopUp({close}) {
    const Context=useContext(UserContext)
    const [focus,setFocus]=useState({
        city:false,
        guest:false
    });
    const [guest,setGuest]=useState('');
    const [adult,setAdult]= useState(0);
    const [child,setChild]= useState(0);

    useEffect(() => {
        setGuest(adult + child === 0 ? '' : adult + child)
    }, [adult,child])

    const [value,setValue]=useState('')
    console.log(focus)
    console.log(Context.updateLocation)
    return (
        <div className="overlay">
            {/* <button className="close" onClick={() => close()}>X</button> */}
        <div className="pop-up">
            <div className="search">
                <input type="text" name="" id="" placeholder="Add Location" value= {value} onMouseOver={() => setFocus({city:true})}/>
                <input type="text" name="" id="" placeholder="Add Guest" value={guest} onMouseOver={() => setFocus({guest:true})}/>
                <button onClick={() =>Context.updateLocation(value)}>Search</button>
            </div>

            <div className="list">
                {focus.city && Context.list.map(list => {
                    return(
                    <>
                            <li onClick={(e) => setValue(e.target.outerText)} value={list}>{list}</li>
                    </>
                    )
                })}
                
            </div>
            
                <div className="guest">
                        {
                            focus.guest &&
                            <div className="guests">
                                <div className="guest">
                                    <label>Adults</label>
                                    <p>Ages 13 or above</p>
                                    <div className="count">
                                        <button onClick={() =>setAdult(adult -1)}>-</button>
                                        <p>{adult}</p>
                                        <button onClick={() =>setAdult(adult +1)}>+</button>
                                    </div>
                                </div>
                                <div className="guest">
                                    <label>Adults</label>
                                    <p>Ages 13 or above</p>
                                    <div className="count">
                                        <button onClick={() =>setChild(child -1)}>-</button>
                                        <p>{child}</p>
                                        <button onClick={() =>setChild(child +1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                </div>

        </div>
        </div>
    )
}

export default PopUp
