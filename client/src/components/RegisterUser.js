import React, { Component } from "react";
import { Input, FormBtn } from "./Form";
import API from "../utils/API";
const Validator = require("./Validator");

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    restaurantID: sessionStorage.getItem("restID"),
    waiter: true,
    manager: true,
    host: true,
  }

  submit = {
    username: "",
    email: "",
    password: "",
    confirm: ""
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    // console.log(`${name}: ${value}`);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (Validator.validateEmail(this.state.email)) {
      if (Validator.validatePassword(this.state.password)) {
        if (Validator.validateConfirm(this.state.password, this.state.confirm)) {
          console.log("handleFormSubmit");
          const submit = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            restaurantID: this.state.restaurantID,
            waiter: true,
            manager: true,
            host: true,
          };
          console.log(submit);

          API.createUser(submit)
            .then(res => {
              // console.log("res", res.data);
              this.setState({ username: "", email: "", password: "", confirm: "" });
              // console.log(this.state);
            })
            .catch(err => console.log(err));
        } else {
          //user confirm fail
          console.log("user confirm fail");
        }
      } else {
        //user password fail
        console.log("user password fail");
      }
    } else {
      //user email fail
      console.log("user email fail");
    }

  };

  render() {
    return (
      <div>
        <form>
          <Input
            onChange={this.handleInputChange}
            name="username"
            placeholder="Username"
            value={this.state.username}
          />
          <Input
            onChange={this.handleInputChange}
            name="email"
            placeholder="Email"
            value={this.state.email}
          />
          <Input
            onChange={this.handleInputChange}
            name="password"
            placeholder="Password"
            value={this.state.password}
          />
          <Input
            onChange={this.handleInputChange}
            name="confirm"
            placeholder="Confirm password"
            value={this.state.confirm}
          />

          <FormBtn onClick={this.handleFormSubmit}>
            Create New User
          </FormBtn>
        </form>
      </div>
    );
  }
}

export default Register;
