import c from "../Dialogs.module.css";

export const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}