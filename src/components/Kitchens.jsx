import { useDispatch, useSelector } from "react-redux";
import { getKitchenByUser } from "../redux/actions";
import { useEffect } from "react";

import SingleKitchen from "./SingleKitchen";

function Kitchens() {
  const dispatch = useDispatch();
  const kitchen = useSelector((state) => state.kitchen.kitchen.kitchen);

  console.log("this is kitchen inside kitchens", kitchen);

  useEffect(() => {
    dispatch(getKitchenByUser());
  }, []);

  console.log("Kitchens logs", kitchen);
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
