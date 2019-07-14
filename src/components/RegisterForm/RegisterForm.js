import React from 'react';
import config from '../../config';
import TokenService from '../../services/token-services';

export default class RegisterForm extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = {
    error: null
  };

  handleSubmitRegistration = ev => {
    ev.preventDefault();
    const { repeat_password, full_name, user_name, password } = ev.target;
    const user = {
      full_name: full_name.value,
      user_name: user_name.value,
      password: password.value
    };

    if (user.password !== ev.target.repeat_password.value) {
      this.setState({ error: 'Passwords must match' });
    }

    fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }
        return res.json();
      })
      .then(() => {
        password.value = '';
        full_name.value = '';
        user_name.value = '';
        repeat_password.value = '';
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({
          error: res.error
        });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmitRegistration}>
        <div className="error-message">{error && <p>{error}</p>}</div>
        <div className="form-input-section">
          <label htmlFor="user_name">User Name</label>
          <input
            required
            className="register-user-name"
            id="user_name"
            name="user_name"
            placeholder="i.e. Headmaster1"
          />
        </div>
        <div className="form-input-section">
          <label htmlFor="full_name">Full Name</label>
          <input
            required
            className="register-full-name"
            id="full_name"
            name="full_name"
            placeholder="i.e. Albus Dumbledor"
          />
        </div>
        <div className="form-input-section">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            className="register-password"
            id="password"
            name="password"
            placeholder="Pick a password"
          />
        </div>
        <div className="form-input-section">
          <label htmlFor="repeat_password">Re-type Password</label>
          <input
            required
            type="password"
            className="register-password"
            id="repeat_password"
            name="repeat_password"
            placeholder="Re-type that password"
          />
        </div>
        <div className="button-div">
          <button type="submit" className="register-button">
            Register
          </button>
        </div>
      </form>
    );
  }
}
