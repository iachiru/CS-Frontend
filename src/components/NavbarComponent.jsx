import Navbar from 'react-bootstrap/Navbar' 
import {Button, Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/actions'



const NavbarComponent = () => {

  const dispatch = useDispatch();
  const signOut = (user)=>{
    dispatch(logout(user))
  }

  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">Find Your Kitchen</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/register"><div className={"nav-link"}>Register</div> </Link> 
      <Link to="/login"> <div className={"nav-link"} >Login</div></Link> 
      <Button onClick={signOut}>Logout</Button> 
      
    </Nav>
  </Navbar>
</>
  )
}

export default NavbarComponent