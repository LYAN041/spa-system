import React from "react";
import '../style.css'
import { useState } from "react";
import Table from "./table";
import Form from "./form";
import Head from "./head";
import FormEditProduct from "./form-edit";


const FormMaterials = () => {

  const [openDrawer, setOpenDrawer] = useState("drawer");
  const [openForm, setOpenForm] = useState("content-drawer close")

  const toggleDrawer = () => {
    if (openDrawer === "drawer" && openForm === "content-drawer close") {
      setOpenDrawer("drawer open")
      setOpenForm("content-drawer")
    } else {
      setOpenDrawer("drawer")
      setOpenForm("content-drawer close")
    }
  }

  const [drawerProduct, setDrawerProduct] = useState("drawer-block");
  const [formProduct, setFormProduct] = useState("form-block");
  

  const toggleProduct = () => {
    if(drawerProduct === "drawer-block" && formProduct === "form-block") {
      setDrawerProduct("drawer-product")
      setFormProduct("form-product")
    } else {
      setDrawerProduct("drawer-block")
      setFormProduct("form-block")
    }
  }

  const data = localStorage.getItem("materiais");
  const [items, setItems] = useState(data ? JSON.parse(data) : []);

  const addItems = (newItems) => {
    const newTransaction = [...items, newItems];
    setItems(newTransaction);
    localStorage.setItem("materiais", JSON.stringify(newTransaction))
  };

  const removeItems = (ID) => {
    const itemsFiltered = items.filter((transaction) => transaction.id !== ID);
    let confirmation = window.confirm('Excluir item?');
    if (confirmation === true) {
      setItems(itemsFiltered);
      localStorage.setItem("materiais", JSON.stringify(itemsFiltered));
    }
  }

  const [dataTable, setDataTable] = useState([])


  const renderSwitch = (category) => {
    let dataFilter = items.filter(item => item.category === category);
    setDataTable(dataFilter);
  }

  const [productForEdit, setProductForEdit] = useState([])

  const productToEdit = (ID) => {
    const productEdit = items.find((transaction) => transaction.id === ID);
    setProductForEdit([productEdit]);
    toggleProduct();
  }

  const editProduct = (product) => {
    let itemEditado = productForEdit;

    itemEditado[0].amount = product.amount === "" ? itemEditado[0].amount : product.amount;
    itemEditado[0].validity = product.validity === "" ? itemEditado[0].validity : product.validity;
    itemEditado[0].lastpurchase = product.lastpurchase === "" ? itemEditado[0].lastpurchase : product.lastpurchase;
    itemEditado[0].nextpurchase = product.nextpurchase === "" ? itemEditado[0].nextpurchase : product.nextpurchase;
    localStorage.setItem("materiais", JSON.stringify(items));
  }
  
  

  return (
    <div className="container-form">

      <Head
       toggleDrawer={toggleDrawer}
       renderSwitch={renderSwitch}
      />

      <React.Fragment>
        <div className={openDrawer}>
          <div className="title-side">Cadastrar Produtos</div>
          <div className={openForm}>

            <Form
              addItems={addItems}
              toggleDrawer={toggleDrawer}
            />

          </div>
        </div>
      </React.Fragment>

      <React.Fragment>
        <div className={drawerProduct}>
          <div className="title-side">Editar Produto</div>
          <div className={formProduct}>

            <FormEditProduct
             toggleProduct={toggleProduct}
             editProduct={editProduct}
            />

          </div>
        </div>
      </React.Fragment>

      <Table
        list={['Categoria', 'Nome', 'Descrição', 'Quantidade', 'Validade', 'Data da última compra', 'Data da próxima compra', '', '']}
        productToEdit={productToEdit}
        removeItems={removeItems}
        data={dataTable}
      />
    </div>
  )
  
}

export default FormMaterials