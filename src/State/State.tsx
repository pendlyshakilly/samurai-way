let renderTree = (State: stateType) => {

}

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
export type StoreType = {
    _State: stateType,
    addUser: (mess: string) => void,
    addMess: (message: string) => void,
    updateNewPostText: (newText: string) => void,
    updateNewMessText: (newMess: string) => void,
    subscriber: (observer: (state: stateType) => void) => void
    getState: () => stateType
 }

let Store: StoreType= {
    _State: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, mess: 'its my first post', likeCount: 15},
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
    },
    getState(){
        return this._State
    },
    addUser() {
        const newUser: postsType = {
            id: 3,
            mess: this._State.profilePage.messageForNewPost,
            likeCount: 0,
        }
        this._State.profilePage.posts.push(newUser)
        renderTree(this._State)
    },
    addMess(message: string) {
        const newMess: messageType = {
            mess: message
        }

        this._State.dialogs.message.push(newMess)
        renderTree(this._State)
    },
    updateNewPostText(newText: string) {
        this._State.profilePage.messageForNewPost = newText
        renderTree(this._State)
    },
    updateNewMessText(newMess: string) {
        this._State.dialogs.messageForNewMess = newMess
        renderTree(this._State)


    },
    subscriber(observer: (state: stateType) => void) {
        renderTree = observer
    }
}


export default Store;
