import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'
import TokenService from '../../services/token-services';


function MainPage () {

  return (
    <div className='main_page section'>
      <h1 className='main_header'>Even-Teams</h1>
      <h3 className='sec_header'>The goal at even teams is to make your pick-up sports as fun as possible.</h3>
      <h4>To get started choose an option below.</h4>  

      {TokenService.hasAuthToken()
          ? (<div className='Main__not-logged-in'>
          <Link className = 'button'
            to={`/groups/${TokenService.getUserIdFromToken()}`}>
            Go to my groups
            {' '}
          </Link>
          </div>)
          : (<div className='Main__not-logged-in'>
          <Link className = 'button'
            to='/login'>
            Login
            {' '}
          </Link>
          <Link className = 'button'
            to='/register'>
            Register
          </Link>
        </div>)}
     
        {!TokenService.hasAuthToken() ? (<p className='sub-text'>If you want to try this out before registering just login with the username 'HarryPotter' and the password 'Password1!'</p>): <></>}
    </div>
  );
}

export default MainPage;