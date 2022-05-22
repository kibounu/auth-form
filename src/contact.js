import React from 'react';
import ReactDOM from 'react-dom';

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'naddo',
      password: 'swordfish',
      authorized: false,
      errorMessage: ''
    };
    this.authorize = this.authorize.bind(this);
  }

  // event handler function
  authorize(e) {
    e.preventDefault();     // prevent form submission upon page load
    const username = e.target.querySelector('#username').value;
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password == this.state.password && username == this.state.username;   // == comparison operator

    const message = auth ? '' : 'Error. Please try again.'
    // auth - store true or false depends on input password equals to current state password (swordfish)
    this.setState({
      authorized: auth,
      errorMessage: message
    });
  }

  render() {

    const contactInfo = (
      <div>
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
      </div>
    );

    const login = (
      <form onSubmit={this.authorize}>
        <input id="username" placeholder="username" />
        <input id="password" type="password" placeholder="password" />
        <input type="submit" />
      </form>
    )

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? 'Contact' : 'Login'}</h1>
        {this.state.authorized ? contactInfo : login}
        {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);