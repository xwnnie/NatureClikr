import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { editPhoto } from "../../store/photos";

import "./EditPhotoForm.css";

const EditPhotoForm = ({ showModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const { photoId } = useParams();
  let photos = useSelector((state) => state.photos);
  photos = Object.values(photos);
  const photo = photos.find((photo) => photo.id === +photoId);

  const [name, setName] = useState(photo.name);
  const [location, setLocation] = useState(photo.location);
  const [description, setDescription] = useState(photo.description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: photoId,
      url: photo.url,
      name,
      location,
      description,
      ownerId: sessionUser.id,
    };

    let newPhoto = await dispatch(editPhoto(payload));

    if (newPhoto) {
      history.push(`/photos/${newPhoto.id}`);
      showModal(false);
    }
  };

  return (
    <div className="upload-form edit-form">
      <h3>Update Photo Info</h3>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPhotoForm;
