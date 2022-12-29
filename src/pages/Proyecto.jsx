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
         title="DISEÑO Y CREACIÓN PERSONAL" 
         description=" ¿Te sientes poco satisfecho o hay una parte de ti que sabe que se podría sentir y verse mejor en alguna de las siguientes áreas de tu vida? . La relación contigo mismo, tus relaciones interpersonales, la forma en que te relacionas con tus familiares, tu estado de salud físico, tu estabilidad financiera...
         Con nuestro servicio, podemos ayudarte a diseñar, transformar y sentirte más pleno en estas áreas. "/>
        <ProyectoConrainer
         img={proyectoDeTrabajo} 
         title="DISEÑO Y CREACIÓN PROFESIONAL" 
         description=" ¿Te has sentido estancado en tu trabajo? ¿Piensas que puedes dedicarte a algo que te haga más feliz pero te da miedo? ¿Hay una parte de ti que sabe que eres capaz de muchas más cosas de las que hoy haces? 
         Con este servicio nuestro objetivo es ayudarte a desarrollar las habilidades que requieres para estar en el trabajo que siempre has deseado."/>
         <ProyectoConrainer
         id="h"
         img={proyectoDePareja} 
         title="DISEÑO Y CREACIÓN de pareja" 
         description="¿Has dejado de lado tus sueños por cumplir los de tu pareja? ¿O no tienes pareja porque truncan tus sueños? Con este servicio, aprenderán a diseñar un futuro juntos sin dejar de lado las metas personales, es decir van a construir una dualidad desde la interdependencia, porque tus sueños y los de tu pareja pueden ir de la mano si se diseña y ejecuta el plan correcto. "/>
        </div>
    </div>
  )
}