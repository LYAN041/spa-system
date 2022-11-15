import React from "react";
import '../style.css'
import { useState } from "react";
import Table from "./table";
import Header from "../shared/header";
import Form from "./form";


const FormServices = () => {
  
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

  const data = localStorage.getItem("services");
  const [items, setItems] = useState(data ? JSON.parse(data) : []);

  const addItems = (newItems) => {
    const newTransaction = [...items, newItems];
    setItems(newTransaction);
    localStorage.setItem("services", JSON.stringify(newTransaction))
  };

  const removeItems = (ID) => {
    const itemsFiltered = items.filter((transaction) => transaction.id !== ID);
    let confirmation = window.confirm('Excluir item?');
    if(confirmation === true) {
      setItems(itemsFiltered);
      localStorage.setItem("services", JSON.stringify(itemsFiltered));
    }
  }

    return(
        <div className="container-form">

        <Header
        title={'Gift Cards'}
        btnTitle={'+ Adicionar'}
        event={toggleDrawer}
        />

      <React.Fragment>
      <div className={openDrawer}>
      <div className="title-side">Cadastrar Gift Card</div>
        <div className={openForm}>

        <Form
        addItems={addItems}
        toggleDrawer={toggleDrawer}
        />

        </div>
      </div>
      </React.Fragment>

        <Table
        list={['Tipo', 'Nome de', 'Nome para', 'Data', 'Procedimento', 'Telefone', '']}
        removeItems={removeItems}
        data={items}
        />
        </div>
    )
}

export default FormServices