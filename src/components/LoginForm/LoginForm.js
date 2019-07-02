import React from 'react';

export default class LoginForm extends React.Component {

  render() {
    return (
      <form>
        <label htmlfor='user_name'>User Name: </label>
        <input required className = 'login_user_name' name='user_name' placeholder='User Name'></input>
        <label htmlfor='password'>Password: </label>
        <input required className = 'login_password' name='password' placeholder='Password'></input>
        <button type='submit'>Log in</button>
      </form>
    )
  }
}