import c from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}