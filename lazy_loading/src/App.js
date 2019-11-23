import React from 'react';
import { BrowserRouter } from "react-router-dom";

import MainRoute  from './Cpmponants/route';
import Menu from './Cpmponants/menu';

const App =() => {
  return (
    <div className="App">
    <BrowserRouter>
          <Menu/>
          <MainRoute /> 
    </BrowserRouter>
    </div>
  );
}
export default App;
