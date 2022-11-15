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
            <div class={openOptions}>
                <div class="select-btn" onClick={toggleOptions}>
                    <span class="sBtn-text">Categorias</span>
                    <i class="bx bx-chevron-down"></i>
                </div>

                <ul class="options">
                    <li class="option" onClick={ function render() {props.renderSwitch("limpeza") } } >
                        <i class='bx bx-brush-alt'></i>
                        <span class="option-text">Limpeza</span>
                    </li>
                    <li class="option" onClick={ function render() {props.renderSwitch("velas") } }>
                        <i class='bx bx-spray-can'></i>
                        <span class="option-text">Velas</span>
                    </li>
                    <li class="option" onClick={ function render() {props.renderSwitch("cozinha") } }>
                        <i class='bx bx-restaurant'></i>
                        <span class="option-text">Cozinha</span>
                    </li>
                    <li class="option" onClick={ function render() {props.renderSwitch("massagem") } }>
                        <i class='bx bx-hotel'></i>
                        <span class="option-text">Massagem</span>
                    </li>
                    <li class="option" onClick={ function render() {props.renderSwitch("dayspa") } }>
                        <i class='bx bx-star'></i>
                        <span class="option-text">DaySpa</span>
                    </li>
                    <li class="option" onClick={ function render() {props.renderSwitch("outros") } }>
                        <i class='bx bx-dots-horizontal-rounded'></i>
                        <span class="option-text">Outros</span>
                    </li>
                </ul>
            </div>
            <button className="button-43" onClick={props.toggleDrawer}>+ Adicionar</button>
        </div>
    )
}

export default Head