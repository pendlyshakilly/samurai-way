import React, {ChangeEvent, TextareaHTMLAttributes} from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import {stateType} from "../../../State/State";
import {addUser, updateNewPostText} from "../../../State/Profile-reducer";

type PropsType = {
    posts: stateType
    dispatch: (action: any) => void

}




    const MyPost = (props: PropsType) => {
    const addPost = () => {
        props.dispatch(addUser())
       props.dispatch(updateNewPostText(''))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(updateNewPostText(e.currentTarget.value))


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