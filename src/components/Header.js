import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <>
      <header>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <nav>
            <ul>
                <li>PC</li>
                <li>Switch</li>
                <li>PS5</li>
                <li>XBOX</li>
                <li>Accessoires</li>
            </ul>
        </nav>
        <div className="telephone">+262 212121</div>
      </header>
    </>
  )
}

export default Header
