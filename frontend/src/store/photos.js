import { csrfFetch } from "./csrf";

const LOAD = "photos/LOAD";
const CREATE = "photos/CREATE";
const UPDATE = "photos/UPDATE";

const load = (photos) => ({
  type: LOAD,
  photos,
});

const edit = (photo) => ({
  type: UPDATE,
  photo,
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


export const editPhoto = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/photos/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const photo = await response.json();
    dispatch(edit(photo));
    return photo;
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
