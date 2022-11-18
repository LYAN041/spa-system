import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./screens/home/home";
import Agendamentos from "./screens/agendamentos";
import Clientes from "./screens/clientes";
import Financeiro from "./screens/financeiro";
import Funcionarios from "./screens/funcionarios";
import Materiais from "./screens/materiais";
import Planejamento from "./screens/planejamento"
import Servicos from "./screens/servicos";

const Rotas = () => {
    return (
        <React.Fragment>

            <BrowserRouter>

            <Sidebar/>

            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/agendamentos' element={<Agendamentos/>} />
            <Route path='/clientes' element={<Clientes/>} />
            <Route path='/financeiro' element={<Financeiro/>} />
            <Route path='/funcionarios' element={<Funcionarios/>} />
            <Route path='/materiais' element={<Materiais/>} />
            <Route path='/servicos' element={<Servicos/>} />
            <Route path='/planejamento' element={<Planejamento/>} />
            </Routes>

            </BrowserRouter>

        </React.Fragment>

    )
}

export default Rotas