import { useDispatch, useSelector } from "react-redux";
import { getKitchenByUser } from "../redux/actions";
import { useEffect } from "react";

import SingleKitchen from "./SingleKitchen";

function Kitchens() {
  const dispatch = useDispatch();
  const kitchen = useSelector((state) => state.kitchen.kitchen.kitchen);

  useEffect(() => {
    dispatch(getKitchenByUser());
  }, []);

  return (
    kitchen && (
      <div className="cardContainer">
        {kitchen.map((kitchen, i) => (
          <SingleKitchen data={kitchen} key={i} />
        ))}
      </div>
    )
  );
}

export default Kitchens;
