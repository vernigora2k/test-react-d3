import React, { useState } from 'react';
import './App.css';
import BarChart from './pages/barchart';

export const Context = React.createContext()

function App() {

  const [isEquitiesChecked, setEquitiesChecked] = useState(false)
  const handleEquitiesClick = () => setEquitiesChecked(!isEquitiesChecked)

  return (
    <Context.Provider value={{isEquitiesChecked, handleEquitiesClick}} >
      <div className="App">
        <BarChart />
      </div>
    </Context.Provider>
  );
}

export default App;
