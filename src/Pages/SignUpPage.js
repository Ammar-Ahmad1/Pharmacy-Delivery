import React, { useState } from "react";
import SignUpForm from "../Components/SignUpForm";
import "firebase/compat/auth";
import firebase from "../firebase";
import OtpModal from "../Components/Modal/OtpModal";
import {ToastContainer, toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
const SignUpPage = () => {
  // Initialize state for form inputs
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [confirmationresult, setConfirmationResult] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");


  // Handle opening and closing the OTP modal
  const handleOpenOtpModal = () => {
    setShowOtpModal(true);
  };

  const handleCloseOtpModal = () => {
    setShowOtpModal(false);
  };
  // Handle form submission
  const handleSignUp = () => {
    // Here you can validate the form inputs, perform signup logic, etc.
    console.log("Form submitted:");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Mobile Number:", mobileNumber);
    handleSendVerificationCode();
  };

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "mobileNumber":
        setMobileNumber(value);
        break;
      default:
        break;
    }
  };
  const handleSendVerificationCode = () => {
    
    const appVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
    firebase
      .auth()
      .signInWithPhoneNumber("+923006243714", appVerifier)
      .then((confirmationResult) => {
        // console.log(confirmationResult);
        setConfirmationResult(confirmationResult);
        handleSuccess();
        handleOpenOtpModal();

      })
      .catch((error) => {
        console.error("SMS verification request failed:", error);
        handleErrors();
      });
    setConfirmationResult({confirmationresult: "confirmationResult"});
  };
  const handleSuccess = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });
  };
  const handleErrors = () => {
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_CENTER
    });
  };

const handleVerifyCode = (otp) => {
  confirmationresult
    .confirm(otp)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("token", user.za);
      navigate("/")
      toast.success("OTP Verified !", {
        position: toast.POSITION.TOP_CENTER
      });
      console.log("User is signed in");
      navigate("/login")
      // ...
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
      console.log("Error occured");
    });
};

  return (
    <div
      style={{
        background: "rgb(34,193,195)",
        backgroundImage:
          "linear-gradient(135deg, rgba(34,193,195,1) 0%,     rgba(253,187,45,1) 100%)",
        fontFamily: "work sans",
        height: "100vh",
        display: "flex",
      }}
    >
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      // hideProgressBar={false}

      />
      <SignUpForm
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        mobileNumber={mobileNumber}
        handleSignUp={handleSignUp}
        handleInputChange={handleInputChange}
        navigate={navigate}
      />
      <OtpModal
      show={showOtpModal}
      onHide={handleCloseOtpModal} // Pass the function to close OTP modal
      otp={otp}
      setOtp={setOtp}
      handleVerifyCode={handleVerifyCode}
    />
    <div id="recaptcha-container"></div>
    </div>
  );
};

export default SignUpPage;
