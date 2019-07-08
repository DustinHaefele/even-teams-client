import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'
import TokenService from '../../services/token-services';


function MainPage () {

  return (
    <div className='main_page'>
      <h1>Even Teams</h1>
      <h3>The goal at even teams is to make your pick-up sports as fun as possible.</h3>
      <h4>To get started Choose an option below.</h4>  

      {TokenService.hasAuthToken()
          ? (<div className='Main__not-logged-in'>
          <Link className = 'main-login'
            to='/groups'>
            Go to my groups
            {' '}
          </Link>
          </div>)
          : (<div className='Main__not-logged-in'>
          <Link className = 'main-login'
            to='/login'>
            Login
            {' '}
          </Link>
          <Link className = 'main-register'
            to='/register'>
            Register
          </Link>
        </div>)}
     
        {/* Once you are logged in you can create a group.  
        Your group is where you add all of your players whe will be playing in the game.  
        Next add all of your players to the group by telling us their name and giving them a skill level. 
        Then let us do the work of creating the most even teams possible.</p> */}
    </div>
  );
}

export default MainPage;