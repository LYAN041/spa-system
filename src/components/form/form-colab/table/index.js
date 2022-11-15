import TableBody from "../table-body";

const Table = (props) => {

    const list = props.list;
    const listItems = list.map((item) =>
       <th>{item}</th> 
    );

    return(
        <table className="styled-table">
        <thead>
            <tr>{listItems}</tr>
        </thead>
        <tbody>
          {props.data.map((person) =>
            <TableBody
             id={person.id}
             name={person.name}
             phone={person.phone}
             rg={person.rg}
             cpf={person.cpf}
             pix={person.pix === '' ? '-' : person.pix}
             acount={person.acount === '' ? '-' : person.acount}
             bank={person.bank === '' ? '-' : person.bank}
             agency={person.agency === '' ? '-' : person.agency}
             removeItems={props.removeItems}
            />
          )}        
        </tbody>
    </table>
    )
}

export default Table;