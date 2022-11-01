import React from "react";
import s from "../Dialog.module.css"
import {messageType} from "../../../State/State";
import {stateType} from "../../../State/State";

export type PropsType = {
    mess: stateType
}

const DialogMess = (props: PropsType) => {
    let newMess = React.createRef<HTMLTextAreaElement>()


    const adPost = () => {
      alert(newMess.current?.value)
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
                <textarea ref={newMess}/>
                <button onClick={adPost}>add mess</button>
            </div>

        </div>

    )
}

export default DialogMess