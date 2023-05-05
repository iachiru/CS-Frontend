import Axios from "axios"
import { useEffect, useState } from "react"

function HomePage() {
  const [data, setData]=useState("")

      const getData=async()=>{
        const response = await Axios.get("http://localhost:4000/api/users/kitchens")
        setData(response.data)
      }

      useEffect(()=>{getData()},[])
  return (
   
      data && <>
      {data.map((kitchen, i)=><div key={i}>
      <h1>Kitchen {kitchen.ref} </h1>
      <p>Address:{kitchen.address}</p>
      <p>Image:{kitchen.image}</p>
      <p>Price:{kitchen.price}</p>
      <p>Description:{kitchen.description}</p>
      <p>Kitchen Type:{kitchen.kitchenType}</p>
     </div> )}
      </>
    
  )
}

export default HomePage