import { csrfFetch } from "./csrf";

const LOAD = "photos/LOAD";
const CREATE = "photos/CREATE";
const UPDATE = "photos/UPDATE";
const REMOVE = "photos/REMOVE";

const load = (photos) => ({
  type: LOAD,
  photos,
});

const create = (photo) => ({
  type: CREATE,
  photo,
});

const edit = (photo) => ({
  type: UPDATE,
  photo,
});

const remove = (photoId) => ({
  type: REMOVE,
  photoId,
});


export const getPhotos = () => async (dispatch) => {
  const response = await csrfFetch(`/api/photos`);

  if (response.ok) {
    const photos = await response.json();
    dispatch(load(photos));
  } else {
    const errors = await response.json();
    console.log(errors.errors);
  }
};

export const uploadPhoto = (data) => async (dispatch) => {
  const { name, location, ownerId, description, image } = data;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("location", location);
  formData.append("ownerId", ownerId);
  formData.append("description", description);

  if (image) formData.append("image", image);

  const response = await csrfFetch(`/api/photos`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  if (response.ok) {
    const photo = await response.json();
    dispatch(create(photo));
    return photo;
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

export const deletePhoto = (photoId) => async (dispatch) => {
  const response = await csrfFetch(`/api/photos/${photoId}`, {
    method: "DELETE"
  });

  if (response.ok) {
    const deletedPhotoId = await response.json();
    dispatch(remove(photoId));
    return deletedPhotoId;
  } else {
    const errors = await response.json();
    console.log(errors.errors);
  }
};



const initialState = {
};


const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allPhotos = {};
      action.photos.forEach((photo) => {
          allPhotos[photo.id] = photo;
      });
      return {
        ...state,
        ...allPhotos,
      };
    }
    case CREATE: {
      const newPhoto = {};
      newPhoto[action.photo.id] = action.photo;
      return {
        ...state,
        newPhoto,
      };
    }

    case UPDATE: {
      const newState = {
        ...state,
        [action.photo.id]: action.photo,
      };
      return newState;
    }
    case REMOVE: {
      const newState = {...state};
      delete newState[action.photoId];

      return newState
    }

    default:
        return state;
  }
};

export default photoReducer;
