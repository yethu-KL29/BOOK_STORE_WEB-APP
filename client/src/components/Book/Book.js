import React from 'react'
import './books.css';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Book(props) {
  const history = useNavigate();

    const {_id,name,author,description,image,price}=props.book;
    
    const Deletehandler=()=>{
      axios.delete(`http://localhost:5000/books/${_id}`)
      .then(res=>res.data)
      .then(()=>history("/"))
      .then(()=>history("/books"))
    }
  return (
    <div className='cards'>
    <img src={image}></img>
    <h2>  {name}</h2>
    <h3>by {author}</h3>
    <p>{description}</p>
    <h2>Rs {price}</h2>
    <Button><Link to = {`/books/${_id}`}>Update</Link></Button>
    <Button onClick={Deletehandler}>Delete</Button> 

    </div>
  )
}

export default Book
