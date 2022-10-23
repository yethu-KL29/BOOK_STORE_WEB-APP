import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import {Button} from '@mui/material';
import { useEffect } from 'react';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Details() {
    const id = useParams().id
    console.log(id);
   const [input, setinput] = useState({})
   const [checked, setchecked] = useState(false)
   const history = useNavigate();
  useEffect(() => {
    const fetch=async()=>{
      await  axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res)=>res.data).then((data)=>setinput(data.book))
        
    };
  
    fetch()
  }, [id])
  console.log(input)
  
  const handlechange=(e)=>{
    setinput((prevstate)=>({
      ...prevstate,
      [e.target.name] :e.target.value
    }))
  }

 const sendRequest=async()=>{
  await axios.put(`http://localhost:5000/books/${id}`,{
    name:String(input.name),
    author:String(input.author),
    description:String(input.description),
    price:Number(input.price),
    image:String(input.image),
    avail:Boolean(checked),
  }).then(res=>res.data);
 }
 const submit=(e)=>{
  e.preventDefault();
  sendRequest().then(()=>history("/books"))
}
  console.log(input)
  return (
    <div>
    {input &&   <form onSubmit={submit}>

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
<Button variant='contained' type='submit'>Updatebook</Button>

</form>}
    </div>
  )
}

export default Details
