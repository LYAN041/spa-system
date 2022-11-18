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
             name={item.name}
             description={item.description}
             amount={item.amount}
             validity={item.validity}
             category={item.category}
             lastpurchase={item.lastpurchase}
             nextpurchase={item.nextpurchase}
             productToEdit={props.productToEdit}
             removeItems={props.removeItems}
            />
          )}        
        </tbody>
    </table>
    )
}

export default Table;