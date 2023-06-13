import { useEffect } from "react";
import { useState } from "react";
import KitchenImgCarousel from "./KitchenImgCarousel";
import Axios from "axios";
import { Button, Col } from "react-bootstrap";

function AllKitchens() {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await Axios.get(
      "http://localhost:4000/api/users/kitchens"
    );
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    data && (
      <>
        {data.map((kitchen, i) => (
          <div className="kitchen-container">
            <Col key={i}>
              <KitchenImgCarousel data={kitchen.images} />
            </Col>
            <Col className="d-flex flex-column justify-content-around align-items-center">
              <h4>Kitchen {kitchen.ref}</h4>
              <h6>Type: {kitchen.kitchenType}</h6>
              <h6>Address: {kitchen.address}</h6>
              <h6>Price: {kitchen.price}</h6>
              <Button className="kitchen-card-button">More details</Button>
            </Col>
          </div>
        ))}
      </>
    )
  );
}

export default AllKitchens;
