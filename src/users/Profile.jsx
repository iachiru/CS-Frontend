import { useSelector } from "react-redux"



function Profile() {

  const user = useSelector(state=> state.users.user)

  return (
    
    user &&  
    <>
    <h1>Name: {user.name}</h1>
    <p>Email: {user.email}</p>
    <ol>{user.kitchen?.map((kitchen, i) => (
         <li key={i}>{kitchen}</li>
      ))}
    </ol>
    </> 
   
    
  )
}

export default Profile