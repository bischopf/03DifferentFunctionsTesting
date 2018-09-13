"use strict";

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isUserLoggedIn: true };
  }
  handleLoginClick() {
    this.setState({ isUserLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isUserLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isUserLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

class Mailbox extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { messages: []}
    this.state = { messages: ["Message 1", "RE Message1", "FW Message 2"] };
  }

  render() {
    let messages = this.state.messages.length;
    return <div>{messages > 0 && <h3> You have {messages} messages!</h3>}</div>;
  }
}

function Greeting(props) {
  let isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <div>
        <table width="100%">
          <tr>
            <td>
              <UserGreeting />
            </td>
            <td>
              <Mailbox />
            </td>
          </tr>
        </table>
      </div>
    );
  } else {
    return <GuestGreeting />;
  }
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function UserGreeting() {
  return <h1>Hello User!</h1>;
}

function GuestGreeting() {
  return <h1>Hello Guest!</h1>;
}

const rootElement = document.getElementById("root");
let mailbox = document.getElementById("mailbox");
ReactDOM.render(<LoginComponent />, rootElement);
