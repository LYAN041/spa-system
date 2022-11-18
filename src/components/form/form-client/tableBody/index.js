const TableBody = (props) => {

    const date = new Date(props.nasc);
    const formated = (new Intl.DateTimeFormat('pt-br')).format(date);

    return(
        
        <tr>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.profession}</td>
        <td>{formated}</td>
        <td>{props.gender}</td>
        <td>{props.email}</td>
        <td>{props.attendance}</td>
        <td><i className='bx bx-edit' id="edit" onClick={function edit() { props.itemToEdit(props.id) } }></i></td>
        <td><i className='bx bx-trash' id="trash" onClick={function remove() { props.removeItems(props.id) } }></i></td>
        </tr>
        
     
    )
}

export default TableBody