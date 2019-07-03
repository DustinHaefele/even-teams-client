import React from 'react';
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
    // const destination = (location.state || {}).from || '/'
    history.push(`/groups/${user_id}`)
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <LoginForm handleLoginSuccess={this.handleLoginSuccess}/>
      </div>
    );
  }
}