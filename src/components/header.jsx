import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>
        <h1>Dr Traveller</h1>
        <main>
            <HashLink to="/#home">Home</HashLink>
            <HashLink to="/#about">About</HashLink>
            <HashLink to="/contact">Contact</HashLink>
            <HashLink to="/services">Services</HashLink>
            <HashLink to="/#brands">Brands</HashLink>

        </main>
    </nav>
  )
}

export default Header   