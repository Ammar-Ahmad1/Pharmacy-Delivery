import React, { useState } from "react";
import "./SignUpForm.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { provider, FBprovider } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
class SignUpForm extends React.Component {
  
  handleGoogleLogin = async () => {
    console.log("Google login clicked");
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log("USER", user);
        console.log("TOKEN", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("token", token);
        this.props.navigate("/");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  handleFacebookLogin = async () => {
    console.log("Facebook login clicked");
    const auth = getAuth();
    signInWithPopup(auth, FBprovider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log("USER", user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log("TOKEN", accessToken);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("token", accessToken);
        this.props.navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  render() {
    return (
      <div id="SignUpForm">
        <FormHeader title="SignUp" />
        <Form
          handleInputChange={this.props.handleInputChange}
          handleSignUp={this.props.handleSignUp}
          state={this.props}
        />
        <OtherMethods
          handleGoogleLogin={this.handleGoogleLogin}
          handleFacebookLogin={this.handleFacebookLogin}
        />
      </div>
    );
  }
}

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => (
  <div>
    <FormInput
      description="Email"
      placeholder="Enter your Email"
      type="text"
      name="email"
      value={props.state.email}
      onChange={props.handleInputChange}
    />
    <FormInput
      description="Password"
      placeholder="Enter your password"
      type="password"
      name="password"
      value={props.state.password}
      onChange={props.handleInputChange}
    />
    <FormInput
      description="Confirm Password"
      placeholder="Enter your password"
      type="password"
      name="confirmPassword"
      value={props.state.confirmPassword}
      onChange={props.handleInputChange}
    />
    <FormInput
      description="Mobile Number"
      placeholder="Enter your Mobile Number"
      type="text"
      name="mobileNumber"
      value={props.state.mobileNumber}
      onChange={props.handleInputChange}
    />
    <FormButton title="Sign Up" onClick={props.handleSignUp} />
  </div>
);

const FormButton = (props) => (
  <div id="button" class="row">
    <button onClick={props.onClick}>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div className="row">
    <label>{props.description}</label>
    <input
      type={props.type}
      placeholder={props.placeholder}
      // value={props.value}
      name={props.name}
      onChange={props.onChange}
    />
  </div>
);

const OtherMethods = (props) => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook 
      handleFacebookLogin={props.handleFacebookLogin}
      />
      <Google
        handleGoogleLogin={props.handleGoogleLogin}
        
      />
    </div>
  </div>
);

const Facebook = (props) => (
  <div id="facebookIcon" onClick={props.handleFacebookLogin}>
    <FaFacebook style={{ color: "blue", fontSize: "30px" }}
    />
  </div>
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

export default SignUpForm;
