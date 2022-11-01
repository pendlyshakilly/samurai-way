import React from "react";
import s from "./Profile.module.css"
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {stateType} from "../../State/State";

type PropsType = {
    posts: stateType
    addUser: (mess: string) => void
}

const Profile = (props: PropsType) => {
    return <div className={s.profile}>
       <ProfileInfo/>
        <MyPost posts={props.posts} addUser={props.addUser}/>

    </div>
}

export default Profile;