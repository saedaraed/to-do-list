import "./style.css";
import Button from "../Button";
import { InputBoxStyle, InputStyle } from "./style";

function InputBox(props) {
    return ( <
        InputBoxStyle >
        <
        InputStyle onChange = { props.handleChange }
        value = { props.value }
        type = "text"
        placeholder = { "Enter task" }
        max = { 150 }
        />{" "} <
        Button disabled = {!props.value }
        isWhite = { true }
        onClick = { props.handleAdd }
        id = { "add" }
        style = {
            {
                background: !props.value && "lightgray",
            }
        } >
        Add { " " } <
        /Button>{" "} <
        /InputBoxStyle>
    );
}

export default InputBox;