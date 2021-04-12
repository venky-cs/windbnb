import React, { useState, useContext, useEffect } from 'react';
import stays from '../stays.json';
import { UserContext } from '../App';

import StarRateIcon from '@material-ui/icons/StarRate';

function Main() {
  const [state, setState] = useState(stays);
  const Context = useContext(UserContext);
  let location = Context.location;
  location = location.split(',');
  location = location[0];

  useEffect(() => {
    let filtered = stays.filter((stay) => stay.city === location);
    // console.log(filtered)
    setState(filtered.length === 0 ? stays : filtered);
  }, [location]);

  return (
    <div className="main">
      <div className="head">
        <h3 className="main-title">Stays in Finland</h3>
        <p className="count">12+ stays</p>
      </div>

      <div className="cards">
        {state.map((stay,i) => {
          // console.log(stay)
          return (
            <div className="card" key={i}>
              <img src={stay.photo} alt="pic" />
              <div className="card-info">
                {stay.superHost && <p className="super">super host</p>}
                <p className="type">
                  {stay.type}
                  {stay.beds && ` .${stay.beds}beds`}
                </p>
                <p className="rating">
                  <StarRateIcon id="red" />
                  {stay.rating}
                </p>
              </div>
              <h4 className="title">{stay.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
