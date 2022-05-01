import { csrfFetch } from "./csrf";

const LOAD = "photos/LOAD";
const CREATE = "photos/CREATE";

const load = (photos) => ({
  type: LOAD,
  photos,
});

export const getPhotos = () => async (dispatch) => {
  const response = await csrfFetch(`/api/photos`);
  console.log(response)

  if (response.ok) {
    const photos = await response.json();
    dispatch(load(photos));
  } else {
    const errors = await response.json();
    console.log(errors.errors);
  }
};

const initialState = {
  order: [],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const photos = {};
      action.photos.forEach((photo) => {
        //   photo.width = parseInt(photo.width);
        //   photo.height = parseInt(photo.height);
        photos[photo.id] = photo;
      });
      return {
        ...state,
        ...photos,
        order: [...action.photos],
      };
    }
    default:
        return state;
  }
};

export default photoReducer;
