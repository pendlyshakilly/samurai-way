import React from "react";
import s from "../Dialog.module.css"
import {messageType} from "../../../State/State";
import {stateType} from "../../../State/State";

export type PropsType = {
    mess: stateType
}

const DialogMess = (props: PropsType) => {
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

        </div>

    )
}

export default DialogMess