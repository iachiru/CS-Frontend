import { useSelector } from "react-redux"

import Kitchens from "../components/Kitchens"
import KitchenModal from "../components/KichenModal"




function Profile() {


  const user = useSelector(state => state.users.user)
   
//I need this to rerender after it's been navigated to
  
  return (
    
    user &&  
    <>
    <h1>Name: {user.name}</h1>
    <p>Email: {user.email}</p>
    <Kitchens/>
   {/*  <KitchenModal data={""}/> */}
    </> 
   
    
  )
}

export default Profile