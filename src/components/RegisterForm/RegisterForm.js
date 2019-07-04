import React from 'react';
import config from '../../config';
import TokenService from '../../services/token-services';

export default class RegisterForm extends React.Component {
  
  static defaultProps = {
    onRegistrationSuccess: () => {},
  }

  state= {
    error: null,
  }

  handleSubmitRegistration = ev => {
    ev.preventDefault();
    const {repeat_password, full_name, user_name, password } = ev.target;
    const user = { full_name: full_name.value, user_name: user_name.value, password: password.value}
    
    if(user.password !== ev.target.repeat_password.value){
      this.setState({error: 'Passwords must match'})
    }

    fetch(`${config.API_ENDPOINT}/users`,{
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body:  JSON.stringify(user),
    })
    .then(res=>{
      if(!res.ok){
        return res.json().then(e=>Promise.reject(e))
      }
      return res.json();
    }).then(()=>{
      password.value = '';
      full_name.value = '';
      user_name.value = '';
      repeat_password.value = '';
      this.props.onRegistrationSuccess();
    }).catch(res =>{
      this.setState({
        error:res.error
      })
    })
  }
  
  

  render() {
    return (
      <form onSubmit={this.handleSubmitRegistration}>
        <label htmlFor='user_name'>User Name: </label>
        <input required className = 'Register_user_name' name='user_name' placeholder='User Name'></input>
        <label htmlFor='full_name'>Full Name: </label>
        <input required className = 'Register_full_name' name='full_name' placeholder='Full Name'></input>
        <label htmlFor='password'>Password: </label>
        <input required className = 'Register_password' name='password' placeholder='Password'></input>
        <label htmlFor='repeat-password'>Repeat Password: </label>
        <input required className = 'Register_password' name='repeat_password' placeholder='Password'></input>
        <button type='submit'>Register</button>
      </form>
    )
  }
}