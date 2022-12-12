import React from 'react'
export const ProyectoConrainer = (props) => {
 
    return (
    <div className='Proyectos-container' id={props.id}>
        <div className='Proyectos-Title'>
        <h4>{props.title}</h4>
        </div>
        <img src={props.img} alt="" />
        <p>{props.description}</p>
        <a href="#">¡ME INTERESA!</a>
    </div>
  )
}
export default ProyectoConrainer