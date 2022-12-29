import React from 'react'
export const ProyectoConrainer = (props) => {
    return (
    <div className='Proyectos-container' id={props.id}>
        <div className='Proyectos-Title'>
        <h4>{props.title}</h4>
        </div>
        <img src={props.img} alt="" />
        <p>{props.description}</p>
        <a href={`https://wa.me/5579009514?text=Hola%20Buenas!%20Vengo%20desde%20el%20sitio%20de%20Dylife%20y%20me%20gustaría%20hablar%20sobre%20`+props.title}>¡ME INTERESA!</a>
    </div>
  )
}
export default ProyectoConrainer