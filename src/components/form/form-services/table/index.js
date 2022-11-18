import TableBody from "../table-body";

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
          {props.data.map((item) =>
            <TableBody
             key={item.id}
             id={item.id}
             service={item.service}
             type={item.type}
             name={item.name}
             recipient={item.recipient}
             date={item.date}
             phone={item.phone}
             removeItems={props.removeItems}
            />
          )}        
        </tbody>
    </table>
    )
}

export default Table;