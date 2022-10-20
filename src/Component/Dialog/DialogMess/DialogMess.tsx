import React from "react";
import s from "../Dialog.module.css"
import {MessageType} from "../Dialog";

export type PropsType = {
    mess: Array<MessageType>
}

const DialogMess = (props: PropsType) => {
    return (
        <div>
            {
                props.mess.map((m: MessageType) => {
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