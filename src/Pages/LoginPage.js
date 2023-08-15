import React from "react";
import LoginForm from "../Components/LoginForm";
// import TopBar from "../Components/TopBar";
const LoginPage = () => {
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
      {/* <TopBar /> */}

      <LoginForm />
    </div>
  );
};
export default LoginPage;
