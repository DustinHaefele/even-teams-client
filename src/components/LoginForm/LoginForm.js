import React from 'react';
import config from '../../config';
import TokenService from '../../services/token-services';

export default class LoginForm extends React.Component {


  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({error:null});

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
      console.log(res);
      user_name.value = ''
      password.value = ''
      TokenService.saveAuthToken(res.authToken);
      const user_id = TokenService.getUserIdFromToken();
      this.props.handleLoginSuccess(user_id);
      //Navigate home page but logged in
    }).catch(err=>{this.setState({error: err})
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitJwtAuth}>
        <label htmlFor='user_name'>User Name: </label>
        <input required className = 'login_user_name' name='user_name' placeholder='User Name'></input>
        <label htmlFor='password'>Password: </label>
        <input required className = 'login_password' name='password' placeholder='Password'></input>
        <button type='submit'>Log in</button>
      </form>
    )
  }
}