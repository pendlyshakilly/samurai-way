import React from "react";
import s from "./Post.module.css"

export type PropsType= {
    message: string,
    like: number
}

const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <img src='https://as2.ftcdn.net/v2/jpg/01/88/16/11/1000_F_188161181_ECXsk62DZLJR611UniB6oScNJsyZVEdZ.jpg'/>
            {props.message}

            <div>
                <span>{props.like}</span>
            </div>
        </div>

    )

}

export default Post;