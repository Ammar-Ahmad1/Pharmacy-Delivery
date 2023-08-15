import React from "react";
import "./LoginForm.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import firebase, { auth } from "../firebase";
class LoginForm extends React.Component {
  handleGoogleLogin = async () => {
    console.log("Google login clicked");
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await auth.signInWithPopup(provider);
      console.log("Google login success:", result.user);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };
  render() {
    return (
      <div id="loginform">
        <FormHeader title="Login" />
        <Form />
        <OtherMethods handleGoogleLogin={this.handleGoogleLogin} />
      </div>
    );
  }
}

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => (
  <div>
    <FormInput
      description="Username"
      placeholder="Enter your username"
      type="text"
    />
    <FormInput
      description="Password"
      placeholder="Enter your password"
      type="password"
    />
    <FormButton title="Log in" />
  </div>
);

const FormButton = (props) => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

const OtherMethods = (props) => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Google />
    </div>
  </div>
);

const Facebook = (props) => (
  <a href="#" id="facebookIcon">
    <FaFacebook style={{ color: "blue", fontSize: "30px" }} />
  </a>
);

const Google = (props) => (
  <div id="googleIcon" onClick={props.handleGoogleLogin}>
    <FaGoogle
      style={{
        fontSize: "30px",
      }}
    />
  </div>
);

export default LoginForm;
