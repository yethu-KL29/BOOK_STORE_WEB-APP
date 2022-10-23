import React from 'react'
import './header.css';
import {Link} from 'react-router-dom'
import BookIcon from '@mui/icons-material/Book'
import { Button } from '@mui/material';
function Header() {
  
  return (
    <div>
      <div className="header">
      <Button ><Link className='icon' to = "/"><BookIcon/></Link></Button>
        <div className='navbar'>
        
         
       
        
          <Button className='addBtn'><Link className='link' to ="/add">Add Product</Link></Button>
          <Button ><Link className='link' to ="/books">Books</Link></Button>
          <Button ><Link className='link' to ="/about">About Us</Link></Button>

        </div>
      </div>
    </div>
  )
}

export default Header;
