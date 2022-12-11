
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
            <div>
                <h2>Designing your life</h2>
                <h3>Conoce tu mejor versión</h3>
            </div>
        </div>
        </div>
    </div>
  )
}