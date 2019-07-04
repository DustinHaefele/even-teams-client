import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm'

export default class RegistrationPage extends React.Component {

  handleRegistrationSuccess = () =>{
    const {history} = this.props
    history.push('/login');
  }

  render(){
    return (
      <div>
        <h2>Register</h2>
        <RegisterForm onRegistrationSuccess = {this.handleRegistrationSuccess}/>
      </div>
    );
  }
}