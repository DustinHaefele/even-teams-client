import React from 'react';

export default class RegisterForm extends React.Component {

  render() {
    return (
      <form>
        <label htmlfor='user_name'>User Name: </label>
        <input required className = 'Register_user_name' name='user_name' placeholder='User Name'></input>
        <label htmlfor='password'>Password: </label>
        <input required className = 'Register_password' name='password' placeholder='Password'></input>
        <label htmlfor='repeat-password'>Repeat Password: </label>
        <input required className = 'Register_password' name='repeat-password' placeholder='Password'></input>
        <button type='submit'>Register</button>
      </form>
    )
  }
}