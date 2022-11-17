import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {

  const [openBar, setOpenBar] = useState("sidebar")

  const toggle = () => {
    if(openBar === "sidebar") {
      setOpenBar("sidebar open")
    } else {
      setOpenBar("sidebar")
    }
  }
    return (
      <React.Fragment>
      <div className={openBar}>
        <div className="logo-details">
        <i className='bx bxl-spring-boot icon'></i>
          <div className="logo_name">Botânica Spa</div>
          <i className='bx bx-menu' id="btn" onClick={toggle}></i>
        </div>
      <ul className="nav-list">
        <li>
        <Link to='/'>
          <div className='a'>
          <i className='bx bx-home-alt'></i>
            <span className="links_name">Início</span>
          </div>
          </Link>
           <span className="tooltip">Início</span>
        </li>
        <li>
          <Link to='/clientes'>
          <div className='a'>
          <i className='bx bx-user'></i>
            <span className="links_name">Clientes</span>
          </div>
          </Link>
           <span className="tooltip">Clientes</span>
        </li>
        <li>
         <Link to='/agendamentos'> 
         <div className='a'>
         <i className='bx bx-id-card'></i>
           <span className="links_name">Agendamentos</span>
         </div>
         </Link>
         <span className="tooltip">Agendamentos</span>
       </li>
       <li>
          <Link to='/planejamento'>
         <div className='a'>
         <i className='bx bx-current-location'></i>
           <span className="links_name">Planejamento</span>
         </div>
         </Link>
         <span className="tooltip">Planejamento</span>
       </li>
       <li>
          <Link to='/servicos'>
         <div className='a'>
         <i className='bx bx-gift'></i>
           <span className="links_name">Gift Cards</span>
         </div>
         </Link>
         <span className="tooltip">Gift Cards</span>
       </li>
       <li>
          <Link to='/materiais'>
         <div className='a'>
         <i className='bx bx-box'></i>
           <span className="links_name">Materiais</span>
         </div>
         </Link>
         <span className="tooltip">Materiais</span>
       </li>
       <li>
          <Link to='/funcionarios'>
         <div className='a'>
         <i className='bx bx-group'></i>
           <span className="links_name">Funcionários</span>
         </div>
         </Link>
         <span className="tooltip">Funcionários</span>
       </li>
       <li>
          <Link to='/financeiro'>
         <div className='a'>
         <i className='bx bx-bar-chart'></i>
           <span className="links_name">Financeiro</span>
         </div>
         </Link>
         <span className="tooltip">Financeiro</span>
       </li>
      </ul>
    </div>
  </React.Fragment>
    )
}

export default Sidebar;