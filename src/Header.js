import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/header.css'

const Header = () => {
    return (
        <nav>
            <NavLink to="/">Produtos</NavLink>
            <NavLink to="contato">Contato</NavLink>
    
        </nav>
    )
}

export default Header
