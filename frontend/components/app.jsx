import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Splash from './splash'
import HomePageContainer from './home/home_page_container';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TankShowContainer from './tank/tank_show_container';
import PostIndexContainer from './post/post_index_container';
import PostShowContainer from './post/post_show_container';
import ReminderIndexContainer from './reminder/reminder_index_container';

const App = () => (
  <div id='page'>
    <NavBarContainer />
    <div className='nav-fix' />
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/home" component={HomePageContainer} />
      <ProtectedRoute exact path="/tanks/:tankId" component={TankShowContainer} />
      <ProtectedRoute exact path="/forum" component={PostIndexContainer}/>
      <ProtectedRoute exact path="/forum/:postId" component={PostShowContainer} />
      <ProtectedRoute exact path="/reminders" component={ReminderIndexContainer} />
    </Switch>
    <div className='footer-fix' />
    <footer>
      <div id='favicon-attr'>Icons made by <a href="https://www.freepik.com" target='_blank' rel="noopener noreferrer" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" target='_blank' rel="noopener noreferrer" title="Flaticon">www.flaticon.com</a></div>
      <div id='socials-list'>
        <a href='https://github.com/KevinHJo/aqua-log-rails' target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={ faGithub } size='xl' inverse />
        </a>
        <a href='https://www.linkedin.com/in/kevin-jo-379bb5150/' target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={ faLinkedin } size='xl' inverse />
        </a>
      </div>
    </footer>
  </div>
);

export default App