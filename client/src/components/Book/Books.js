
import React, { useState } from 'react';
import './books.css';
import { useEffect } from 'react';
import axios from 'axios';
import Book from './Book'
const URL ="http://localhost:5000/books";
const fetch = async()=>{
    return await axios.get(URL).then((res)=>res.data);
}

function Books() {
    const [books,setBooks] =useState([]);
    
    useEffect(() => {
    fetch().then((data)=>setBooks(data.books))
    
     
    }, [])
   
    console.log(books);
    
  return (
     <div>
      <ul>
        {books && books.map((book,i)=>{
          return (
            <div className='books'>
               <Book book={book}/>
             {/* <img src={book.image}></img>
              <h1>{book.name}</h1>
              <h1>{book.author}</h1>
              <h1>{book.price}</h1>
              <p>{book.description}</p>
              <Button>Update</Button>
              <Button>Delete</Button> */}
            </div>
          )
      })}
      </ul>
     </div>
  )
}

export default Books
