import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { editUser, getProfile } from "../redux/actions";

function UserModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    companyName: "",
    companyAddress: "",
    companyType: "",
    hostType: "",
  });

  useEffect(() => {
    if (props.data) {
      setFormData({
        name: props.data.name,
        email: props.data.email,
        address: props.data.address,
        companyName: props.data.companyName,
        companyAddress: props.data.companyAddress,
        companyType: props.data.companyType,
        hostType: props.data.hostType,
      });
    }
  }, []);

  const [error, setError] = useState("");
  const { name, address, companyName, companyAddress, companyType, hostType } =
    formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(editUser(formData));

    handleClose();
  };

  return (
    <>
      <Button className="kitchen-card-button" onClick={handleShow}>
        Edit user info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User information</Modal.Title>
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

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => {
                  setFormData({ ...formData, address: e.target.value });
                  setError("");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your company name"
                value={companyName}
                onChange={(e) => {
                  setFormData({ ...formData, companyName: e.target.value });
                  setError("");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCompanyAddress">
              <Form.Label>Company Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your company address"
                value={companyAddress}
                onChange={(e) => {
                  setFormData({ ...formData, companyAddress: e.target.value });
                  setError("");
                }}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.SelectCustomCompanyType">
              <Form.Label>Company Type</Form.Label>
              <Form.Control
                as="select"
                required
                custom
                placeholder="What type of company is it"
                value={companyType}
                onChange={(e) => {
                  setFormData({ ...formData, companyType: e.target.value });
                  setError("");
                }}
              >
                <option>LTD</option>
                <option>Partnership</option>
                <option>Single Trader</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.SelectCustomHostType">
              <Form.Label>Host Type</Form.Label>
              <Form.Control
                as="select"
                required
                custom
                placeholder="What kind of host are you?"
                value={hostType}
                onChange={(e) => {
                  setFormData({ ...formData, hostType: e.target.value });
                  setError("");
                }}
              >
                <option>Owner</option>
                <option>Licensee</option>
                <option>Agency</option>
              </Form.Control>
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

export default UserModal;
