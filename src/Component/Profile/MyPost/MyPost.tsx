import React from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";

export type TaskType = {
     mess: string,
     likeCount: number
}



const message: Array<TaskType> = [
    {mess: 'its my first post', likeCount: 15},
    {mess: 'yes it work', likeCount: 13},
]



const MyPost = () => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
                <Post message={message}/>

            </div>
        </div>
    )
}

export default MyPost;