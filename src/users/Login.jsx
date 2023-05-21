import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import React from "react";
import { getProfile, logInUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
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
        !user.companyType)
    ) {
      navigate("/additional-info");
    } else {
      dispatch(getProfile());
      navigate("/profile");
    }
  };

  return (
    <>
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Login;
