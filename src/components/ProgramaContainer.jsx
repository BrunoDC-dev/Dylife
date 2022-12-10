import React from 'react'
export const ProgrmaContainer = (props) => {
 
    return (
    <div className='Programa-container'>
        <div className='Programa-number'id={props.class}>
        <h4>{props.title}</h4>
        </div>
        <p>{props.description}</p>
    </div>
  )
}
export default ProgrmaContainer