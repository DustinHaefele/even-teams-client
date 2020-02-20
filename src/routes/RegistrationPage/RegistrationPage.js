import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegistrationPage.css';

export default class RegistrationPage extends React.Component {

  handleRegistrationSuccess = () =>{
    const { history } = this.props
    history.push('/login');
  }

  render(){
    return (
      <div className='registration-page'>
        <h2>Register</h2>
        <RegisterForm className='registration-form' onRegistrationSuccess = {this.handleRegistrationSuccess}/>
      </div>
    );
  }
}