import React from "react";
import { useState } from "react";

const initialState = {
    id: '',
    name: '',
    nasc: '',
    email: '',
    phone: '',
    profession: '',
    attendance: '',
    gender: '',
    tratament: '',
    observations: []
  };

const Form = (props) => {

  const [fields, setFields] = useState(initialState);

  const generateId = () => Math.round(Math.random() * 1000);

  const handleFieldsChange = (e) => setFields({
    ...fields,
    id: generateId(),
    [e.currentTarget.name]: e.currentTarget.value,
    observations: []
  });
  
  const handleSubmit = e => {
    e.preventDefault()
    props.addItems(fields)
    setFields(initialState)
    props.toggleDrawer()
  };

   return(
    <div className={props.openDrawer}>
      <div className="title-side">Cadastrar Cliente</div>
      <div className={props.openForm}>
     <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Nome</span>
              <input type="text" name="name" value={fields.name} onChange={handleFieldsChange} placeholder="Ex. maria da silva" />
            </div>
            <div className="input-box">
              <span className="details">Data de nascimento</span>
              <input type="date" name="nasc" value={fields.nasc} onChange={handleFieldsChange} />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" name="email" value={fields.email} onChange={handleFieldsChange} placeholder="Ex. teste@gmail.com" />
            </div>
            <div className="input-box">
              <span className="details">Telefone</span>
              <input type="text" name="phone" value={fields.phone} onChange={handleFieldsChange} placeholder="Ex. 41 99999-9999" />
            </div>
            <div className="input-box">
              <span className="details">Profissão</span>
              <input type="text" name="profession" value={fields.profession} onChange={handleFieldsChange} placeholder="Ex. médico" />
            </div>
            <div className="input-box">
              <span className="details">Atendido pela profissional:</span>
              <input type="text" name="attendance" value={fields.attendance} onChange={handleFieldsChange} placeholder="Ex. nicole" />
            </div>
            <div className="input-box" id="input-tratament">
              <span className="details">Tratamento Proposto:</span>
              <textarea name="tratament" id="tratament" value={fields.tratament} onChange={handleFieldsChange} />
            </div>
            <div className="input-box">

            </div>
            <div className="input-box" id="gender-div">
            <input type="radio" name="gender" value="Masculino" onChange={handleFieldsChange} id="dot-1"/>
            <input type="radio" name="gender" value="Feminino" onChange={handleFieldsChange} id="dot-2"/>
            <span className="gender-title">Sexo</span>
            <div className="category">
              <label for="dot-1">
              <span className="dot one"></span>
              <span className="gender">Masculino</span>
            </label>
            <label for="dot-2">
              <span className="dot two"></span>
              <span className="gender">Feminino</span>
            </label>
            </div>
          </div>
          <div className="input-box">

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
         
        </div>
      </div>
   )

}

export default Form