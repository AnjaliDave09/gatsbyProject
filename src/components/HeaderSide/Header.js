import React , {useState} from 'react'
import './Header.css';
import Button from 'react-bootstrap/Button';


const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
<>
<nav className="navigation">
      <a href="/" className="brand-name">
      <img
         src="/Logo.png"
         width='120px'
         height='50px'
         className="d-inline-block align-top"
         alt=" "
       />
      </a>
      <button className="hamburger"         
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <img src='nav.png' alt='nav'></img>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <a href="/Fordevelopers">For Developers</a>
          </li>
          <li>
            <a href="/Forcompanies">For Companies</a>
          </li>
          <li>
            <a href="/Formentors">For Mentors</a>
          </li>
          <li>
            <a href='/Signin'><Button variant="outline-primary">Signin</Button></a>
          </li>
        </ul>
      </div>
    </nav>
 </>
  )
}

export default Header