import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  editKitchen,
  getKitchenByUser,
  registerKitchen,
  uploadKitchenPic,
} from "../redux/actions";

function KitchenModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    price: "",
    description: "",
    kitchenType: "",
    address: "",
  });

  useEffect(() => {
    if (props.data) {
      setFormData({
        images: props.data.images,
        price: props.data.price,
        description: props.data.description,
        kitchenType: props.data.kitchenType,
        address: props.data.address,
      });
    }
  }, []);

  const [error, setError] = useState("");
  const { images, price, description, kitchenType, address } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (props.data) {
      const formDataFiles = new FormData();
      for (let i = 0; i < selectedFiles.length; i++) {
        formDataFiles.append("images", selectedFiles[i]);
      }
      dispatch(uploadKitchenPic(formDataFiles, props.data._id));
      dispatch(editKitchen(formData, props.data._id));
      handleClose();
    } else {
      dispatch(registerKitchen(formData));

      if (formData.kitchenType === "") {
        toast.error("Please choose one option");
        dispatch(getKitchenByUser());
      } else {
        setError("");
        handleClose();
        setFormData("");
        toast.success("Kitchen created");
      }
    }
  };

  return (
    <>
      {props.data ? (
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
      ) : (
        <Button variant="primary" onClick={handleShow}>
          Create Kitchen
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            {error && toast.error(error)}

            {props.data ? (
              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Images</Form.Label>
                <Form.Control
                  type="file"
                  name="files"
                  multiple
                  onChange={handleFileChange}
                />
              </Form.Group>
            ) : null}

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
              <Form.Label>Address</Form.Label>{" "}
              {/* this needs to be a dropdown */}
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
                <option>Choose one...</option>
                <option>Dark kitchen</option>
                <option>Residency</option>
                <option>Central production unit</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default KitchenModal;
