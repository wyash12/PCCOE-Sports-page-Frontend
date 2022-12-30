import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
function Navbar() {
  return (
   <nav className="nav">
   <ul>
    <li ><CustomLink to='/' >Home</CustomLink></li>
    <li><CustomLink to='/about-us' >About us</CustomLink></li>
    <li><CustomLink to='/login' >Login</CustomLink></li>
    <li><CustomLink to='/registration' >Registration</CustomLink></li>
    <li ><CustomLink to='/admin-panel' >Admin Panel</CustomLink></li>
   </ul>
    
   </nav>
  )
}

function CustomLink({to, children, ...props}){
    const resolvedPath =useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

    return(
        <li className={isActive?"active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


export default Navbar