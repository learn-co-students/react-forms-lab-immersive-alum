import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };

    this.saveUsername = this.saveUsername.bind(this)
    this.savePassword = this.savePassword.bind(this)
    this.preventDefault = this.preventDefault.bind(this)
  }

  saveUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  savePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  preventDefault(e){
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.preventDefault}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.saveUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.savePassword} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
