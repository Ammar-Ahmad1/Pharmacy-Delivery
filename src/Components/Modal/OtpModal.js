import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {ToastContainer, toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
const OtpModal = ({ show, onHide, otp, setOtp,handleVerifyCode }) => {
  const [inputOtp, setInputOtp] = useState("");
    const navigate = useNavigate();
  const handleOtpChange = (event) => {
    const { value } = event.target;
    setInputOtp(value);
  };

  const handleOtpSubmit = () => {
    if (inputOtp.length === 6) {
    setOtp(inputOtp);
        console.log("OTP:", inputOtp);
    handleVerifyCode(inputOtp);
      onHide();
        navigate('/login');

    } else {
      // Display error or handle incomplete OTP
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Enter OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>6-digit OTP:</Form.Label>
          <Form.Control
            type="text"
            value={inputOtp}
            onChange={handleOtpChange}
            maxLength={6}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleOtpSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OtpModal;
