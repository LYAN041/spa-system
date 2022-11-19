const TableBody = (props) => {

    const datelast = new Date(props.lastpurchase);
    datelast.setDate(datelast.getDate() + 1)
    const formatedlast = (new Intl.DateTimeFormat('pt-br')).format(datelast);

    const datenext = new Date(props.nextpurchase);
    datenext.setDate(datenext.getDate() + 1)
    const formatednext = (new Intl.DateTimeFormat('pt-br')).format(datenext);

    const datevalidity = new Date(props.validity);
    datevalidity.setDate(datevalidity.getDate() + 1)
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
        <td><i className='bx bx-edit' id="edit" onClick={function edit() { props.productToEdit(props.id) } }></i></td>
        <td><i className='bx bx-trash' id="trash" onClick={function remove() { props.removeItems(props.id) } }></i></td>
        </tr> 
    )
}

export default TableBody