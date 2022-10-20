import React from "react";
import s from "./Post.module.css"
import {TaskType} from "../MyPost";

export type PropsType= {
    message: Array<TaskType>
}

const Post = (props: PropsType) => {
    return (
        <div className={s.item}>

            {
              props.message.map((m) => {
                    return (
                        <div>
                            <img src='https://as2.ftcdn.net/v2/jpg/01/88/16/11/1000_F_188161181_ECXsk62DZLJR611UniB6oScNJsyZVEdZ.jpg'/>
                            {m.mess} ,
                            <div>
                                <span>{m.likeCount}</span>
                            </div>
                        </div>

                    )
              })
            }

        </div>

    )

}

export default Post;