import React from 'react'
import '../styles/herramientas.css'
import brain from '../assets/Brain.png'
import cube from '../assets/Cube.png'
import human from '../assets/Human.png'
import meditate from '../assets/Meditate.png'
import plus from '../assets/Plus.png'
import power from '../assets/power.png'
export const Herramientas = () => {
  return (
   <div className='Herramientas-container'>
        <h3>NUESTRAS HERRAMIENTAS</h3>
        <h4>Hemos diseñado una metodología innovadora que reúne lo mejor de:</h4>
        <div className='Herramientas-item'>
            <div>
            <img src={human} alt="" srcset="" />
                <p>DESARROLLO HUMANO</p>
            </div>
            <div>
            <img src={meditate} alt="" srcset="" />
                <p>COACHING ONTOLÓGICO</p>
                
            </div>
            <div>
            <img src={power} alt="" srcset="" />
                <p>COACHING BASADO EN FORTALEZAS</p>
                
            </div>
            <div>
            <img src={brain} alt="" srcset="" />
                <p>PROGRAMACIÓN NEUROLINGÜÍSTICA</p>
              
            </div>
            <div>
            <img src={plus}alt="" srcset="" />
                <p>PSICOLOGÍA HUMANISTA</p>
           
            </div>
            <div>
            <img src={cube} alt="" srcset="" />
                <p>GESTALT</p>
               
            </div>
        </div>
   </div>
  )
}