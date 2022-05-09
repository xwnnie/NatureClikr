import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getFaves, addFave, removeFave } from "../../store/faves";
import EditPhotoModal from "../EditPhotoModal/index.js";
import DeleteConfirmModal from "../DeleteConfirmModal/index.js";
import Comments from "../Comments";

const MyFaveDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  let faves = useSelector((state) => state.faves);
  const favePhotos = Object.values(faves);

  favePhotos.sort((a, b) => {
    const keyA = new Date(a?.createdAt);
    const keyB = new Date(b?.createdAt);
    return keyA > keyB ? -1 : 1;
  });

  useEffect(() => {
    dispatch(getFaves(sessionUser.id));
  }, [dispatch]);

  const { photoId } = useParams();

  const photo = favePhotos.find((photo) => photo.id === +photoId);

  const index = favePhotos.indexOf(photo);
  let date = new Date(photo?.createdAt);

  date = date.toDateString();

  let editDeleteLinks;
  if (sessionUser.id === photo?.ownerId) {
    editDeleteLinks = (
      <div>
        <EditPhotoModal />
        <DeleteConfirmModal />
      </div>
    );
  }

    let isFave = faves[photoId] ? true : false;
    const [fave, setFave] = useState(isFave);

    const handleCheckboxChange = async (checked) => {
    if (checked) {
        setFave(true);
        dispatch(addFave(sessionUser.id, photoId));
    } else {
        setFave(false);
        dispatch(removeFave(sessionUser.id, photoId));
        history.push("/my/faves");
    }
    };


  return (
    <div className="main-container ">
      <div className="photo-detail-card">
        <Link to="/my/faves" className="back-link">
          <i className="fa-solid fa-arrow-left" style={{ fontSize: "12px" }} />{" "}
          Back to My Faves
        </Link>
        <input
          className="star"
          type="checkbox"
          name="addFave"
          checked={isFave}
          onChange={(e) => {
            handleCheckboxChange(e.target.checked);
          }}
        />
        {sessionUser && editDeleteLinks}
        <div className="photo-container">
          <Link
            to={index > 0 ? `/my/faves/${favePhotos[index - 1].id}` : null}
            className={index > 0 ? "left-right-arrows" : "hidden"}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <img src={photo?.url} className="photo-detail-img" />
          <Link
            to={
              index < favePhotos.length - 1
                ? `/my/faves/${favePhotos[index + 1].id}`
                : null
            }
            className={
              index < favePhotos.length - 1 ? "left-right-arrows" : "hidden"
            }
          >
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </div>
        <div className="photo-caption">
          <h3 className="">{photo?.name}</h3>
          <p className="">Author: {photo?.User.username}</p>
          <p className="">{date}</p>
          <p className="">{photo?.location}</p>
          <p className="">{photo?.description}</p>
        </div>
      </div>
      <Comments photo={photo}/>
    </div>
  );
};

export default MyFaveDetail;
