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
    subscriber: (observer: (state: stateType) => void) => void
    getState: () => stateType
    dispatch: (action: any) => void
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
    subscriber(observer: (state: stateType) => void) {
        renderTree = observer
    },
    dispatch(action ){
        if(action.type === 'addUser'){
            const newUser: postsType = {
                id: 3,
                mess: this._State.profilePage.messageForNewPost,
                likeCount: 0,
            }
            this._State.profilePage.posts.push(newUser)
            renderTree(this._State)
        }else if(action.type === 'addMess'){
            const newMess: messageType = {
                mess: this._State.dialogs.messageForNewMess
            }
            this._State.dialogs.message.push(newMess)
            renderTree(this._State)
        }else if(action.type === 'updateNewPostText'){
            this._State.profilePage.messageForNewPost = action.newText
            renderTree(this._State)
        }else if(action.type === 'updateNewMessText'){
            this._State.dialogs.messageForNewMess = action.newMess
            renderTree(this._State)
        }

    }
}


export default Store;
