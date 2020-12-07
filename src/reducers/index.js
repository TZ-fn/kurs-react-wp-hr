import { ADD_ITEM_SUCCESS, AUTH_SUCCESS, FETCH_SUCCESS, REMOVE_ITEM_SUCCESS } from 'actions/index';

const initialState = {
  // adding the user ID manually to the store, to ease up development, and testing
  // userID: '5fb52c17152fc70d78552555',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };

    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType]].filter(
          (item) => item._id !== action.payload.id,
        ),
      };

    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };

    default:
      return state;
  }
};

export default rootReducer;
