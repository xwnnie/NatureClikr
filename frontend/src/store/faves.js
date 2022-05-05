import { csrfFetch } from "./csrf";

const LOAD = "faves/LOAD";
const ADD = "faves/ADD";
const REMOVE = "faves/REMOVE";

const load = (favePhotos) => ({
  type: LOAD,
  favePhotos,
});

const add = (photo) => ({
  type: ADD,
  photo,
});

const remove = (photoId) => ({
  type: REMOVE,
  photoId,
});

export const getFaves = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/faves`);

  if (response.ok) {
    const favePhotos = await response.json();
    dispatch(load(favePhotos.photos));
  } else {
    const errors = await response.json();
    console.log(errors.errors);
  }
};

export const addFave = (userId, photoId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/photos/${photoId}/fave`, {
        method: "POST",
    });

    if (response.ok) {
        const resBody = await response.json();
        dispatch(add(resBody.photo));
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const removeFave = (userId, photoId) => async (dispatch) => {
  const response = await csrfFetch(
    `/api/users/${userId}/photos/${photoId}/fave`,
    {
      method: "DELETE",
    }
  );

  if (response.ok) {
    dispatch(remove(photoId));
  } else {
    const errors = await response.json();
    console.log(errors.errors);
  }
};

const initialState = {

};

const faveReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD: {
        const allFavePhotos = {};
        action.favePhotos.forEach((photo) => {
          allFavePhotos[photo.id] = photo;
        });
        return {
          ...state,
          ...allFavePhotos,
        };
      }
      case ADD: {
          return {
            ...state, 
            [action.photo.id]: action.photo
          }
      }
      case REMOVE: {
          const newState = {...state}
          delete newState[action.photoId]
          return newState
      }
      default:
        return state;
    }
}
export default faveReducer;