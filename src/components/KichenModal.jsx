import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  editKitchen, registerKitchen } from "../redux/actions";



function KitchenModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [formData, setFormData] = useState({
    image:"",
    price: "",
    description: "",
    kitchenType:"",
    address:"",

})

useEffect(()=>{
 if (props.data) {
  setFormData({
    image:props.data.image,
    price: props.data.price,
    description: props.data.description,
    kitchenType:props.data.kitchenType,
    address:props.data.address,}
 )
 } 
},[])


const [error, setError] = useState("")
const {image, price, description, kitchenType, address} = formData

const dispatch = useDispatch();
const navigate = useNavigate();


const onSubmit = (e)=>{
e.preventDefault()

if(props.data){
  dispatch(editKitchen(formData, props.data._id))
} else {
  
  dispatch(registerKitchen(formData))
}


if (formData.kitchenType === "") {
  toast.error("Please choose one option")
} else {
  setError("")
  toast.success("Kitchen created")
  navigate("/profile")
}
}

  return (
    <>
    { props.data  ?
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button> : <Button variant="primary" onClick={handleShow}>
        Manage Kitchens
      </Button>  }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit} >
        {error && toast.error(error)}
  
      <Form.Group className="mb-3" controlId="formBasicImage"> {/* has to be a choose file */}
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="" value={image} onChange={(e)=>{setFormData({...formData, image: e.target.value})
     setError("")
     console.log("this is the formData",formData)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasiPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter price" value={price} onChange={(e)=>{setFormData({...formData, price: e.target.value})
        setError("")}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Please enter a description" value={description} onChange={(e)=>{setFormData({...formData, description: e.target.value})
      setError("")}} />
      </Form.Group>

     <Form.Group className="mb-3" controlId="formBasickT">
        <Form.Label>Address</Form.Label> {/* this needs to be a dropdown */}
        <Form.Control type="text" placeholder="" value={address} onChange={(e)=>{setFormData({...formData, address: e.target.value})
      setError("")}} />
      </Form.Group>

     <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Label>Kitchen Type</Form.Label>
      <Form.Control as="select" required custom  value={kitchenType} onChange={(e)=>{setFormData({...formData, kitchenType: e.target.value})
      setError("")}} >
      <option defaultChecked>Choose one...</option>
      <option>Dark kitchen</option>
      <option>Residency</option>
      <option>Central production unit</option>
     </Form.Control>
    </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default KitchenModal;