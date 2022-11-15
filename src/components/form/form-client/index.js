import React from "react";
import '../style.css'
import { useState } from "react";
import Table from "./table";
import Header from "../shared/header";
import Form from "./form";
import FormEdit from "./form-top";


const FormClient = () => {

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

  const [drawerTop, setDrawer] = useState("drawer-close");
  const [formTop, setForm] = useState("form-top close");
  

  const toggleTop = () => {
    if(drawerTop === "drawer-close" && formTop === "form-top close") {
      setDrawer("drawer-top")
      setForm("form-top")
    } else {
      setDrawer("drawer-close")
      setForm("form-top close")
    }
  }

  const data = localStorage.getItem("clients");
  const [items, setItems] = useState(data ? JSON.parse(data) : []);

  const addItems = (newItems) => {
    const newTransaction = [...items, newItems];
    setItems(newTransaction);
    localStorage.setItem("clients", JSON.stringify(newTransaction))
  };

  const removeItems = (ID) => {
    const itemsFiltered = items.filter((transaction) => transaction.id !== ID);
    let confirmation = window.confirm('Excluir item?');
    if(confirmation === true) {
      setItems(itemsFiltered);
      localStorage.setItem("clients", JSON.stringify(itemsFiltered));
    }
  }

  const [editItem, setEditItem] = useState([])

  const itemToEdit = (ID) => {
    const itemEdit = items.find((transaction) => transaction.id === ID);
    setEditItem([itemEdit]);
    toggleTop()
  }

  const editClient = (client) => {
    let itemEditado = editItem;
    let itemObservations = {
      date: client.dateAtendiment,
      observations: client.observations
    };
    itemEditado[0].name = client.name === "" ? itemEditado[0].name : client.name;
    itemEditado[0].nasc = client.nasc === "" ? itemEditado[0].nasc : client.nasc;
    itemEditado[0].phone = client.phone === "" ? itemEditado[0].phone : client.phone;
    itemEditado[0].email = client.email === "" ? itemEditado[0].email : client.email;
    itemEditado[0].profession = client.profession === "" ? itemEditado[0].profession : client.profession;
    itemEditado[0].attendance = client.attendance === "" ? itemEditado[0].attendance : client.attendance;
    itemEditado[0].tratament = client.tratament === "" ? itemEditado[0].tratament : client.tratament;
    itemEditado[0].observations.push(itemObservations);
    localStorage.setItem("clients", JSON.stringify(items));
  }

    return( 
      
      <React.Fragment>

        {editItem.map((item) => 
        <FormEdit
        name={item.name}
        nasc={item.nasc}
        email={item.email}
        profession={item.profession}
        phone={item.phone}
        attendance={item.attendance}
        tratament={item.tratament}
        observations={item.observations}
        drawerTop={drawerTop}
        formTop={formTop}
        editClient={editClient}
        toggleTop={toggleTop}
        />
        )}

        <div className="container-form">

        <Header
        title={'Clientes'}
        btnTitle={'+ Adicionar'}
        event={toggleDrawer}
        />


        <Form
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
        openForm={openForm}
        addItems={addItems}
        />

        <Table
        list={['Nome', 'Telefone', 'Profissão', 'D.nascimento', 'Sexo', 'E-mail', 'Profissional', '', '']}
        removeItems={removeItems}
        itemToEdit={itemToEdit}
        toggleTop={toggleTop}
        data={items}
        />
        </div>
        </React.Fragment>
    )
}

export default FormClient