import React from "react";
import { useState } from "react";


const initialStateAgenda = {
    id: '',
    title: '',
    dateStart: '',
    dateEnd: ''
  };


const FormAgenda = (props) => {
    
  const [fieldsAgenda, setFieldsAgenda] = useState(initialStateAgenda);

  const generateId = () => Math.round(Math.random() * 1000);

  const handleFieldsChangeAgenda = (e) => setFieldsAgenda({
    ...fieldsAgenda,
    id: generateId(),
    [e.currentTarget.name]: e.currentTarget.value,
  });

  const handleSubmitAgenda = e => {
    e.preventDefault()
    props.addAgenda(fieldsAgenda)
    setFieldsAgenda(initialStateAgenda)
    props.toggleDrawer()
  };

    return (
        <div className={props.openDrawer}>
            <div className="title-side">Realizar Agendamento</div>
            <div className={props.openForm}>
                <form autoComplete="off" onSubmit={handleSubmitAgenda}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Adicionar evento:</span>
                            <textarea name="title" id="title-agenda" value={fieldsAgenda.title} onChange={handleFieldsChangeAgenda}></textarea>
                        </div>
                        <div className="input-box">
                            
                        </div>
                        <div className="input-box">
                            <span className="details">Início:</span>
                            <input type="datetime-local" name="dateStart" value={fieldsAgenda.dateStart} onChange={handleFieldsChangeAgenda} />
                        </div>
                        <div className="input-box">
                            <span className="details">Término:</span>
                            <input type="datetime-local" name="dateEnd" value={fieldsAgenda.dateEnd} onChange={handleFieldsChangeAgenda}/>
                        </div>
                    </div>

                    <div className="btns-agenda">
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

export default FormAgenda