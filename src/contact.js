import React from 'react';
import ReactDOM from 'react-dom';

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password == this.state.password;   // == comparison operator
    // auth - store true or false depends on input password equals to current state password (swordfish)
    this.setState({
      authorized: auth
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
        <input id="password" type="password" />
        <input type="submit" />
      </form>
    )

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? 'Contact' : 'Login'}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);