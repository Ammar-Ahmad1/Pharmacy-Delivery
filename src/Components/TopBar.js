import React, { useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const TopBar = (props) => {
  const navigate = useNavigate();

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      // className="justify-content-between"
    >
      {/* add logo */}
        <img src='/R.jpeg' alt="logo" style={{width:"50px",height:"50px",
        borderRadius:"50%",marginRight:"10px",marginLeft:"10px"
      }}/>
      <Navbar.Brand href="/">Pharma</Navbar.Brand>
      <Form
        inline
        style={{
          width: "30%",
          marginLeft: "auto",
        }}
      >
        <FormControl
          type="text"
          placeholder="Search..."
          className="mr-sm-2"
          onChange={(e) => {
            props.searchMedicine(e.target.value);
          }}
        />
      </Form>
      <Button
        variant="outline-light"
        style={{ marginRight: "auto", marginLeft: "10px" }}
      >
        Search
      </Button>
      {localStorage.getItem("token") ? (
        <Nav>
          <Button
            variant="outline-light"
            onClick={() => navigate("/profile")}
            style={{ marginRight: "10px" }}
          >
            Profile
          </Button>
          <Button variant="outline-light" onClick={props.Logout}>
            Logout
          </Button>
          <FaShoppingCart
            style={{ marginLeft: "10px", color: "white" }}
            onClick={() => navigate("/cart")}
          />
        </Nav>
      ) : (
        <Nav>
          <Button
            variant="outline-light"
            onClick={() => navigate("/login")}
            style={{ marginRight: "10px" }}
          >
            Login
          </Button>
          <Button variant="outline-light" onClick={() => navigate("/signup")}>
            Sign Up
          </Button>
          <FaShoppingCart
            style={{
              marginLeft: "10px",
              color: "green",
              cursor: "pointer",
              fontSize: "30px",
              marginTop: "5px",
              marginRight: "10px",
            }}
            onClick={() => navigate("/cart")}
          >
            {localStorage.getItem("cart") && (
              <span
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "10px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
              >
                {JSON.parse(localStorage.getItem("cart")).length}
              </span>
            )}
          </FaShoppingCart>
        </Nav>
      )}
    </Navbar>
  );
};

export default TopBar;
