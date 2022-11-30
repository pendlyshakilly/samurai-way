import ProfileReducer from "./Profile-reducer";
import DialogReducer from "./Dialog-reducer";


export type postsType = {
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
    _renderTree: (State: stateType) => void
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
    _renderTree(State: stateType){},
    getState(){
        return this._State
    },
    subscriber(observer: (state: stateType) => void) {
        this._renderTree = observer
    },
    dispatch(action ){
        this._State.profilePage = ProfileReducer(this._State.profilePage, action);
        this._State.dialogs = DialogReducer(this._State.dialogs, action);

        this._renderTree(this._State)

    }
}
const addUser = () => ({type: 'addUser'})
const updateNewPostText = (text: string) => ({type: 'updateNewPostText' , newText: text })


export default Store;
