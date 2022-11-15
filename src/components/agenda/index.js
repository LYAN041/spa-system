import React from "react";
import Calendario from "./calendar";
import FormAgenda from "./form";
import moment from 'moment'
import { useState } from "react";


const Agenda = () => {

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

  const dataAgenda = localStorage.getItem("events");
  const [events, setEvents] = useState(dataAgenda ? JSON.parse(dataAgenda) : [])

  const addAgenda = (fields) => {
    let evento = {
        id: fields.id,
        title: fields.title,
        start: moment(fields.dateStart).toDate(),
        end: moment(fields.dateEnd).toDate() 
    }
    addEvento(evento)
  }

  const addEvento = (newEvent) => {
    const newTransaction = [...events, newEvent];
    setEvents(newTransaction);
    localStorage.setItem("events", JSON.stringify(newTransaction))
  };

  const removeEvent = (ID) => {
    const eventsFiltered = events.filter((transaction) => transaction.id !== ID);
      setEvents(eventsFiltered);
      localStorage.setItem("events", JSON.stringify(eventsFiltered));
  };

    return(
        <React.Fragment>
            <div className="content-agenda">
                <h2 className="title-form">Agendamentos</h2>
                <button className="button-43" onClick={toggleDrawer}>+ Adicionar</button>
            </div>
            <FormAgenda 
            addAgenda={addAgenda}
            toggleDrawer={toggleDrawer}
            openDrawer={openDrawer}
            openForm={openForm}
            />
            <Calendario
             events={events}
             removeEvent={removeEvent}
             />
        </React.Fragment>

    )
}

export default Agenda;