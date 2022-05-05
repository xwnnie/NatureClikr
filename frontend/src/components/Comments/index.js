import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPhotos } from "../../store/photos.js";
import { addComment, getComments } from "../../store/comments.js";
import { getFaves, addFave, removeFave } from "../../store/faves.js";
import EditPhotoModal from "../EditPhotoModal/index.js";
import DeleteConfirmModal from "../DeleteConfirmModal/index.js";

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
    comments = comments.filter(comment => comment.photoId === +photoId)
    console.log(comments);

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
    <div>
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Comment"
          required
        />
        <button type="submit" id="upload-confirm-btn">
          Add
        </button>
      </form>
      <div>
        {comments.map((comment) => (
          <div className="comment-container" key={comment?.id}>
            <p>{comment?.content}</p>
            <p>{comment?.userId}</p>
            <p>{comment?.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
