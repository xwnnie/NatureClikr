import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { editPhoto } from "../../store/photos";

const MyPhotoEditForm = ({ photoId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

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
    console.log(newPhoto);
    if (newPhoto) {
      history.push(`/my/photos/${photoId}`);
    }
  };

  return (
    <div className="upload-form edit-form ">
      <h3>Update Photo Info</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name*"
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </div>
        <div>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default MyPhotoEditForm;
