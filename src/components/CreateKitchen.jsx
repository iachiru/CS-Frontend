import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  editKitchen,
  registerKitchen,
  uploadKitchenPic,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateKitchen() {
  const [formData, setFormData] = useState({
    image: "",
    price: "",
    description: "",
    kitchenType: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [editor, setEditor] = useState(false);
  const stateEditor = useSelector(
    (state) => state.kitchen.kitchen.kitchen.setEditor
  );
  const { image, price, description, kitchenType, address } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = async (e) => {
    await dispatch(uploadKitchenPic(e));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (editor === true) {
      dispatch(editKitchen(formData));
    }
    if (!editor) {
      dispatch(registerKitchen(formData));
    }

    if (formData.kitchenType === "") {
      toast.error("Please choose one option");
    } else {
      setError("");
      toast.success("Kitchen created");
      navigate("/profile");
    }
  };

  if (editor === true) {
    setFormData();
  }

  return (
    <Form onSubmit={onSubmit}>
      {error && toast.error(error)}

      <Form.Group className="mb-3" controlId="formBasicImage">
        {" "}
        {/* has to be a choose file */}
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          placeholder=""
          value={image}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasiPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter price"
          value={price}
          onChange={(e) => {
            setFormData({ ...formData, price: e.target.value });
            setError("");
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Please enter a description"
          value={description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
            setError("");
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasickT">
        <Form.Label>Address</Form.Label> {/* this needs to be a dropdown */}
        <Form.Control
          type="text"
          placeholder=""
          value={address}
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
            setError("");
          }}
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Kitchen Type</Form.Label>
        <Form.Control
          as="select"
          required
          custom
          value={kitchenType}
          onChange={(e) => {
            setFormData({ ...formData, kitchenType: e.target.value });
            setError("");
          }}
        >
          <option defaultChecked>Choose one...</option>
          <option>Dark kitchen</option>
          <option>Residency</option>
          <option>Central production unit</option>
        </Form.Control>
      </Form.Group>

      {editor ? (
        <Button variant="primary" type="submit">
          Update
        </Button>
      ) : (
        <Button variant="primary" type="submit">
          Submit
        </Button>
      )}
    </Form>
  );
}

export default CreateKitchen;
