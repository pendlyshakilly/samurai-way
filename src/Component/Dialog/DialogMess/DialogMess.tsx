import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from "../Dialog.module.css"
import {messageType, stateType} from "../../../State/State";

export type PropsType = {
    mess: stateType
    dispatch: (action: any) => void

}

const DialogMess = (props: PropsType) => {



    const adPost = () => {
        props.dispatch({type: 'addMess'})
        props.dispatch({type: 'updateNewMessText', newMess: ''})
    }


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch({type: 'updateNewMessText', newMess: e.currentTarget.value})
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