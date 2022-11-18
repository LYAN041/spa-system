import TableBody from "../tableBody";

const Table = (props) => {

    const list = props.list;
    const listItems = list.map((item, index) =>
       <th key={index}>{item}</th> 
    );

    return(
        <table className="styled-table">
        <thead>
            <tr>{listItems}</tr>
        </thead>
        <tbody>
          {props.data.map((person) =>

            <TableBody
             key={person.id}
             id={person.id}
             name={person.name === '' ? '-' : person.name}
             phone={person.phone === '' ? '-' : person.phone}
             nasc={person.nasc === '' ? '-' : person.nasc}
             gender={person.gender === '' ? '-' : person.gender}
             email={person.email === '' ? '-' : person.email}
             profession={person.profession === '' ? '-' : person.profession}
             attendance={person.attendance === '' ? '-' : person.attendance}
             itemToEdit={props.itemToEdit}
             removeItems={props.removeItems}
             toggleTop={props.toggleTop}
            />
          )}        
        </tbody>
    </table>
    )
}

export default Table;