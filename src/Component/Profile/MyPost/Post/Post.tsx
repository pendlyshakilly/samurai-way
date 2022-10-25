import React from "react";
import s from "./Post.module.css"
import {stateType} from "../../../../State/State";

type PropsType = {
    posts: stateType
}

const Post = (props: PropsType) => {
    return (
        <div className={s.item}>

            {
              props.posts.profilePage.posts.map((m) => {
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