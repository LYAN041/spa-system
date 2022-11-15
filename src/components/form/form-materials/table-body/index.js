const TableBody = (props) => {
    const datelast = new Date(props.lastpurchase);
    const formatedlast = (new Intl.DateTimeFormat('pt-br')).format(datelast);

    const datenext = new Date(props.nextpurchase);
    const formatednext = (new Intl.DateTimeFormat('pt-br')).format(datenext);

    const datevalidity = new Date(props.validity);
    const formatedvalidity = (new Intl.DateTimeFormat('pt-br')).format(datevalidity);

    return(
        <tr>
        <td>{props.category}</td>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>{props.amount}</td>
        <td>{formatedvalidity}</td>
        <td>{formatedlast}</td>
        <td>{formatednext}</td>
        <i className='bx bx-edit' id="edit" onClick={function edit() { props.productToEdit(props.id) } }></i>
        <i className='bx bx-trash' id="trash" onClick={function remove() { props.removeItems(props.id) } }></i>
        </tr> 
    )
}

export default TableBody