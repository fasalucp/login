import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Navigation = () => {
  return (
    <>
    <div className='navbar'>
        
        <Link className='link' to="/">Login</Link>
        <Link className='link'to= "/signup">Signup</Link>
    
</div>
<Outlet/>
    </>
    
    
  )
}

export default Navigation