import Axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import KitchenImgCarousel from "../components/KitchenImgCarousel";

function HomePage() {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await Axios.get(
      "http://localhost:4000/api/users/kitchens"
    );
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    data && (
      <>
        {data.map((kitchen, i) => (
          <div key={i}>
            <Container className="kitchen-container">
              <Col className="img-carousel">
                <KitchenImgCarousel data={kitchen.images} />
              </Col>
              <Col className="kitchen-info">
                <Row className="info-row1">
                  <h5>Kitchen {kitchen.ref}</h5>
                  {""}
                  <h6>
                    Type:
                    {kitchen.kitchenType}{" "}
                  </h6>
                </Row>
                <Row className="info-row2">
                  <h5> About </h5>
                  <p>{kitchen.description}</p>
                </Row>
                <Row className="info-row3">
                  <Col>
                    {" "}
                    <h5>Address:</h5> {kitchen.address}{" "}
                  </Col>
                  <Col>
                    <h5>Price:</h5> {kitchen.price}{" "}
                  </Col>
                </Row>
              </Col>
            </Container>
          </div>
        ))}
      </>
    )
  );
}

export default HomePage;
