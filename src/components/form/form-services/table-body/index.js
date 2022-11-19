const TableBody = (props) => {

    const date = new Date(props.date);
    date.setDate(date.getDate() + 1)
    const formated = (new Intl.DateTimeFormat('pt-br')).format(date);

    

    return(
        
        <tr>
        <td>{props.type}</td>
        <td>{props.name}</td>
        <td>{props.recipient}</td>
        <td>{formated}</td>
        <td>{props.service}</td>
        <td>{props.phone}</td>
        <td><i className='bx bx-trash' id="trash" onClick={function remove() { props.removeItems(props.id) } }></i></td>
        </tr> 
    )
}

export default TableBody