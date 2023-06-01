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
        {/*   <Card>
          <Card.Header>{user.name}</Card.Header>
          <Card.Img src={user.image} alt="User avatar" className="avatar-img" />
          <Card.Body>
            <Card.Title>
              Works at: {user.companyName}
              {user.companyType}
            </Card.Title>
            <Card.Text>Located: {user.companyAddress}</Card.Text>
            <Card.Text>Email: {user.email}</Card.Text>
            <Card.Text>Type of host: {user.hostType}</Card.Text>
          </Card.Body>
        </Card> */}

        <Container className="user-info-container">
          <Col className="avatar">
            <img src={user.image} alt="User avatar" className="avatar-img" />
            <input type="file" className="input" onChange={handleChange} />
          </Col>
          <Col className="user-info">
            <Row className="">
              <h5>Hello {user.name}</h5>
              {""}
              <h6>You are a: {user.hostType} </h6>
            </Row>
            <Row className="">
              <h6>At: {user.companyName}</h6>
              <p>This company is a: {user.companyType}</p>
            </Row>
            <Row className="">
              <Col>
                {" "}
                <h5>Company address:</h5> {user.companyAddress}{" "}
              </Col>
              <Col>
                <h5>Contact email:</h5> {user.email}{" "}
              </Col>
            </Row>
            <Row className="kitchen-btn-row">
              <UserModal data={user} />
              <KitchenModal />
            </Row>
          </Col>
        </Container>
        <Kitchens />
      </>
    )
  );
}

export default Profile;
