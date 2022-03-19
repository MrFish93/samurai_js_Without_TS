import {profileReducer} from './profile-reducer'
import {dialogsReducer} from './dialogs-reducer'

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey, little Kitty', likesCount: 1},
                {id: 2, message: 'Hello, big Dog', likesCount: 23},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vova'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Vlad'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
            ],
            newMessageBody: '',
        },
    },
    _callSubscriber () {

    },
    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}