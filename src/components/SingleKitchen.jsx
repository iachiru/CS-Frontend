import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteKitchen } from "../redux/actions";
import KitchenModal from "./KichenModal";
import KitchenImgCarousel from "./KitchenImgCarousel";

function SingleKitchen(props) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteKitchen(props.data._id));
  };

  return (
    <>
      <Container className="kitchen-container">
        <Col className="img-carousel">
          <KitchenImgCarousel data={props.data.images} />
        </Col>
        <Col className="kitchen-info">
          <Row className="info-row1">
            <h5>Kitchen {props.data.ref}</h5>
            {""}
            <h6>
              Type:
              {props.data.kitchenType}{" "}
            </h6>
          </Row>
          <Row className="info-row2">
            <h5> About </h5>
            <p>{props.data.description}</p>
          </Row>
          <Row className="info-row3">
            <Col>
              {" "}
              <h5>Address:</h5> {props.data.address}{" "}
            </Col>
            <Col>
              <h5>Price:</h5> {props.data.price}{" "}
            </Col>
          </Row>
          <Row className="kitchen-btn-row">
            <KitchenModal data={props.data} />
            <Button className="kitchen-card-button" onClick={handleDelete}>
              Delete
            </Button>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default SingleKitchen;
