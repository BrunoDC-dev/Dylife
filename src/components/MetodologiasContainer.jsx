import React from 'react'
export const MetodologiasCotainer = (props) => {
 
    return (
    <div className='Metodologias-container'>
        <img src={props.img} alt="" />
      <div className='Metodologias-desc-container'>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
export default MetodologiasCotainer