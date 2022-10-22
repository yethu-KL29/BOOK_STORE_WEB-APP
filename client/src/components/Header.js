import React from 'react'
import './header.css';
import {Link} from 'react-router-dom'
import BookIcon from '@mui/icons-material/Book'
function Header() {
  return (
    <div>
      <div className="header">
        <div className='navbar'>
           <BookIcon/>
          <button className='addBtn'><Link className='link' to ="/add">Add Product</Link></button>
          <button ><Link className='link' to ="/books">Books</Link></button>
          <button ><Link className='link' to ="/about">About Us</Link></button>
        

        </div>
      </div>
    </div>
  )
}

export default Header;
