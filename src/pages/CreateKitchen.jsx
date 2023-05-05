import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { registerKitchen } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function CreateKitchen() {

const [formData, setFormData] = useState({
    image:"",
    price: "",
    description: "",
    kitchenType:"",
    address:"",

})
const [error, setError] = useState("")

const {image, price, description, kitchenType, address} = formData

const dispatch = useDispatch()



const onSubmit = (e)=>{
e.preventDefault()
dispatch(registerKitchen(formData))
console.log(formData)
setError("")
}



  return (
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
        <Form.Control type="text" placeholder="Please enter a description" value={description} onChange={(e)=>{setFormData({...formData, description: e.target.value})
      setError("")}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasickT">
        <Form.Label>Address</Form.Label> {/* this needs to be a dropdown */}
        <Form.Control type="text" placeholder="" value={address} onChange={(e)=>{setFormData({...formData, address: e.target.value})
      setError("")}} />
      </Form.Group>

<Form.Group className="mb-3" controlId="formBasicDropdown">
        <Form.Label>Kitchen Type</Form.Label> {/* this needs to be a dropdown */}
        <Form.Control type="dropdown" placeholder="" value={kitchenType} onChange={(e)=>{setFormData({...formData, kitchenType: e.target.value})
      setError("")}} />
      </Form.Group>

   
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default CreateKitchen