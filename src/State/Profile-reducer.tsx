import React from 'react';
import {messageType, postsType} from "./State";

export const addUser = () => ({type: 'addUser'})
export const updateNewPostText = (text: string) => ({type: 'updateNewPostText', newText: text})

const ProfileReducer = (state: any, action: any) => {
       if(action.type === 'addUser'){
              const newUser= {
                     id: 3,
                     mess: state.messageForNewPost,
                     likeCount: 0,
              }
              state.posts.push(newUser)
       }else if(action.type === 'updateNewPostText'){
              state.messageForNewPost = action.newText
       }
       return state
}


export default ProfileReducer;
