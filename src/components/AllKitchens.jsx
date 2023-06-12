import { useEffect } from "react";
import { useState } from "react";
import KitchenImgCarousel from "./KitchenImgCarousel";
import Axios from "axios";

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
          <div key={i}>
            <KitchenImgCarousel data={kitchen.images} />
            <h5>Kitchen {kitchen.ref}</h5>
            <h6>
              Type:
              {kitchen.kitchenType}{" "}
            </h6>
            <h5> About </h5>
            <p>{kitchen.description}</p>
            <h5>Address:</h5> {kitchen.address} <h5>Price:</h5> {kitchen.price}
          </div>
        ))}
      </>
    )
  );
}

export default AllKitchens;
