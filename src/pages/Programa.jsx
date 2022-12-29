import React from 'react'
import ProgrmaContainer from '../components/ProgramaContainer'
import '../styles/programa.css'
export const Programa = () => {
  return (
    <div id='programa' className='Programa-Section'>
      <h3>Programa</h3>
      <div className='Programa-flex'>
        <ProgrmaContainer 
        title="1" 
        class="lightblue"
        description="Recibirás un kit de bienvenida con las herramientas que usaremos a lo largo de todas las sesiones."
        />
        <ProgrmaContainer 
        title="2" 
        class="lightblue2"
        description="Hacemos una evaluación de tu estado actual y aplicamos evaluación científica para identificar tus fortalezas natas."
        />
        <ProgrmaContainer 
        title="3" 
        class="lightblue3"
        description="Diseñamos tu plan estratégico, con los objetivos que vamos a lograr."
        />
        <ProgrmaContainer 
        title="4" 
        class="blue"
        description="Te acompañamos durante la ejecución de tu plan por 1, 3 o 6 meses, tú eliges."
        />
        <ProgrmaContainer 
        title="5" 
        class="blue2"
        description="Hacemos la evaluación final de los objetivos alcanzados."
        />
      </div>
    </div>
  )
}
