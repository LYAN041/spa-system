const TableBody = (props) => {
    return(
        <tr>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.rg}</td>
        <td>{props.cpf}</td>
        <td>{props.pix}</td>
        <td>{props.acount}</td>
        <td>{props.agency}</td>
        <td>{props.bank}</td>
        <i className='bx bx-trash' id="trash" onClick={function remove() { props.removeItems(props.id) } }></i>
        </tr> 
    )
}

export default TableBody