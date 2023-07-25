import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import AllKitchens from "../components/AllKitchens";

function HomePage() {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Find Your Kitchen</h1>
          <p>This is our kitchens selection</p>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row>
          <AllKitchens />
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
