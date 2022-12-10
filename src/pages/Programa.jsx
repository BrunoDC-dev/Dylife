import React from 'react'
import ProgrmaContainer from '../components/ProgramaContainer'
import '../styles/programa.css'
export const Programa = () => {
  return (
    <div className='Programa-Section'>
      <h3>Programa</h3>
      <div className='Programa-flex'>
        <ProgrmaContainer 
        title="1" 
        class="lightblue"
        description="Recibirás un kit de bienvenida con las herramientas que usaremos a lo largo de todas las sesiones"
        />
        <ProgrmaContainer 
        title="2" 
        class="lightblue2"
        description="Hacemos una evaluación de tu estado actual"
        />
        <ProgrmaContainer 
        title="3" 
        class="lightblue3"
        description="Diseñamos tu proyecto personal, con los objetivos que vamos a lograr"
        />
        <ProgrmaContainer 
        title="4" 
        class="blue"
        description="Te ayudamos a diseñar un plan estratégicote acompañamos en su ejecución"
        />
        <ProgrmaContainer 
        title="5" 
        class="blue2"
        description="Hacemos la evaluación final de los objetivos alcanzados"
        />
      </div>
    </div>
  )
}
