import "./style.css";
import Button from "../Button";

function ListIem(props) {
    return ( <
        div className = { "flex item" } >
        <
        p className = { "title" } > { props.title } < /p>{" "} <
        Button onClick = {
            () => props.handleDelete(props.id)
        }
        id = { props.id } >
        Delete { " " } <
        /Button>{" "} < /
        div >
    );
}

export default ListIem;