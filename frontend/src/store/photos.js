import { csrfFetch } from "./csrf";
//get all photos
const LOAD = "photos/LOAD";

// //get one photo
// const LOAD_ONE_PHOTO = "photo/LOAD";

// const CREATE = "photos/CREATE";
const UPDATE = "photos/UPDATE";

const load = (photos) => ({
  type: LOAD,
  photos,
});

// const load_one_photo = (photo) => ({
//   type: LOAD_ONE_PHOTO,
//   photo,
// });

const edit = (photo) => ({
  type: UPDATE,
  photo,
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

// export const getOnePhoto = (photoId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/photos/${photoId}`);
//   //   console.log(response)

//   if (response.ok) {
//     const photo = await response.json();
//     dispatch(load_one_photo(photo));
//   } else {
//     const errors = await response.json();
//     console.log(errors.errors);
//   }
// };


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
  current: null,
  order: [],
};

// const sortList = (list) => {
//   return list
//     .sort((pokemonA, pokemonB) => {
//       return pokemonA.number - pokemonB.number;
//     })
//     .map((pokemon) => pokemon.id);
// };

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
        order: [...action.photos],
      };
    }

    // case LOAD_ONE_PHOTO: {
    //   return {
    //     ...state,
    //     current: action.photo
    //   }
    // }
    case UPDATE: {

      return {

      };
    }
    default:
        return state;
  }
};

export default photoReducer;
