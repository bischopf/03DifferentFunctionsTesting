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
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn && <LogoutButton onClick={this.handleLogoutClick} />}
        {!isLoggedIn && <LoginButton onClick={this.handleLoginClick} />}
      </div>
    );
  }
}

class Mailbox extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { messages: []}
    this.state = {
      messages: ["Message 1", "RE Message1", "FW Message2", "Hello"]
    };
  }

  render() {
    const messages = this.state.messages.length;
    const messageItems = this.state.messages.map((message, i) => (
      <li key={i++} class="list-group-item">
        {i++}: {message}
      </li>
    ));
    //or directly after <ul> {this.state.messages.map((message) => (<li>{message}</li>))};

    return (
      <div>
        {messages > 0 && (
          <div class="alert alert-success"> You have {messages} messages!</div>
        )}
        <div>
          <ul class="list-group list-group-flush">{messageItems}</ul>
        </div>
      </div>
    );
  }
}

function Greeting(props) {
  let isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <div class="jumbotron jumbotron-fluid">
        <UserGreeting />
        <Mailbox />
      </div>
    );
  } else {
    return (
      <div class="jumbotron jumbotron-fluid">
        <GuestGreeting />
      </div>
    );
  }
}

function LogoutButton(props) {
  return (
    <button class="btn btn-primary" onClick={props.onClick}>
      Logout
    </button>
  );
}

function LoginButton(props) {
  console.log(props);
  return (
    <button class="btn btn-primary" onClick={props.onClick}>
      Login
    </button>
  );
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
