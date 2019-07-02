import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm'

export default class RegistrationPage extends React.Component {

  render(){
    return (
      <div>
        <h2>Register</h2>
        <RegisterForm />
      </div>
    );
  }
}