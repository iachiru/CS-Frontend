import React, { useState } from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteKitchen} from '../redux/actions'
import KitchenModal from './KichenModal'

function SingleKitchen (props) {

const dispatch = useDispatch()



    
const handleDelete = () =>{
    dispatch(deleteKitchen(props.data._id))
  }


 

  return (
    <>
    <Card style={{ width: '18rem' }} className="card">
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body className>
    <Card.Title>Kitchen {props.data.ref}</Card.Title>
    <Card.Text>
      {props.data.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Price:{props.data.price}</ListGroupItem>
    <ListGroupItem>Kitchen Type:{props.data.kitchenType}</ListGroupItem>
    <ListGroupItem>Kitchen Address:{props.data.address}</ListGroupItem>
  </ListGroup>
  <Card.Body className="cardButton">
    <KitchenModal data={props.data}/>
    <Button onClick={handleDelete} >Delete</Button>
  </Card.Body>
</Card>
    </>
  )
}

export default SingleKitchen