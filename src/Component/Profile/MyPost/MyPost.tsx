import React from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {stateType} from "../../../State/State";

type PropsType = {
    posts: stateType
}


const MyPost = (props: PropsType) => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
                <Post posts={props.posts}/>

            </div>
        </div>
    )
}

export default MyPost;