import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { editUser, getProfile } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function AdditionalInfo() {
  const [formData, setFormData] = useState({
    address: "",
    companyName: "",
    companyAddress: "",
    companyType: "",
    hostType: "",
  });

  const { address, companyName, companyAddress, companyType, hostType } =
    formData;
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(formData));
    navigate("/profile");
  };

  return (
    user && (
      <>
        <h3>
          Hello {user.name}, please provide the following information to
          complete your profile
        </h3>
        <Form onSubmit={onSubmit}>
          {error && toast.error(error)}

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
      </>
    )
  );
}

export default AdditionalInfo;
