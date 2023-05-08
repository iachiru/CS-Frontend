import { useSelector } from "react-redux";

import Kitchens from "../components/Kitchens";
import KitchenModal from "../components/KichenModal";
import { Button, Card } from "react-bootstrap";
import UserModal from "../components/UserModal";

function Profile() {
  const user = useSelector((state) => state.users.user);

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
        <UserModal />
        <Kitchens />
        <KitchenModal />
      </>
    )
  );
}

export default Profile;
