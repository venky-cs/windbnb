import React, { useState } from 'react';
import stays from '../stays.json';

function Main() {
    const [state, setState] = useState(stays)
    return (
        <div className="main">
            <div className="head">
            <h3 className="main-title">Stays in Finland</h3>
            <p className="count">12+ stays</p>
            </div>


            <div className="cards">
            {state.map((stay) => {
                // console.log(stay)
                return (
                <div className = "card" >
                <img src={stay.photo} alt="pic"/>
                <h4 className='title'>{stay.title}</h4>
            </div>
                )
            })}
            </div>
            
        </div>
    )

}

export default Main
