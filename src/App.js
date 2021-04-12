import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export let UserContext = '';

function App() {
  const [location, setLocation] = useState('');

  const list = [
    'Helsinki,Finland',
    'Turku,Finland',
    'Oulu,Finland',
    'Vaasa,Finland',
  ];
  const [count, setCount] = useState('');
  UserContext = React.createContext({
    location,
    list,
    updateLocation,
    count,
    updateCount,
  });

  return (
    <div className="App">
      <UserContext.Provider
        value={{ location, list, updateLocation, count, updateCount }}>
        <Header />
        <Main />
        <Footer />
      </UserContext.Provider>
    </div>
  );

  function updateLocation(e) {
    let value = e;
    value = value.split(',');
    // console.log(value[0])
    setLocation(value[0]);
  }

  function updateCount(e) {
    // console.log(e)
    setCount(`${e} guests`);
  }
}

export default App;
