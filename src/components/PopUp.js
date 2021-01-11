import React,{useState} from 'react'

function PopUp() {
    const [location, setLocation] = useState("Helsinki,Finland");
    const [focus,setFocus]=useState(false)
    console.log(focus)
    return (
        <div className="pop-up">
            <div className="search">
                <input type="text" name="" id="" placeholder="Add Location" value= {location} onFocus={() => setFocus(true)}/>
                <input type="text" name="" id="" placeholder="Add Guest" />
                <button onClick={() =>setFocus(false)}>Search</button>
            </div>

            <div className="list">
                {focus && 
                <>
                    <li onClick={() => setLocation("Helsinki,Finland")}>Helsinki,Finland</li>
                    <li onClick={() => setLocation("Turku,Finland")} >Turku,Finland</li>
                    <li onClick={() => setLocation("Oulu,Finland")}>Oulu,Finland</li>
                    <li onClick={() => setLocation("Vaasa,Finland")}>Vaasa,Finland</li>
                </>}
            </div>

        </div>
    )
}

export default PopUp
