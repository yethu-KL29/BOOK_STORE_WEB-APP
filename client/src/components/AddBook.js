import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import './Addbook.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Checkbox } from '@mui/material';
function AddBook() {
  const history = useNavigate();
  const [input, setinput] = useState({
    name:'',
   description:"",
   price:"",
   author:"",
   image:""
  })
 const [checked, setchecked] = useState(false)
  const handlechange=(e)=>{
    setinput((prevstate)=>({
      ...prevstate,
      [e.target.name] :e.target.value
    }))
  }
  const submit=(e)=>{
  e.preventDefault();
  console.log(input,checked);
  sendRequest().then(()=>history('/books'))

  }

 const sendRequest=async()=>{
  await axios.post("http://localhost:5000/books",{
    name:String(input.name),
    author:String(input.author),
    description:String(input.description),
    price:Number(input.price),
    image:String(input.image),
    avail:Boolean(checked),
  }).then(res=>res.data);
 }

  return (
    <div>
      <form onSubmit={submit}>

      <label>Name:</label>
      <input type="text" name="name" value={input.name} onChange={handlechange}/>
      <label>Author:</label>
      <input type="text" name="author" value={input.author} onChange={handlechange}/>
      <label>Desc:</label>
      <input type="text" name="description" value={input.description} onChange={handlechange}/>
      <label>Price:</label>
      <input type="number" name="price" value={input.price} onChange={handlechange}/>
      <label>Image:</label>
      <input type="text" name="image" value={input.image} onChange={handlechange}/>
      <label>Available</label><Checkbox checked={checked} onChange={()=>setchecked(!checked)}/>
      <Button variant='contained' type='submit'>Addbook</Button>

      </form>

    </div>
  )
}

export default AddBook
