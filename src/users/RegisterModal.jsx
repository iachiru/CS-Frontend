import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/actions";
import { toast } from "react-toastify";

function RegisterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    password2: "",
    email: "",
    host: false,
  });
  const [error, setError] = useState("");
  //const [isHost, setIsHost] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, email, password, password2 } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.password || !formData.email) {
      return setError("Please complete all fields");
    }
    if (password !== password2) {
      return setError("Passwords do not match");
    }
    setError("");
    dispatch(registerUser(formData));
    navigate("/login");
  };

  return (
    <>
      <Button className="kitchen-card-button" onClick={handleShow}>
        Register
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            {error && toast.error(error)}

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  setError("");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setError("");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  setError("");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={password2}
                onChange={(e) => {
                  setFormData({ ...formData, password2: e.target.value });
                  setError("");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Host"
                checked={formData.host}
                onChange={(e) => {
                  setFormData({ ...formData, host: e.target.checked });

                  setError("");
                }}
              />
            </Form.Group>
            <Button
              className="kitchen-card-button"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterModal;
