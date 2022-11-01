import React from "react";
import s from "./Dialog.module.css"
import DialogNames from "./DialogName/DialogName";
import DialogMess from "./DialogMess/DialogMess";
import {stateType} from "../../State/State";

type PropsType = {
    names: stateType,
    message: stateType
    addMess: (message: string) => void
}

const Dialog = (props: PropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogNames names={props.names}/>
            </div>
            <div className={s.messages}>
               <DialogMess  mess={props.message} addMess={props.addMess}/>
            </div>
        </div>

    )
}

export default Dialog;