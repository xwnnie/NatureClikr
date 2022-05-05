import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = "comments/LOAD";
const CREATE_COMMENT = "comments/CREATE";

const loadComments = (comments) => ({
  type: LOAD_COMMENTS,
  comments,
});

const createComment = (comment, photoId) => ({
  type: CREATE_COMMENT,
  comment,
  photoId,
});


export const getComments = (photoId) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments`);
  //   console.log(response)

  if (response.ok) {
    const comments = await response.json();
    dispatch(loadComments(comments));
  } else {
    const errors = await response.json();
    console.log(errors.errors);
  }
};

export const addComment = (data) => async (dispatch) => {
  const { userId, photoId, content } = data;

  const response = await csrfFetch(`/api/photos/${photoId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const comment = await response.json();
    dispatch(createComment(comment, photoId));
    return comment;
  } else {
    const errors = await response.json();
    console.log(errors.errors);
  }
};

const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
      case LOAD_COMMENTS: {
        const newState = { ...state };
        // newState.current[action.photo.id] = action.photo;
        action.comments.forEach(comment => {
          newState[comment.id] = comment;
        })
        return newState
      }
      case CREATE_COMMENT: {
        const newState = {...state};
        newState[action.comment.id] = action.comment;
        return newState
      }
      default:
          return state
  }
}

export default commentReducer;
