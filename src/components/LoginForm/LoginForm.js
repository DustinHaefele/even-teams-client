import React from 'react';

export default class LoginForm extends React.Component {

  render() {
    return (
      <form>
        <label htmlFor='user_name'>User Name: </label>
        <input required className = 'login_user_name' name='user_name' placeholder='User Name'></input>
        <label htmlFor='password'>Password: </label>
        <input required className = 'login_password' name='password' placeholder='Password'></input>
        <button type='submit'>Log in</button>
      </form>
    )
  }
}