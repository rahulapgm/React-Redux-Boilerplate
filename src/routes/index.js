import React from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import App from '../App';

const AppRouteComponent = () => {
  return(
      <Router>
          <React.Fragment>
              <Route exact path="/" component={App} />
          </React.Fragment>
      </Router>
  )
}
export default AppRouteComponent;
