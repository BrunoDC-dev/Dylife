import React from 'react'
import { NavBar } from '../components/NavBar'

import '../styles/inicio.css'


export const Inicio = () => {
  return (
    <div className='inicio-container'>
      <div className='inicio-top'>
        <NavBar />
        <div className='inicio-title'>
          <h1>Designing your life</h1>
          <h2>Conoce tu merjor version</h2>
        </div>
      </div>
      <div className='inicio-down'>
        <h1>METODOLOGIA</h1>
      </div>
    </div>
  )
}
