import React from 'react'
import '../styles/contacto.css'
export const Contacto = () => {
  return (
    <div>     
        <div className='Contacto-Img'>
          <h2>“La energía y la persistencia conquistan todo”</h2>
        </div>
        <div className='Contacto-Container'>
          <h2>contacto</h2>
          <form action="" className='form-container'>
            <div>
            <label htmlFor="NOMBRE">NOMBRE:</label>
            <input type="text" name="NOMBRE" id="" placeholder='Escribe tu nombre...' />
            </div>
            <div>
            <label htmlFor="CORREO ELECTRONIC">CORREO ELECTRONICO:</label>
            <input type="email" name="CORREO ELECTRONICO" id="" placeholder='Escribe tu correo electrónico...' />
            </div>
            <div>
            <label htmlFor="MENSAJE">MENSAJE:</label>
            <textarea name="MENSAJE" id="" rows="10"placeholder='Déjanos un mensaje...'></textarea>
            </div>
            <button type="submit">ENVIAR</button>
          </form>
        </div>
    </div>
  )
}
