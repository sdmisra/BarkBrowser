import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <header className="app-footer">
      <h2 className="footer-title">Navigation Links:  </h2>
      <Link to='/saved/'>
        <h3 className="saved-link">Saved Pictures</h3>
      </Link>
    </header>
  )
}
export default Footer;