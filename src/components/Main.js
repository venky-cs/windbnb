import React, { useState,useEffect } from 'react';
import stays from '../stays.json';
import SuperHost from './SuperHost';


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
                <div className = "card-info">
                    {stay.superHost && <SuperHost />}
                    <p>{stay.type}{stay.beds && ` .${stay.beds}beds`}</p>
                    <p>{stay.rating}</p>
                </div>
                <h4 className='title'>{stay.title}</h4>
            </div>

)
            })}

            </div>

            
        </div>
    )

}

export default Main
