import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to='/' className="app-header">
      <h2 className="header-title">Bark Browser</h2>
      <h3 className="header-link">The title is a link!</h3>
      </Link>
    </header>
  )
}

export default Header;