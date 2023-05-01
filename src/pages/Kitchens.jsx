import { useDispatch, useSelector } from "react-redux"
import { getKitchenByUser } from "../redux/actions"


function Kitchens() {


  const dispatch = useDispatch()
  const kitchen = useSelector(state => state.kitchen.user.kitchen)
  /* dispatch(getKitchenByUser()) */

  console.log("Kitchens logs", kitchen)
  return (
    kitchen &&
    <>
     {kitchen.map((kitchen, i)=>
     <div key={i}>
      <h1>Kitchen {kitchen.ref} </h1>
      <p>Image:{kitchen.image}</p>
      <p>Price:{kitchen.price}</p>
      <p>Description:{kitchen.description}</p>
      <p>Kitchen Type:{kitchen.kitchenType}</p>
     </div> )}
    </>
  )
}

export default Kitchens