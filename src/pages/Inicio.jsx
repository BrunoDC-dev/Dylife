import React from 'react'
import { NavBar } from '../components/NavBar'
import { Contacto } from './Contacto'
import { Footer } from './Footer'
import { Header } from './Header'
import { Metodologias } from './Metodologias'
import { Programa } from './Programa'
import { Proyecto } from './Proyecto'


export const Inicio = () => {
  return (
    <>
      <Header/>
      <Metodologias/>
      <Proyecto/>
      <Programa/>
      <Contacto/>
      <Footer/>
    </>
  )
}
