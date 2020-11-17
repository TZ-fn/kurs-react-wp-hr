import axios from 'axios';

export const ADD_ITEM = 'ADD_ITEM';
// export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
// export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
// export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';
export const REMOVE_ITEM = 'REMOVE_ITEM';
// export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
// export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
// export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

// export const FETCH_REQUEST = 'FETCH_REQUEST';
// export const FETCH_SUCCESS = 'FETCH_SUCCESS';
// export const FETCH_FAILURE = 'FETCH_FAILURE';

export const removeItem = (itemType, id) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (itemType, itemContent) => {
  const getId = () => `${Math.random().toString(36).substr(2, 9)}`;
  return {
    type: ADD_ITEM,
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  return axios
    .post('http://localhost:9000/api/user/login', {
      username,
      password,
    })
    .then((payload) => {
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: AUTH_FAILURE });
    });
};
