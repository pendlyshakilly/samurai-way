import React, {ChangeEvent, TextareaHTMLAttributes} from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {stateType} from "../../../State/State";

type PropsType = {
    posts: stateType
    addUser: (mess: string) => void
    updateNewPostText: (newText: string) => void
}


const MyPost = (props: PropsType) => {
    const addPost = () => {
        props.addUser(props.posts.profilePage.messageForNewPost)
        props.updateNewPostText('')
       }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.updateNewPostText(e.currentTarget.value)


    }


    return (
        <div>
            My posts
            <div>
                <textarea onChange={onChangeHandler} value={props.posts.profilePage.messageForNewPost}/>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={s.posts}>
                <Post posts={props.posts}/>

            </div>
        </div>
    )
}

export default MyPost;