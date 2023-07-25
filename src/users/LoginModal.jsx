import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../redux/actions";

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    address: "",
    companyName: "",
    companyAddress: "",
    companyType: "",
    hostType: "",
  });

  const { email, password, address, companyName, companyAddress, companyType } =
    formData;
  const user = useSelector((state) => state.users.user);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser(formData));
    if (
      user &&
      (!user.address ||
        !user.companyName ||
        !user.companyAddress ||
        !user.companyType) //not fully working
    ) {
      navigate("/additional-info");
    } else {
      navigate("/profile");
    }
  };

  return (
    <>
      <Button className="kitchen-card-button" onClick={handleShow}>
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Form.Group>

            <Button className="kitchen-card-button" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
