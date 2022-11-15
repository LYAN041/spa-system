import React from "react";
import { useState } from "react";

const initialState = {
    id: '',
    name: '',
    description: '',
    amount: '',
    validity: '',
    category: '',
    lastpurchase: '',
    nextpurchase: ''
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
              <span className="details">Nome</span>
              <input type="text" name="name" value={fields.name} onChange={handleFieldsChange} placeholder="Ex. Chá" />
            </div>
            <div className="input-box">
              <span className="details">Descrição</span>
              <input type="text" name="description" value={fields.description} onChange={handleFieldsChange} placeholder="Ex. Chá matte-leão" />
            </div>
            <div className="input-box">
              <span className="details">Quantidade</span>
              <input type="number" name="amount" value={fields.amount} onChange={handleFieldsChange} placeholder="Ex. 5" />
            </div>
            <div className="input-box">
              <span className="details">Validade</span>
              <input type="date" name="validity" value={fields.validity} onChange={handleFieldsChange} />
            </div>
            <div className="input-box">
              <span className="details">Data da última compra</span>
              <input type="date" name="lastpurchase" value={fields.lastpurchase} onChange={handleFieldsChange}/>
            </div>
            <div className="input-box">
              <span className="details">Data da próxima compra</span>
              <input type="date" name="nextpurchase" value={fields.nextpurchase} onChange={handleFieldsChange} />
            </div>
            <div className="input-box">
            <span className="details">Categoria</span>
              <select name="category" id="cat" value={fields.category} onChange={handleFieldsChange}>
                <option>Selecione...</option>
                <option name="category" value="limpeza">Limpeza</option>
                <option name="category" value="cozinha">Cozinha</option>
                <option name="category" value="velas">Velas</option>
                <option name="category" value="massagem">Massagem</option>
                <option name="category" value="dayspa">DaySpa</option>
                <option name="category" value="outros">Outros</option>
              </select>
            </div>
          </div>
          
          <div className="btns-side">
                <div class="button-side">
                  <input type="submit" value="Confirmar" />
                </div>
                <div class="button-side-cancel">
                  <input type="button" value="Cancelar" onClick={props.toggleDrawer} />
                </div>
              </div>
        </form>
   )

}

export default Form