const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, message: "It's my new post!", likesCount: 42 },
    { id: 2, message: "Deadline 01.06.22", likesCount: 12 },
  ],
  newPostText: ""
}

let lr = (min = 1, max = 99) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const profileReducer = (state = initialState, action) => {                                                                   
  switch (action.type) {
    
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: lr()
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost ],
        newPostText: ""
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
      
    default:
      return state;
  }
};

export default profileReducer
