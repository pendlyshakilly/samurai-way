import React, {TextareaHTMLAttributes} from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {stateType} from "../../../State/State";

type PropsType = {
    posts: stateType
}


const MyPost = (props: PropsType) => {
   let newPostElement  = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
       alert(newPostElement.current?.value)
   }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement}/>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={s.posts}>
                <Post posts={props.posts}/>

            </div>
        </div>
    )
}

export default MyPost;