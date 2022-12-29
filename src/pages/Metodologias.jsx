import React from 'react'
import MetodologiasCotainer from '../components/MetodologiasContainer'
import '../styles/metodologias.css'
import hands from '../assets/hands.png'
import notes from '../assets/notes.png'
export const Metodologias = () => {
  return (
    <div id='metodologias'className='Metodologias-section'>
      <h2>METODOLOGIAS</h2>
      <h3>Creemos en ti, trabajamos tus fortalezas natas y con ellas construimos tu plan de futuro. Apoyándonos en una evaluación científica, entenderemos cómo usar tus puntos fuertes para conseguir tus propósitos.</h3>
      <div className='flex-metodologias'>
      <MetodologiasCotainer 
      img={notes} 
      title="Diseño y planeación del futuro:" 
      description="4 sesiones semanales para construir las metas que deseas, identificar tus fortalezas natas y crear un plan estratégico personalizado."
      />
      <MetodologiasCotainer 
      img={hands} 
      title="Manos a la obra:" 
      description="Te acompañamos por 3 meses, revisando los avances e identificando limitaciones en tu desarrollo para ayudarte a modificarlas."
      />
      </div>
    </div>
  )
}
