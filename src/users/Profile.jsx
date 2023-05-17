import { useDispatch, useSelector } from "react-redux";

import Kitchens from "../components/Kitchens";
import KitchenModal from "../components/KichenModal";
import { Button, Card, Form } from "react-bootstrap";
import UserModal from "../components/UserModal";
import { uploadProfilePic } from "../redux/actions";

function Profile() {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    await dispatch(uploadProfilePic(e));
  };

  //I need this to rerender after it's been navigated to

  return (
    user && (
      <>
        <Card>
          <Card.Header>{user.host}</Card.Header>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Card.Body>
        </Card>
        <input type="file" className="input" onChange={handleChange} />
        <UserModal />
        <Kitchens />
        <KitchenModal />
      </>
    )
  );
}

export default Profile;
