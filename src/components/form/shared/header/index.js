const Header = (props) => {
    return(
        <div className="content-form">
            <h2 className="title-form">{props.title}</h2>
            <button className="button-43" onClick={props.event}>{props.btnTitle}</button>
        </div>
    )
}

export default Header;