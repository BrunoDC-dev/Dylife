import React, { useState } from 'react'
import '../styles/contacto.css'
export const Contacto = () => {
  const [nombre, setNombre] = useState()
  const [email, setEmail] = useState()
  const [mensaje, setMensaje] = useState()
  const handleNombre=(event) =>{
    setNombre(event.target.value);

}
const handleEmail=(event) =>{
    setEmail(event.target.value);
}
const handleMensaje=(event) =>{
    setMensaje(event.target.value);

}
  return (
    <div id='contacto'>     
        <div className='Contacto-Img'>
          <h2>“La energía y la persistencia conquistan todo”</h2>
        </div>
        <div className='Contacto-Container'>
          <h2>contacto</h2>
          <form action="" className='form-container'>
            <div>
            <label htmlFor="NOMBRE">NOMBRE:</label>
            <input type="text" name="NOMBRE" id="" placeholder='Escribe tu nombre...'  onChange={handleNombre} />
            </div>
            <div>
            <label htmlFor="CORREO ELECTRONIC">CORREO ELECTRONICO:</label>
            <input type="email" name="CORREO ELECTRONICO" id="" placeholder='Escribe tu correo electrónico...'  onChange={handleEmail} />
            </div>
            <div>
            <label htmlFor="MENSAJE">MENSAJE:</label>
            <textarea name="MENSAJE" id="" rows="10"placeholder='Déjanos un mensaje...'  onChange={handleMensaje}></textarea>
            </div>
           <a href={`https://wa.me/5579009514?text=Hola%20Buenas!%20Vengo%20desde%20el%20sitio%20de%20Dylife%20soy%20`+nombre+`%20mi%20email%20`+email+`%20`+mensaje }>ENVIAR</a>
          </form>
        </div>
    </div>
  )
}
