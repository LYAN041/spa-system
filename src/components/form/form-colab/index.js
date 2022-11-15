import React from "react";
import '../style.css'
import { useState } from "react";
import Table from "./table";
import Header from "../shared/header";
import Form from "./form";


const FormColab = () => {
  
  const [openDrawer, setOpenDrawer] = useState("drawer");
  const [openForm, setOpenForm] = useState("content-drawer close")

  const toggleDrawer = () => {
    if(openDrawer === "drawer" && openForm === "content-drawer close") {
      setOpenDrawer("drawer open")
      setOpenForm("content-drawer")
    } else {
      setOpenDrawer("drawer")
      setOpenForm("content-drawer close")
    }
  }

  const data = localStorage.getItem("funcionarios");
  const [items, setItems] = useState(data ? JSON.parse(data) : []);

  const addItems = (newItems) => {
    const newTransaction = [...items, newItems];
    setItems(newTransaction);
    localStorage.setItem("funcionarios", JSON.stringify(newTransaction))
  };

  const removeItems = (ID) => {
    const itemsFiltered = items.filter((transaction) => transaction.id !== ID);
    let confirmation = window.confirm('Excluir item?');
    if(confirmation === true) {
      setItems(itemsFiltered);
      localStorage.setItem("funcionarios", JSON.stringify(itemsFiltered));
    }
  }

    return(
        <div className="container-form">

        <Header
        title={'Funcionários'}
        btnTitle={'+ Adicionar'}
        event={toggleDrawer}
        />

      <React.Fragment>
      <div className={openDrawer}>
      <div className="title-side">Cadastrar Funcionários</div>
        <div className={openForm}>

        <Form
        addItems={addItems}
        toggleDrawer={toggleDrawer}
        />

        </div>
      </div>
      </React.Fragment>

        <Table
        list={['Nome', 'Telefone', 'RG', 'CPF', 'Pix', 'Conta', 'Agência', 'Banco', '']}
        removeItems={removeItems}
        data={items}
        />
        </div>
    )
}

export default FormColab