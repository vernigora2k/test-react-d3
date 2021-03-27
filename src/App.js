import React, { useState } from 'react';
import './App.css';
import BarChart from './pages/barchart';

export const Context = React.createContext()

function App() {

  const [isEquitiesChecked, setEquitiesChecked] = useState(false)
  const [isSynapticsChecked, setSynapticsChecked] = useState(false)
  const handleEquitiesClick = () => setEquitiesChecked(!isEquitiesChecked)
  const handleSynapticsClick = () => setSynapticsChecked(!isSynapticsChecked)

  return (
    <Context.Provider value={{isEquitiesChecked, handleEquitiesClick, isSynapticsChecked, handleSynapticsClick}} >
      <div className="App">
        <BarChart />
      </div>
    </Context.Provider>
  );
}

export default App;
