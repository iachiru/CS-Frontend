import { useDispatch, useSelector } from "react-redux";

import Kitchens from "../components/Kitchens";
import KitchenModal from "../components/KichenModal";
import { Card, Col, Container, Row } from "react-bootstrap";
import UserModal from "../components/UserModal";
import { getProfile, uploadProfilePic } from "../redux/actions";
import { useEffect, useRef } from "react";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  /*  const fileInputRef = useRef(HTMLInputElement);
  console.log("User state in profile", user); */

  /*  const handleClick = () => {
    fileInputRef.current?.click();
  }; */
  const handleChange = async (e) => {
    await dispatch(uploadProfilePic(e));
  };

  return (
    user && (
      <>
        <Container fluid>
          <Row className="m-1 user-info-container">
            <Col className="avatar d-flex">
              <img src={user.image} alt="User avatar" className="avatar-img" />
              <input type="file" className="input" onChange={handleChange} />
            </Col>
            <Col className="user-info mt-2 d-flex flex-column justify-content-around">
              <h6>Hello {user.name}</h6>
              <h6>Contact email: {user.email}</h6>
              <h6>You are a: {user.hostType} </h6>
            </Col>
            <Col className="company-info mt-2 d-flex flex-column justify-content-around">
              <h6>At: {user.companyName}</h6>
              <h6>This company is a: {user.companyType}</h6>
              <h6>Company address: {user.companyAddress}</h6>
            </Col>
            <Col className="profile-btn-row d-flex flex-column justify-content-around align-items-center">
              <UserModal data={user} />
              <KitchenModal />
            </Col>
          </Row>
          <Row className="kitchen-cards">
            <Kitchens />
          </Row>
        </Container>
      </>
    )
  );
}

export default Profile;
