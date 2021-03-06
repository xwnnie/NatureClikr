import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getFaves } from "../../store/faves";
import UserCard from "../UserCard";
import FaveStar from "../FaveStar";

const MyFaves = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFaves(sessionUser.id));
  }, [dispatch]);

  let faves = useSelector((state) => state.faves);
  faves = Object.values(faves);

  faves.sort((a, b) => {
    if (a.Faves && b.Faves) {
      const keyA = new Date(a?.Faves[0]?.createdAt);
      const keyB = new Date(b?.Faves[0]?.createdAt);
      return keyA > keyB ? -1 : 1;
    }
  });

  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="main-container">
      <UserCard />
      <h2 className="my-photos-h2">my faves</h2>
      <div className="my-photos-container">
        {faves.map((photo) => (
          <div className="my-photo-container" key={photo?.id}>
            <img
              key={photo?.id}
              src={photo?.url}
              alt={photo?.name}
              className="my-img"
            />
            <div className="edit-delete-modal-btn">
              <Link to={`/my/faves/${photo.id}`}>
                <i className="fa-solid fa-comment" id="faves-comment-link" />
              </Link>
              <FaveStar photoId={photo?.id}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFaves;
