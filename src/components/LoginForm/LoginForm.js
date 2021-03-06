import React from 'react';
import config from '../../config';
import TokenService from '../../services/token-services';
import './LoginForm.css';
import Spinner from '../Spinner/Spinner';

export default class LoginForm extends React.Component {


  state = { error: null, fetching: false }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({error:null, fetching: true});
    const { user_name, password } = ev.target
   
    fetch(`${config.API_ENDPOINT}/login`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({user_name: user_name.value, password: password.value})
    })
    .then(res=> {
      if (!res.ok)  {
        return res.json().then(e=> Promise.reject(e))
      }  
      return res.json();
    })
    .then(res => {
      user_name.value = ''
      password.value = ''
      TokenService.saveAuthToken(res.authToken);
      const user_id = TokenService.getUserIdFromToken();
      this.props.handleLoginSuccess(user_id);
    }).catch(err=>{this.setState({error: err.error})
    });
  };

  render() {
    const {error} = this.state;
    return (
      <div>
      {this.state.fetching && !this.state.error && <Spinner />}
      <form onSubmit={this.handleSubmitJwtAuth}>
        <div className='error-message'>{error && <p>{error}</p>}</div>
        <div className='form-input-section'>
          <label htmlFor='user_name'>User Name</label>
          <input required className = 'login_user_name' id='user_name' name='user_name' placeholder='User Name'></input>
        </div>
        <div className='form-input-section'>
          <label htmlFor='password'>Password</label>
          <input required type='password' className ='login_password' id='password' name='password' placeholder='Password'></input>
        </div>
        <div className='button-div'>
          <button className='button' type='submit'>Log in</button>
        </div>
      </form>
      </div>
    )
  }
}