import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {

    const onSendMessage = () => {props.onSendMessage()};
    const onChangeTextMessage = (e) => {props.onChangeTextMessage(e.target.value)};

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={c.messages}>
                <div>{props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)}</div>
                <div>
                    <div><textarea value={props.newMessageBody} onChange={onChangeTextMessage}/></div>
                    <div>
                        <button onClick={onSendMessage}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

