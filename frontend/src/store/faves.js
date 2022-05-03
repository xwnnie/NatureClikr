import { csrfFetch } from "./csrf";

const LOAD = "faves/LOAD";
const CREATE = "faves/CREATE";
const REMOVE = "faves/REMOVE";

const load = (favePhotos) => ({
  type: LOAD,
  favePhotos,
});

const create = (photo) => ({
  type: CREATE,
  photo,
});

const remove = (photoId) => ({
  type: REMOVE,
  photoId,
});

export const getFaves = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/faves`);
  //   console.log(response)

  if (response.ok) {
    const favePhotos = await response.json();
    dispatch(load(favePhotos.photos));
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
      default:
        return state;
    }
}
export default faveReducer;