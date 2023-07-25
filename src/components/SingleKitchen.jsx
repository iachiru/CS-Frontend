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
import KitchenImgModal from "./KitchenImgModal";

function SingleKitchen(props) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteKitchen(props.data._id));
  };

  return (
    <>
      <Col className="d-flex" md={4} sm={3}>
        <KitchenImgModal data={props.data.images} />
      </Col>
      <Col
        md={6}
        sm={8}
        className="d-flex flex-column justify-content-between kitchen-info"
      >
        <h4>Kitchen {props.data.ref}</h4>
        <h5>Type: {props.data.kitchenType}</h5>
        <h6> About </h6>
        <p>{props.data.description}</p>
        <Row className="justify-content-around">
          <h6>Address: {props.data.address}</h6>
          <h6>Price: {props.data.price}</h6>
        </Row>
      </Col>
      <Col md={2} sm={1} className="d-flex flex-column justify-content-around">
        <KitchenModal data={props.data} className="kitchen-card-button" />
        <Button className="kitchen-card-button" onClick={handleDelete}>
          Delete
        </Button>
      </Col>
    </>
  );
}

export default SingleKitchen;
