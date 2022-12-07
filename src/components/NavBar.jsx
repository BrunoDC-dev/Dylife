
import { Logo } from '../atomos/Logo'
import { Links } from '../atomos/Links'
import '../styles/nav.css'

import React from 'react'




export const NavBar = () => {
    return (
        <div className='nav-container'>
            <div className="nav-logo">
                <Logo />
            </div>
            <div className="nav-links">
                <Links />
            </div>
        </div>
    )
}