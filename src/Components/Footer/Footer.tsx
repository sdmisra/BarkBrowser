import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <header className="app-footer">
      <h2 className="footer-title">This is a footer!</h2>
      <Link to='/saved/'>
        <h3 className="saved-link">Saved Pictures</h3>
      </Link>
      <Link to='/results/'>
        <h3 className="results-link">Search for a Pooch!</h3>
      </Link>
    </header>
  )
}
export default Footer;