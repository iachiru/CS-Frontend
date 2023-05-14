import { useDispatch, useSelector } from "react-redux";

import Kitchens from "../components/Kitchens";
import KitchenModal from "../components/KichenModal";
import { Button, Card, Form } from "react-bootstrap";
import UserModal from "../components/UserModal";
import { uploadProfilePic } from "../redux/actions";
import { useRef, useState } from "react";
import axios from "axios";

function Profile() {
  const user = useSelector((state) => state.users.user);

  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const previewFiles = (file) => {
    const reader = new FileReader(file);
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    previewFiles(file);
    //dispatch(uploadProfilePic());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch("http://localhost:4000/api/users/user-pics", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: {
        image: image,
      },
    });
    try {
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
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
        <Form onSubmit={onSubmit}>
          <input
            type="file"
            className="input"
            onChange={(e) => handleChange(e)}
          />
          <Button type="submit">Submit</Button>
        </Form>
        <img src={image} alt="something" />
        <UserModal />
        <Kitchens />
        <KitchenModal />
      </>
    )
  );
}

export default Profile;
