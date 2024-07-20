import React from 'react'
import './Navbar.css'
//import axios from './axios.js'
// useEffect(()=>{
 
// },[])
const Header=()=>{
    return (
        <div className="navbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
        alt="logo" className='logo' />
        <ul>
        <li><b>Home</b></li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Recently Added</li>
          <li>My List</li>

        </ul>
        <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar"
        className='avatar' />
       
        </div>
    )
} 

export default Header