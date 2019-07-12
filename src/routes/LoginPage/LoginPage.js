import React from 'react';
import './LoginPage.css'
import LoginForm from '../../components/LoginForm/LoginForm'

export default class LoginPage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = (user_id) => {
    const { history } = this.props
    this.props.onLogin();
    history.push(`/groups/${user_id}`)
    
  }

  render() {
    return (
      <div className='login-page'>
        <h2>Login</h2>
        <LoginForm className ='login-form' handleLoginSuccess={this.handleLoginSuccess}/>
      </div>
    );
  }
}