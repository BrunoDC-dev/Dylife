
import React from 'react'
import '../styles/header.css'
import logo from '../assets/logo-dyylife.png'
export const Header = () => {
  return (
    <div className='header-background'>
        <div className='header-container '>
        <div className='header-icon'>
        <i class="fa-solid fa-bars"></i>
        </div>
        <div className='header-img'>
        <img src={logo} alt="" />
        <nav className='nav-header'>
          <ul>
            <li><a href="">INICIO</a></li>
            <li><a href="">METODOLOGIAS</a></li>
            <li><a href="">PROGRAMA</a></li>
            <li><a href="">CONTACTO</a></li>
          </ul>
        </nav>
        </div>
        <div className='header-title'>
            <div>
                <h2>Designing your life</h2>
                <h3>Conoce tu mejor versión</h3>
            </div>
        </div>
        </div>
    </div>
  )
}