import { csrfFetch } from "./csrf";

const LOAD = "comments/LOAD";
const CREATE = "comments/CREATE";
const REMOVE = "comments/REMOVE";

const loadComments = (comments) => ({
  type: LOAD,
  comments,
});

const createComment = (comment, photoId) => ({
  type: CREATE,
  comment,
  photoId,
});

const removeComment = (commentId) => ({
  type: REMOVE,
  commentId,
});

export const getComments = () => async (dispatch) => {
  const response = await csrfFetch(`/api/comments`);

  if (response.ok) {
    const comments = await response.json();
    dispatch(loadComments(comments));
  } else {
    const errors = await response.json();
    console.log(errors.errors);
  }
};

export const addComment = (data) => async (dispatch) => {
  const { photoId } = data;

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

export const deleteComment = (commentId) => async (dispatch) => {

  const response = await csrfFetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const commentId = await response.json();
    dispatch(removeComment(commentId));
    return commentId;
  } else {
    const errors = await response.json();
    console.log(errors.errors);
  }
};

const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
      case LOAD: {
        const newState = { ...state };
        action.comments.forEach(comment => {
          newState[comment.id] = comment;
        })
        return newState
      }
      case CREATE: {
        const newState = {...state};
        newState[action.comment.id] = action.comment;
        return newState
      }
      case REMOVE: {
        const newState = { ...state };
        delete newState[action.commentId];
        return newState;
      }
      default:
          return state
  }
}

export default commentReducer;
