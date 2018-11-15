import React, { Component } from "react";
import "./loginForm.scss";
import "react-notifications/lib/notifications.css";
import Button from "../../buttons/Button";
import createFormObj from "../../../utils/createFormObj";
import Auth from "../../../auth/Auth";

interface IState {
  formData: {
    email: string;
    password: string;
  };
}

class LogInForm extends Component<{}, IState> {
  state = {
    formData: {
      email: "",
      password: ""
    }
  };

  captureInputData = (event: React.FormEvent<HTMLInputElement>) => {
    const stateCopy = { ...this.state.formData, ...createFormObj(event) };
    this.setState({
      formData: stateCopy
    });
  };

  submitForm = (event: any) => {
    event.preventDefault();
    const Authenticate = new Auth();
    const action = event.target.dataset.name;
    const { email, password } = this.state.formData;

    if (action === "signup") {
      Authenticate.signup(email, password);
      return;
    }
    Authenticate.login(email, password);
  };

  render() {
    return (
      <div className="container login-form">
        <form className="m-auto">
          <div className="image-form-holder mb-3">
            <img
              className="card-img-top"
              src="https://res.cloudinary.com/tsekotsolov/image/upload/v1539777401/Marvel/images.png"
              alt="marvel"
            />
            <h4 className="mt-3">Sign in to your account</h4>
          </div>
          <div className="form-group">
            <label htmlFor="InputEmail">Email</label>
            <input
              type="email"
              onChange={this.captureInputData}
              className="form-control"
              id="InputEmail"
              placeholder="Your Email"
              data-name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword">Password</label>
            <input
              type="password"
              onChange={this.captureInputData}
              className="form-control"
              id="InputPassword"
              placeholder="Your Password"
              data-name="password"
            />
          </div>
          <div className="buttons-form-wrapper">
            <Button
              submit="submit"
              text="Submit"
              dataName="signup"
              action={() => this.submitForm(event)}
            />
            <Button
              text="Log In"
              dataName="login"
              action={() => this.submitForm(event)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LogInForm;
