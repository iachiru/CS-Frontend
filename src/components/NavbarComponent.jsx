import Navbar from "react-bootstrap/Navbar";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";
import RegisterModal from "../users/RegisterModal";
import LoginModal from "../users/LoginModal";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const signOut = (user) => {
    dispatch(logout(user));
  };

  return (
    <>
      <Navbar variant="dark" className="navBar">
        <Navbar.Brand href="/home">Find Your Kitchen</Navbar.Brand>
        <Nav className="mr-auto">
          <RegisterModal />
          <LoginModal />
          <Button className="kitchen-card-button" onClick={signOut}>
            Logout
          </Button>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
