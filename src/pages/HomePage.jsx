import Axios from "axios"
import { useEffect, useState } from "react"

function HomePage() {
  const [data, setData]=useState("")

      const getData=async()=>{
        const response = await Axios.get("http://localhost:4000/getData")
        setData(response.data)
      }

      useEffect(()=>{getData()},[])
  return (
    <div>
      {data}
    </div>
  )
}

export default HomePage