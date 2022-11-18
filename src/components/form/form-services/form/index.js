import React from "react";
import { useState } from "react";

const initialState = {
    id: '',
    type: '',
    name: '',
    recipient: '',
    service: '',
    date: '',
    phone: ''
  };

const Form = (props) => {

  const [fields, setFields] = useState(initialState);

  const generateId = () => Math.round(Math.random() * 1000);

  const handleFieldsChange = (e) => setFields({
    ...fields,
    id: generateId(),
    [e.currentTarget.name]: e.currentTarget.value
  });
  
  const handleSubmit = e => {
    e.preventDefault()
    props.addItems(fields)
    setFields(initialState)
    props.toggleDrawer()
  };

   return(
    <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Tipo:</span>
              <input type="text" name="type" value={fields.type} onChange={handleFieldsChange} placeholder="Ex. Gift card" />
            </div>
            <div className="input-box">
              <span className="details">Nome de:</span>
              <input type="text" name="name" value={fields.name} onChange={handleFieldsChange} placeholder="Ex. Renata silva" />
            </div>
            <div className="input-box">
              <span className="details">Nome para:</span>
              <input type="text" name="recipient" value={fields.recipient} onChange={handleFieldsChange} placeholder="Ex. Jessica alves" />
            </div>
            <div className="input-box">
              <span className="details">Data:</span>
              <input type="date" name="date" value={fields.date} onChange={handleFieldsChange} required/>
            </div>
            <div className="input-box">
              <span className="details">Procedimento:</span>
              <input type="text" name="service" value={fields.service} onChange={handleFieldsChange} placeholder="Ex. massagem" />
            </div>
            <div className="input-box">
              <span className="details">Telefone:</span>
              <input type="number" name="phone" value={fields.phone} onChange={handleFieldsChange} placeholder="Ex. 41 9999-9999" />
            </div>
          </div>
          <div className="btns-service">
                <div className="button-side">
                  <input type="submit" value="Confirmar" />
                </div>
                <div className="button-side-cancel">
                  <input type="button" value="Cancelar" onClick={props.toggleDrawer} />
                </div>
          </div>
        </form>
   )

}

export default Form