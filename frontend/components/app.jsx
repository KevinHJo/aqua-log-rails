import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import Splash from './splash'
import HomePageContainer from './home/home_page_container';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div id='page'>
    <NavBarContainer />
    <div className='nav-fix' />
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <ProtectedRoute exact path="/home" component={HomePageContainer} />
      {/* <ProtectedRoute exact path="/tanks/:tankId" component={TankShowContainer} />
      <ProtectedRoute exact path="/logs/:logId" component={LogShowContainer} /> */}
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    <footer>
      <div id='favicon-attr'>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </footer>
  </div>
);

export default App