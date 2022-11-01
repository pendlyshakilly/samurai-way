import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from "../Dialog.module.css"
import {messageType, stateType} from "../../../State/State";

export type PropsType = {
    mess: stateType
    addMess: (message: string) => void
    updateNewMessText: (newMess: string) => void

}

const DialogMess = (props: PropsType) => {



    const adPost = () => {
        props.addMess(props.mess.dialogs.messageForNewMess)
        props.updateNewMessText('')
    }


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessText(e.currentTarget.value)
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
                <textarea value={props.mess.dialogs.messageForNewMess} onChange={onChangeHandler}/>
                <button onClick={adPost}>add mess</button>
            </div>

        </div>

    )
}

export default DialogMess