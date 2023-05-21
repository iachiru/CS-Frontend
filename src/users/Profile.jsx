import { useDispatch, useSelector } from "react-redux";

import Kitchens from "../components/Kitchens";
import KitchenModal from "../components/KichenModal";
import { Card } from "react-bootstrap";
import UserModal from "../components/UserModal";
import { getProfile, uploadProfilePic } from "../redux/actions";
import { useEffect } from "react";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  console.log("User state in profile", user);

  /* useEffect(() => {
    dispatch(getProfile());
  }, []); */

  const handleChange = async (e) => {
    await dispatch(uploadProfilePic(e));
  };

  //I need this to rerender after it's been navigated to

  return (
    user && (
      <>
        <Card>
          <Card.Header>{user.name}</Card.Header>
          <Card.Img alt="avatar">{user.image}</Card.Img>
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
