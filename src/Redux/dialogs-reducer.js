const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessagesBody;
      return {
        ...state,
        newMessagesBody: "",
        messagesData: [...state.messagesData, { id: 4, message: body }],
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessagesBody: action.body,
      };
    default:
      return state;
  }
};

export default dialogsReducer;
