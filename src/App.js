// App.js
import React from 'react';
import Navigate from './Navigate.js';
import './App.css';
import Usescroll from './CustomHook.js';
import Icons from './Icons.js';



function App() {


  Usescroll();
 
  return (
    <div className="App">
      <header className="App-header">
        <div className="Icon">
        <Icons />
        </div>
        <div>
          <Navigate/>
        </div>
      </header>
      
      
    </div>
  );
}

export default App;

