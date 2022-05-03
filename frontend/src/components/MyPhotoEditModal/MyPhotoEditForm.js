import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { editPhoto } from "../../store/photos";
// import "./Upload.css";

const MyPhotoEditForm = ({photoId}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

//   const { photoId } = useParams();
    // console.log(photoId)

  const photos = useSelector((state) => state.photos.order);
  const photo = photos.find((photo) => photo.id === +photoId);

  const [selectedPhoto, setSelectedPhoto] = useState(photo);
  const [photoURL, setPhotoURL] = useState(photo.url);
  const [name, setName] = useState(photo.name);
  const [location, setLocation] = useState(photo.location);
  const [description, setDescription] = useState(photo.description);

  useEffect(() => {
    if (!selectedPhoto) return;
    // setPhotoURL(URL.createObjectURL(selectedPhoto));
  }, [selectedPhoto]);

  const onPhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setSelectedPhoto(img);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: photoId,
      url: photoURL,
      name,
      location,
      description,
      ownerId: sessionUser.id,
    };

    let newPhoto = await dispatch(editPhoto(payload));
    console.log(newPhoto);
    // if (newPhoto) {
      history.push(`/photos/${photoId}`);
      // URL.revokeObjectURL(photoURL);
      // hideForm();
    // }
  };

  return (
    <div className="upload-form">
      <h3>Update photo</h3>
      <form onSubmit={handleSubmit}>
        <img src={photoURL} id="select-photo-img" />
        <div>
          <label For="photo" />
          Select Photo*
          <input type="file" name="photo" onChange={onPhotoChange} />
        </div>
        <div>
          <label For="name" />
          Name*
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label For="location" />
          Location:
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label For="description" />
          Description:
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* <button type="button" onClick={handleCancelClick}>
          Cancel
        </button> */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default MyPhotoEditForm;