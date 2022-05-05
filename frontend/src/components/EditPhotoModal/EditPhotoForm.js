import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { getPhotos, editPhoto } from "../../store/photos";

import "./EditPhotoForm.css";

const EditPhotoForm = ({ showModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

    const { photoId } = useParams();

    // const photos = useSelector((state) => state.photos.order);
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

    // dispatch(editPhoto(payload));

    let newPhoto = await dispatch(editPhoto(payload));
    
    // console.log(newPhoto);
    if (newPhoto) {
      history.push(`/photos/${newPhoto.id}`);
      // URL.revokeObjectURL(photoURL);
      // hideForm();
      showModal(false);
    }
  };

//   const handleCancelClick = (e) => {
//     e.preventDefault();
//     history.push(`/`);
//   };

  return (
    <div className="upload-form edit-form">
      <h3>Update Photo Info</h3>
      <form onSubmit={handleSubmit}>
        {/* <img src={photoURL} id="select-photo-img" />
        <div>
          <label For="photo" />
          Select Photo*
          <input type="file" name="photo" onChange={onPhotoChange} />
        </div> */}
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

export default EditPhotoForm;
