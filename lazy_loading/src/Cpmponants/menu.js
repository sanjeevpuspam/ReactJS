import React from 'react';
import { Link} from 'react-router-dom'

const Menu = (props) => {
    return (
        <div className="container">
            <div className="row">
                <nav class="navbar navbar-default">
                    <div class="container">
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/lazy-loading">Lazy Loading</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
    </div>
    );
  }

  export default Menu;