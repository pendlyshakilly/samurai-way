import React from "react";
import s from "../Dialog.module.css"
import {messageType, stateType} from "../../../State/State";

export type PropsType = {
    mess: stateType
    addMess: (message: string) => void
}

const DialogMess = (props: PropsType) => {
    let newMessElement = React.createRef<HTMLTextAreaElement>();


    const adPost = () => {
        if (newMessElement.current) {
            props.addMess(newMessElement.current.value)
        }
    }


    return (
        <div>
            {
                props.mess.dialogs.message.map((m: messageType) => {
                    return (
                        <div>
                            <div className={s.dialog + ' ' + s.active}></div>
                            <div>{m.mess}</div>
                        </div>

                    )
                })
            }
            <div className={s.addMess}>
                <textarea ref={newMessElement}/>
                <button onClick={adPost}>add mess</button>
            </div>

        </div>

    )
}

export default DialogMess