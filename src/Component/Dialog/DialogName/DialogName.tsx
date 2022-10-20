import React from "react";
import s from "../Dialog.module.css";
import {NavLink} from "react-router-dom";
import {NamesType} from "../Dialog";

export type PropsType = {
    name: Array<NamesType>
}

const DialogNames = (props: PropsType) => {
    return (
        <div>
            {
                props.name.map((n: NamesType) => {
                    return (
                        <div>
                            <div className={s.dialog + ' ' + s.active}></div>
                            <NavLink to={"/dialogs/" + n.id}>{n.name}</NavLink>
                        </div>

                    )
                })
            }

        </div>

    )
}

export default DialogNames

