import { useDispatch, useSelector } from "react-redux";

import Kitchens from "../components/Kitchens";
import KitchenModal from "../components/KichenModal";
import { Card } from "react-bootstrap";
import UserModal from "../components/UserModal";
import { getProfile, uploadProfilePic } from "../redux/actions";
import { useEffect, useRef } from "react";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  /*  const fileInputRef = useRef(HTMLInputElement);
  console.log("User state in profile", user); */

  /*  const handleClick = () => {
    fileInputRef.current?.click();
  }; */
  const handleChange = async (e) => {
    await dispatch(uploadProfilePic(e));
  };

  return (
    user && (
      <>
        <Card>
          <Card.Header>{user.name}</Card.Header>
          <Card.Img src={user.image} alt="User avatar" className="avatar-img" />
          <Card.Body>
            <Card.Title>
              Works at: {user.companyName}
              {user.companyType}
            </Card.Title>
            <Card.Text>Located: {user.companyAddress}</Card.Text>
            <Card.Text>Email: {user.email}</Card.Text>
            <Card.Text>Type of host: {user.hostType}</Card.Text>
          </Card.Body>
        </Card>
        <input type="file" className="input" onChange={handleChange} />
        <UserModal data={user} />
        <Kitchens />
        <KitchenModal />
      </>
    )
  );
}

export default Profile;
