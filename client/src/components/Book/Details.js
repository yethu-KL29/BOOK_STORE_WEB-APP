import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';

import { useState } from 'react';
function Details() {
    const id = useParams().id
    console.log(id);
   const [input, setinput] = useState({})
   const [checked, setchecked] = useState(false)

  useEffect(() => {
    const fetch=()=>{
        axios.get(`http://localhost:5000/books/${id}`)
        .then((res)=>res.data)
    }
  
    fetch()
  }, [id])
  const submit=(e)=>{
     e.preventDefault();
  }
  const handlechange=(e)=>{
    console.log(e)
  }
  
  console.log(input)
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
<Button variant='contained' type='submit'>Updatebook</Button>

</form>
    </div>
  )
}

export default Details
