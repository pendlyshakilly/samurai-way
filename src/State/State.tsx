import {renderTree} from "../render";

type postsType = {
    id: number,
    mess: string,
    likeCount: number
}
type profilePageType = {
    messageForNewPost: string
    posts: Array<postsType>
}
export type namesType = {
    name: string,
    id: number

}
export type messageType = {
    mess: string
}
type dialogsType = {
    messageForNewMess: string
    names: Array<namesType>
    message: Array<messageType>
}
export type stateType = {
    profilePage: profilePageType
    dialogs: dialogsType
}




let State: stateType = {
    profilePage: {
        messageForNewPost: '',
        posts: [
            {id: 1,  mess: 'its my first post', likeCount: 15},
            {id: 2, mess: 'yes it work', likeCount: 13},
        ]
    },
    dialogs: {
        messageForNewMess: '',
        names: [
            {name: 'Silvia', id: 1},
            {name: 'Lera', id: 2},
            {name: 'Arsen', id: 3},
            {name: 'Vadim', id: 4},
            {name: 'Yevhen', id: 5},
            {name: 'Vlad', id: 6},
        ],

        message: [
            {mess: 'Hello'},
            {mess: 'Hi how are you'},
            {mess: 'Im fine'}
        ]
    }
}



export const addUser = (mess: string) => {
    const newUser: postsType = {
        id: 3,
        mess: mess,
        likeCount: 0,
    }
    State.profilePage.posts.push(newUser)
    renderTree(State)
}

export const addMess = (message: string) => {
    const newMess: messageType = {
        mess: message
    }

    State.dialogs.message.push(newMess)
    renderTree(State)
}

export const updateNewPostText = (newText: string) => {
    State.profilePage.messageForNewPost = newText
   renderTree(State)
}

export const updateNewMessText = (newMess: string) => {
    State.dialogs.messageForNewMess = newMess
    renderTree(State)
}

export default State;