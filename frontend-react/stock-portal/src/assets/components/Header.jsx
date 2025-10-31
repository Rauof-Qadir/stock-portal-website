import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="navbar container pt-3 pb-3 align-items-start">
    <Link className="navbar-brand text-light" to="/">Stock Portal </Link> {/*yahn par hun ha a tag ki jaga par Link ka use ic lia kia ha kun ka ,Link ka use karna sa page action(click) karna par dubara rander nhy ho ga*/}
    <div className="d-flex">
        <Button text="Login" class='btn-outline-info' url='/login'/>
        &nbsp; 
        <Button text="Register" class=' btn-info' url='/register'/>
    </div>
    </nav>
  )
}

export default Header
