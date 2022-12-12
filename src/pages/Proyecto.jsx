import React from 'react'
import ProyectoConrainer from '../components/ProyectosContainer'
import proyectoPersonal from '../assets/proyectoPersonal.png'
import proyectoDePareja from '../assets/proyectoDePareja.png'
import proyectoDeTrabajo from '../assets/proyectoDeTrabajo.png'
import '../styles/proyectos.css'
export const Proyecto = () => {
  return (
    <div className='Proyectos-Section'>
        <h3>PROYECTOS</h3>
        <div className='proyectos-flex'>
        <ProyectoConrainer
         img={proyectoPersonal} 
         title="Proyecto personal" 
         description=" Lorem ipsum dolor sit amet consectetur. Nec vitae mauris turpis ut elit id pellentesque. Id pellentesque amet sed diam risus. Eget pellentesque egestas cras a vestibulum nisl scelerisque varius. Nisi et ligula at ut.Lorem ipsum dolor sit amet consectetur. Nec vitae mauris turpis ut elit id pellentesque. Id pellentesque amet sed diam risus. Eget pellentesque egestas cras a vestibulum nisl scelerisque varius. Nisi et ligula at ut."/>
        <ProyectoConrainer
         img={proyectoDeTrabajo} 
         title="Proyecto de trabajo" 
         description=" Lorem ipsum dolor sit amet consectetur. Nec vitae mauris turpis ut elit id pellentesque. Id pellentesque amet sed diam risus. Eget pellentesque egestas cras a vestibulum nisl scelerisque varius. Nisi et ligula at ut.Lorem ipsum dolor sit amet consectetur. Nec vitae mauris turpis ut elit id pellentesque. Id pellentesque amet sed diam risus. Eget pellentesque egestas cras a vestibulum nisl scelerisque varius. Nisi et ligula at ut."/>
         <ProyectoConrainer
         id="h"
         img={proyectoDePareja} 
         title="Proyecto de pareja" 
         description=" Lorem ipsum dolor sit amet consectetur. Nec vitae mauris turpis ut elit id pellentesque. Id pellentesque amet sed diam risus. Eget pellentesque egestas cras a vestibulum nisl scelerisque varius. Nisi et ligula at ut.Lorem ipsum dolor sit amet consectetur. Nec vitae mauris turpis ut elit id pellentesque. Id pellentesque amet sed diam risus. Eget pellentesque egestas cras a vestibulum nisl scelerisque varius. Nisi et ligula at ut."/>
        </div>
    </div>
  )
}