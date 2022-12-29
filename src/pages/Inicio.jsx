import React from 'react'
import { NavBar } from '../components/NavBar'
import { Contacto } from './Contacto'
import { Footer } from './Footer'
import { Header } from './Header'
import { Herramientas } from './Herramientas'
import { Metodologias } from './Metodologias'
import { Programa } from './Programa'
import { Proyecto } from './Proyecto'
import { SobreNosotros } from './SibreNosotrsos'


export const Inicio = () => {
  return (
    <>
      <Header/>
      <SobreNosotros/>
      <Herramientas/>
      <Metodologias/>
      <Programa/>
      <Proyecto/>
      <Contacto/>
      <Footer/>
    </>
  )
}
