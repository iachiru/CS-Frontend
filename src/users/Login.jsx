import { useState} from "react";
import { Form, Button } from "react-bootstrap";

import React from 'react'
import { logInUser } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {

const [formData, setFormData] = useState({
    email: "",
    password: "",  
})

const dispatch =useDispatch()

const { email, password} = formData

const navigate = useNavigate()

const onSubmit = (e)=>{
e.preventDefault()
dispatch(logInUser(formData))
//navigate("/profile")

}

  return (

    <>
        <Form onSubmit={onSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setFormData({...formData, password: e.target.value})} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </>
  )
}

export default Login