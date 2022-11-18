import React from "react";
import { useState } from "react";

const initialState = {
    id: '',
    name: '',
    rg: '',
    cpf: '',
    phone: '',
    pix: '',
    acount: '',
    agency: '',
    bank: ''
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
    <>
    
    <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Nome</span>
              <input type="text" name="name" value={fields.name} onChange={handleFieldsChange} placeholder="Ex. Maria da Silva" />
            </div>
            <div className="input-box">
              <span className="details">Telefone</span>
              <input type="text" name="phone" value={fields.phone} onChange={handleFieldsChange} placeholder="Ex. 41 99999-9999" />
            </div>
            <div className="input-box">
              <span className="details">RG</span>
              <input type="number" name="rg" value={fields.rg} onChange={handleFieldsChange} placeholder="Ex. 12345-6" />
            </div>
            <div className="input-box">
              <span className="details">CPF</span>
              <input type="number" name="cpf" value={fields.cpf} onChange={handleFieldsChange} placeholder="Ex. 123.456.789.10" />
            </div>
            <div className="input-box">
              <span className="details">Pix</span>
              <input type="text" name="pix" value={fields.pix} onChange={handleFieldsChange} placeholder="Ex. 12345" />
            </div>
            <div className="input-box">
              <span className="details">Conta</span>
              <input type="number" name="acount" value={fields.acount} onChange={handleFieldsChange} placeholder="Ex. 342515721" />
            </div>
            <div className="input-box">
              <span className="details">Banco</span>
              <input type="text" name="bank" value={fields.bank} onChange={handleFieldsChange} placeholder="Ex. Caixa" />
            </div>
            <div className="input-box">
              <span className="details">Agência</span>
              <input type="number" name="agency" value={fields.agency} onChange={handleFieldsChange} placeholder="Ex. 1234" />
            </div>
          </div>
          <div className="btns-side">
                <div class="button-side">
                  <input type="submit" value="Confirmar" />
                </div>
                <div className="button-side-cancel">
                  <input type="button" value="Cancelar" onClick={props.toggleDrawer} />
                </div>
              </div>
        </form>
        
        </>
   )

}

export default Form