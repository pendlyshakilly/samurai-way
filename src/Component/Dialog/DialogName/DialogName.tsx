import React from "react";
import s from "../Dialog.module.css";
import {NavLink} from "react-router-dom";
import {namesType, stateType} from "../../../State/State";

type NamesType = {
    names: stateType,
}


const DialogNames = (props: NamesType) => {
    return (
        <div>
          <div>
            {
                props.names.dialogs.names.map((n: namesType) => {
                    return (
                        <div>
                            <div className={s.dialog + ' ' + s.active}></div>
                            <NavLink to={"/dialogs/" + n.id}>{n.name}</NavLink>
                        </div>

                    )
                })
            }
          </div>

        </div>


    )
}

export default DialogNames

