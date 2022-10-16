import React from "react";
import s from "./MyPost.module.css"
import Post from "./Post/Post";



const MyPost = () => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={"its my first post"} like={15}/>
                <Post message={"yes it work"} like={14}/>
            </div>
        </div>
    )
}

export default MyPost;