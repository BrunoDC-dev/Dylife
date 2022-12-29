
import React,{useState} from 'react'
import '../styles/header.css'
import logo from '../assets/logo-dyylife.png'
export const Header = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  console.log(accordionOpen)
  return (
    <div className='header-background'>
        <div className='header-container '>
        <div className='header-icon' onClick={()=>setAccordionOpen(!accordionOpen)} >
        {accordionOpen?  <i class="fa-solid fa-x"></i>:<i class="fa-solid fa-bars"></i>}
        </div>
        <div className='header-img'>
        <img src={logo} alt="" />
        <nav className='nav-header'aria-expanded={accordionOpen}>
          <ul>
            <li onClick={()=>setAccordionOpen(!accordionOpen)}><a href="#inicio">INICIO</a></li>
            <li onClick={()=>setAccordionOpen(!accordionOpen)}><a href="#metodologias">METODOLOGIAS</a></li>
            <li onClick={()=>setAccordionOpen(!accordionOpen)}><a href="#programa">PROGRAMA</a></li>
            <li onClick={()=>setAccordionOpen(!accordionOpen)}><a href="#contacto">CONTACTO</a></li>
          </ul>
        </nav>
        </div>
        <div className='header-title'>
            <div>
                <h2>Designing your life</h2>
                <h3>Conoce tu mejor versión</h3>
            </div>
        </div>
        </div>
    </div>
  )
}