import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    // event.preventDefault();
    history.push("products/list");
  }

  return (
    <div className="Login">
      <div style={{ textAlign: "center" }}>Please enter Email and password</div>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            className="input-box"
            id="email"
            name="email"
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            className="input-box"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button
          block
          className="login-button"
          bsSize="large"
          disabled={!validateForm()}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}