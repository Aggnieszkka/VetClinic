import React, {useState} from 'react';

import MainMenu from './MainMenu/MainMenu';
import Content from './Content/Content';
import './App.css';

function App() {
  return (
    <div className="App">
     <MainMenu/>
     <Content/>
    </div>
  );
}

export default App;
