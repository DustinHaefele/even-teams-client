import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-services'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Header extends Component {
  
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.forceUpdate();
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
          {' '}
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    )
  }

  render() {
    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'>
          <FontAwesomeIcon className='green' icon='volleyball-ball' />
            {' '}
          Even-Teams
          </Link>
        </h1>
          {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

    
    </>
  }
}