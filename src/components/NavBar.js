
import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import './NavBar.css'


function Navbar() {
    const [click, setClick] = useState(false)
    // const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  
    // const showButton = () => {
    //   if(window.innerWidth <=960) {
    //       setButton(false)
    //   } else {
    //       setButton(true)
    //   }
    // }
  
    // useEffect(() => {
    //   showButton()
    // }, [])
  
    // window.addEventListener('resize', showButton)
    return (
      <>
      <nav className="navbar">
          <div className="navbar-container">
              <div className='menu-icon' onClick={handleClick}>
                  <i className = {click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                      <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                          Home
                      </Link>
                   </li>
                   <li className="nav-item">
                      <Link to='/aboutme' className="nav-links" onClick={closeMobileMenu}>
                          About Me
                      </Link>
                   </li>
                   <li className="nav-item">
                      <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>
                          Projects
                      </Link>
                  </li>
                      <li className="nav-item">
                      <Link to='/contact-me' className="nav-links" onClick={closeMobileMenu}>
                          Contact Me
                      </Link>
                   </li>
              </ul>
              
          </div>
      </nav>
      </>
    )
  }
  export default Navbar