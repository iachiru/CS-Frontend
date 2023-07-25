import { useDispatch, useSelector } from "react-redux";
import { getKitchenByUser } from "../redux/actions";
import { useEffect } from "react";

import SingleKitchen from "./SingleKitchen";
import { Row } from "react-bootstrap";

function Kitchens() {
  const dispatch = useDispatch();
  const kitchen = useSelector((state) => state.kitchen.kitchen.kitchen);

  useEffect(() => {
    dispatch(getKitchenByUser());
  }, []);

  return (
    kitchen && (
      <>
        {kitchen.map((kitchen, i) => (
          <Row className="kitchen-container" key={i}>
            <SingleKitchen data={kitchen} />
          </Row>
        ))}
      </>
    )
  );
}

export default Kitchens;
