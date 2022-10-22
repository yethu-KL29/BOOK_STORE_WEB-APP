import React from 'react'
import './books.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
function Book(props) {
    const {_id,name,author,description,avail,image,price}=props.book;
  return (
    <div className='cards'>
    <img src={image}></img>
    <h2>  {name}</h2>
    <h3>by {author}</h3>
    <p>{description}</p>
    <h2>Rs {price}</h2>
    <Button><Link to = {`/books /${_id}`}>Update</Link></Button>
    <Button>Delete</Button> 

    </div>
  )
}

export default Book
