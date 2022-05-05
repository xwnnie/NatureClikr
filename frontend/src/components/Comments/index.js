import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPhotos } from "../../store/photos.js";
import { addComment, getComments } from "../../store/comments.js";

import DeleteCommentModal from "../DeleteCommentModal/index.js";

import "./Comments.css"

const Comments = () => {
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);
    
    const { photoId } = useParams();
    useEffect(() => {
        dispatch(getComments(photoId));
    }, [dispatch]);

    let photos = useSelector((state) => state.photos);
    photos = Object.values(photos);

    const sessionUser = useSelector((state) => state.session.user);
    const photo = photos.find((photo) => photo.id === +photoId);

    let comments = useSelector((state) => state.comments);
    comments = Object.values(comments);
    comments = comments.filter(comment => comment.photoId === +photoId);
    comments.forEach(comment => {
        const date = new Date(comment.createdAt);
        comment.date = date.toDateString();
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newComment = await dispatch(
            addComment({
                photoId,
                userId: sessionUser.id,
                content
            })
        );
        setContent("");
    };


  return (
    <div className="comments-container">
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Leave a comment..."
          required
        />
        <button type="submit" id="add-comment-btn">
          Add
        </button>
      </form>
      <div>
        {comments.map((comment) => (
          <div className="comment-container" key={comment?.id}>
            <div>
              <i className="fa-solid fa-seedling" id="comment-decor" />
            </div>
            <p>{comment?.content}</p>
            <span>{comment?.User?.displayName}, </span>
            <span>{comment?.date}</span>
            {sessionUser.id === comment?.userId ? (
              <DeleteCommentModal commentId={comment?.id} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
