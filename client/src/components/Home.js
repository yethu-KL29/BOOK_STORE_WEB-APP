import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    textDecoration: "none",
    
  };
  return (
    <div >
     <Button style={mystyle}><Link  to ="/books">View All Products</Link></Button>
    </div>
  )
}

export default Home
