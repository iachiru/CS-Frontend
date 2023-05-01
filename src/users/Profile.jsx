import { useSelector } from "react-redux"

import Kitchens from "../pages/Kitchens"



function Profile() {


  const user = useSelector(state => state.users.user)
   
console.log("user in profile", user)
  
  return (
    
    user &&  
    <>
    <h1>Name: {user.name}</h1>
    <p>Email: {user.email}</p>
    <ol>{user.kitchen?.map((kitchen, i) => (
         <li key={i}>{kitchen}</li>
      ))}
    </ol>
    <Kitchens/>
    </> 
   
    
  )
}

export default Profile