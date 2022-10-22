
import React, { useState } from 'react'
import { useEffect } from 'react';
import Axios from 'axios';
const URL ="http://localhost:5000/books";
// const fetch = async()=>{
//     return await Axios.get(URL).then((res)=>res.data);
// }

function AllBooks() {
    const [books,setBooks] =useState();
    useEffect(() => {
     Axios.get(URL).then((res)=>{
        setBooks(res.data);
     })
    
     
    }, [])
    console.log(books);
    {books && books.map}
    
  return (
    <div>
      
    </div>
  )
}

export default AllBooks
