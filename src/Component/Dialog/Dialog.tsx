import React from "react";
import s from "./Dialog.module.css"
import DialogNames from "./DialogName/DialogName";
import DialogMess from "./DialogMess/DialogMess";


export type NamesType = {
    name: string,
    id: number
}


const names: Array<NamesType> = [
    {name: 'Silvia', id: 1},
    {name: 'Lera', id: 2},
    {name: 'Arsen', id: 3},
    {name: 'Vadim', id: 4},
    {name: 'Yevhen', id: 5},
    {name: 'Vlad', id: 6},
]
export type MessageType = {
    mess: string,

}


const message: Array<MessageType> = [
    {mess: 'Hello'},
    {mess: 'Hi how are you'},
    {mess: 'Im fine'}
]


const Dialog = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogNames name={names}/>
            </div>
            <div className={s.messages}>
               <DialogMess  mess={message}/>
            </div>
        </div>

    )
}

export default Dialog;