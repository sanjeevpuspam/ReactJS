import React from 'react';
import {Route} from "react-router-dom";

import Home from './Home';
import LazyLoading from './lazy-loading';


const MainRoute = (props) => {
    return (
      <React.Fragment>
      <div className="container">
        <div className="row">
        <switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/lazy-loading" component={ LazyLoading } />
        </switch>
         
        </div>
      </div>
      </React.Fragment>
    );
  }
export default MainRoute;