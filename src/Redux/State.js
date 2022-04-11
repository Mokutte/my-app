import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "It's my new post!", likesCount: 42 },
        { id: 2, message: "Deadline 01.06.22", likesCount: 12 },
      ],
      newPostText: "",
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Goha" },
        { id: 3, name: "Beko" },
      ],

      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Bay" },
        { id: 3, message: "Go sleep?" },
      ],

      newMessagesBody: "",
    },
  },

  getState() {
    return this._state;
  },

  rerenderEntireTree() {
    console.log("Отрисовался");
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this.rerenderEntireTree(this._state);
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default store;
window.store = store;
