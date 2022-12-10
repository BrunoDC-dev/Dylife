import React from 'react'
import { NavBar } from '../components/NavBar'
import { Metodologias } from './Metodologias'
import { Programa } from './Programa'
import { Proyecto } from './Proyecto'


export const Inicio = () => {
  return (
    <>
      <Metodologias/>
      <Proyecto/>
      <Programa/>
    </>
  )
}
