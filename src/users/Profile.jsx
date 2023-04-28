import { useDispatch, useSelector } from "react-redux"
import { getAllUsers, getKitchenByUserAndId, getProfile } from "../redux/actions"
import { useEffect } from "react"


function Profile() {

  const user = useSelector(state=> state.users.user)
  const dispatch = useDispatch()

  console.log("this is user from selector", user)


  useEffect(()=>{

dispatch(getProfile())
dispatch(getKitchenByUserAndId())
  },[])
  

  return (
    <>
    <h1>Name: {user.name}</h1>
    <p>Email: {user.email}</p>
    <p>Kitchens: {user.kitchen.map((kitchen, i)=> {
      return <li key={i}>{kitchen}</li>
    })}</p>
    </>
  )
}

export default Profile