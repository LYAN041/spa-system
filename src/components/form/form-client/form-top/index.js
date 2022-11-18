import React from "react";
import { useState } from "react";

const initialStateTop = {
  name: '',
  nasc: '',
  email: '',
  phone: '',
  profession: '',
  attendance: '',
  tratament: '',
  observation: '',
  dateAtendiment: ''
};

const FormEdit = (props) => {

  const [fieldsTop, setFieldsTop] = useState(initialStateTop);

  const handleFieldsChangeTop = (e) => setFieldsTop({
    ...fieldsTop,
    [e.currentTarget.name]: e.currentTarget.value
  });
  
  const handleSubmitTop = e => {
    e.preventDefault()
    props.editClient(fieldsTop)
    props.toggleTop()
  };

  const list = props.observations;
    const listItems = list.map((item) =>
       <tr>
       <td>{item.date}</td> 
       <td>{item.observations}</td>
       </tr> 
    );

    const date = new Date(props.nasc);
    const formated = (new Intl.DateTimeFormat('pt-br')).format(date);



  return (
    <div className={props.drawerTop}>

      <div className={props.formTop}>
        <div className="container-top">
          <div className="title-top">Dados do cliente</div>
          <div className="content-top">
            <div className="formulario-top">
              <div className="user-details-top">
                <div className="input-box-top">
                  <span className="details-top">Nome:</span>
                  <span className="details-top">{props.name}</span>
                </div>
                <div className="input-box-top">
                  <span className="details-top">Data de nascimento:</span>
                  <span className="details-top">{formated}</span>
                </div>
                <div className="input-box-top">
                  <span className="details-top">Email:</span>
                  <span className="details-top">{props.email}</span>
                </div>
                <div className="input-box-top">
                  <span className="details-top">Profissão:</span>
                  <span className="details-top">{props.profession}</span>
                </div>
                <div className="input-box-top">
                  <span className="details-top">Telefone:</span>
                  <span className="details-top">{props.phone}</span>
                </div>
                <div className="input-box-top">
                  <span className="details-top">Atendido por:</span>
                  <span className="details-top">{props.attendance}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cont-nome">
            <span className="nome-aleatorio-title">Tratamento Proposto:</span>
            <span className="nome-aleatorio">{props.tratament}</span>
          </div>

          <div className="cont-table">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>Data do atendimento</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                  {listItems}               
              </tbody>
            </table>

          </div>
        </div>
      </div>

      <div className={props.formTop}>
        <div className="container-top">
          <div className="title-top">Editar cliente</div>
          <div className="content-top">
            <form onSubmit={handleSubmitTop} className="formulario-top" autoComplete="off">
              <div className="user-details-top">
                <div className="input-box-top">
                  <span className="details-top">Nome</span>
                  <input type="text" name="name" value={fieldsTop.name} onChange={handleFieldsChangeTop} placeholder="Ex: maria da silva" />
                </div>
                <div className="input-box-top">
                  <span className="details-top">Data de nascimento</span>
                  <input type="date" name="nasc" value={fieldsTop.nasc} onChange={handleFieldsChangeTop} placeholder="Enter your " />
                </div>
                <div className="input-box-top">
                  <span className="details-top">Email</span>
                  <input type="text" name="email" value={fieldsTop.email} onChange={handleFieldsChangeTop} placeholder="Ex: teste@gmail.com" />
                </div>
                <div className="input-box-top">
                  <span className="details-top">Profissão</span>
                  <input type="text" name="profession" value={fieldsTop.profession} onChange={handleFieldsChangeTop} placeholder="Ex: enfermeira" />
                </div>
                <div className="input-box-top">
                  <span className="details-top">Telefone</span>
                  <input type="number" name="phone" value={fieldsTop.phone} onChange={handleFieldsChangeTop} placeholder="Ex: 41 99999-9999" />
                </div>
                <div className="input-box-top">
                  <span className="details-top">Atendido por:</span>
                  <input type="text" name="attendance" value={fieldsTop.attendance} onChange={handleFieldsChangeTop} placeholder="Ex: nicole" />
                </div>
                <div className="input-box-top">
                  <span className="details-top">Tratamento Proposto:</span>
                  <textarea name="tratament" id="tratament-top" value={fieldsTop.tratament} onChange={handleFieldsChangeTop} />
                </div>
                <div className="input-box-top">
                  <span className="details-top"></span>
                </div>
                <div className="input-box-top">
                  <span className="details-top">Data do atendimento</span>
                  <input type="date" name="dateAtendiment" value={fieldsTop.dateAtendiment} onChange={handleFieldsChangeTop} placeholder="Enter your " />
                </div>
                <div className="input-box-top">
                  <span className="details-top">Observações:</span>
                  <textarea name="observations" value={fieldsTop.observations} onChange={handleFieldsChangeTop} id="observations-top" />
                </div>
              </div>
              <div className="btns-top">
                <div className="button-top">
                  <input type="submit" value="Confirmar" />
                </div>
                <div className="button-top-cancel">
                  <input type="button" value="Cancelar" onClick={props.toggleTop} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FormEdit;