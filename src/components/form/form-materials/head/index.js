import { useState } from "react"

const Head = (props) => {

    const [openOptions, setOpenOptions] = useState("select-menu")

    const toggleOptions = () => {
      if (openOptions === "select-menu") {
        setOpenOptions("select-menu active")
      } else {
        setOpenOptions("select-menu")
      }
    }
    return (
        <div className="content-form">
            <h2 className="title-form">Materiais</h2>
            <div className={openOptions}>
                <div className="select-btn" onClick={toggleOptions}>
                    <span className="sBtn-text">Categorias</span>
                    <i className="bx bx-chevron-down"></i>
                </div>

                <ul className="options">
                    <li className="option" onClick={ function render() {props.renderSwitch("limpeza") } } >
                        <i className='bx bx-brush-alt'></i>
                        <span className="option-text">Limpeza</span>
                    </li>
                    <li className="option" onClick={ function render() {props.renderSwitch("velas") } }>
                        <i className='bx bx-spray-can'></i>
                        <span className="option-text">Velas</span>
                    </li>
                    <li className="option" onClick={ function render() {props.renderSwitch("cozinha") } }>
                        <i className='bx bx-restaurant'></i>
                        <span className="option-text">Cozinha</span>
                    </li>
                    <li className="option" onClick={ function render() {props.renderSwitch("massagem") } }>
                        <i className='bx bx-hotel'></i>
                        <span className="option-text">Massagem</span>
                    </li>
                    <li className="option" onClick={ function render() {props.renderSwitch("dayspa") } }>
                        <i className='bx bx-star'></i>
                        <span className="option-text">DaySpa</span>
                    </li>
                    <li className="option" onClick={ function render() {props.renderSwitch("outros") } }>
                        <i className='bx bx-dots-horizontal-rounded'></i>
                        <span className="option-text">Outros</span>
                    </li>
                </ul>
            </div>
            <button className="button-43" onClick={props.toggleDrawer}>+ Adicionar</button>
        </div>
    )
}

export default Head