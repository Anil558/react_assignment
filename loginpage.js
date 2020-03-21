import React from "react";
import "./css/loginpage.css";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitloginForm = this.submitloginForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submitloginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Login Successful");
      this.props.history.push("/dashboard");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["username"])) {
        formIsValid = false;
        errors["username"] = "*Please enter valid username.";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"]
          .match
          //   /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
          ()
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    if (
      this.state.fields.username === "hruday@gmail.com" &&
      this.state.fields.password === "hruday123"
    ) {
      return formIsValid;
    } else alert("Invalid Username or password");
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitloginForm} method="post">
          <center>
            <br />
            <br />
            <h2> Login </h2>
            <br />
            <FormGroup row>
              <Label sm={12}>Username</Label>
              <Col>
                <Input
                  value={this.state.fields.username}
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                />
                <div className="errorMsg">{this.state.errors.username}</div>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={12}>Password</Label>
              <Col sm={12}>
                <Input
                  value={this.state.fields.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="Password"
                />
                <div className="errorMsg">{this.state.errors.password}</div>
              </Col>
            </FormGroup>
            <Button color="primary">Submit</Button>
          </center>
        </Form>
      </div>
    );
  }
}
export default Login;
