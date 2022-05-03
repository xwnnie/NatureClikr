import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPhotos } from "../../store/photos";
import UserCard from "../UserCard";
import MyPhotoEditModal from "../MyPhotoEditModal";
import MyDeleteModal from "../MyDeleteModal";

import "./MyPhotos.css"


const MyPhotos = () => {
  const dispatch = useDispatch();

    let photos = useSelector((state) => state.photos);
    photos = Object.values(photos);
    // console.log(photos)

    photos.sort((a, b) => {
      const keyA = new Date(a.createdAt);
      const keyB = new Date(b.createdAt);
      // console.log(keyA)
      // console.log(keyB)
      return keyA > keyB ? -1 : 1;
    });
    // photos = photos.sort((a, b) => b.id - a.id);
    console.log(photos);

    // const order = useSelector((state) => state.photos.order);
    // let photos = [];
    // Object.keys(order)
    //   .sort()
    //   .forEach(function (key, i) {
    //     photos.push(order[key]);
    //   });

//   const photos = useSelector((state) => state.photos.order);
  const sessionUser = useSelector((state) => state.session.user);

  //old
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  //new
//   useEffect(() => {
//     dispatch(getPhotos());
//   }, [dispatch, photos]);



  const myPhotos = photos.filter((photo) => photo.ownerId === sessionUser.id);
//   console.log(myPhotos);
  return (
    <div className="main-container">
      <UserCard />
      <h2>my photos</h2>
      {/* <Link to="/my">BACK</Link> */}
      <div className="my-photos-container">
        {myPhotos.map((photo) => (
          <div className="my-photo-container" key={photo.id}>
            {/* {console.log(photo)} */}
            {/* <Link to={`/photos/${photo.id}`}> */}
            <img
              key={photo?.id}
              src={photo?.url}
              alt={photo?.name}
              className="my-img"
            />
            <div className="edit-delete-modal-btn">
              <MyPhotoEditModal photoId={photo?.id} />
              <MyDeleteModal photoId={photo?.id} />
              
                <Link to={`/my/photos/${photo.id}`}><i className="fa-solid fa-comment" id="my-comment-link" /></Link>
            </div>

            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPhotos;
