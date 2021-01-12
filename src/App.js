import React,{ useState } from 'react'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export let UserContext =''

function App() {
  const [location, setLocation] = useState("");

  const list = [
    'Helsinki,Finland',
    'Turku,Finland',
    'Oulu,Finland',
    'Vaasa,Finland'
  ]
  UserContext = React.createContext({location,list,updateLocation})

  return (
    <div className="App">
      <UserContext.Provider value={{location,list,updateLocation}}>
      <Header />
      <Main />
      <Footer />
      </UserContext.Provider>
    </div>
  );

  function updateLocation(e){
    let value = e.target.outerText;
    value =value.split(',')
    console.log(value[0])
    setLocation(value[0])
  }

}


export default App;
