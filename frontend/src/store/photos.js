import { csrfFetch } from "./csrf";
//get all photos
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
//   console.log(response)

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
  // current: null,
  // order: {},
};


const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allPhotos = {};
      // const order = {};
      action.photos.forEach((photo) => {
          allPhotos[photo.id] = photo;
          // order[index] = photo;
      });
      return {
        ...state,
        ...allPhotos,
        // order: order,
      };
    }
    case CREATE: {
      const newPhoto = {};
      newPhoto[action.photo.id] = action.photo;
      return {
        ...state,
        newPhoto,
        // order: [...state.order, newPhoto],
      };
    }

    // case LOAD_ONE_PHOTO: {
    //   return {
    //     ...state,
    //     current: action.photo
    //   }
    // }
    case UPDATE: {
      // const index = state.order.findIndex(
      //   (photo) => photo.id === action.photo.id
      // );
      const newState = {
        ...state,
        [action.photo.id]: action.photo,
      };
      // newState.order[index] = action.photo;
      return newState;
    }
    case REMOVE: {
      const newState = {...state};
      // const index = state.order.findIndex(
      //   (photo) => photo.id === action.photoId
      // );
      delete newState[action.photoId];
      // delete newState.order[action.photoId];

      // for (const [key, value] of Object.entries(newState.order)) {
      //   if (value.id === action.photoId) {
      //     delete newState.order[key];
      //   }
      // }


      // newState.order.splice(index, 1);

      return newState
    }
    default:
        return state;
  }
};

export default photoReducer;
