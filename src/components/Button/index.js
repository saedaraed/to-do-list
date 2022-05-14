import "./style.css";
import { StyledButton } from "./style";

function Button({ isWhite, ...props }) {
    return ( <
        StyledButton {...props }
        className = { isWhite && "white" } > { " " } { props.children } { " " } <
        /StyledButton>
    );
}

export default Button;