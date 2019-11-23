import React, { Component }  from 'react';
import {Route} from "react-router-dom";

import Home from './Home';
import LazyLoading from './lazy-loading';


const MainRoute = (props) => {
    return (
      <React.Fragment>
      <div className="container">
        <div className="row">
          <Route exact path="/" component={ Home } />
         <Route exact path="/lazy-loading" component={ LazyLoading } />
        </div>
      </div>
      </React.Fragment>
    );
  }
export default MainRoute;