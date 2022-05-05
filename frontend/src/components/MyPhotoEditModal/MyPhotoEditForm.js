import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { editPhoto } from "../../store/photos";

const MyPhotoEditForm = ({photoId}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

    let photos = useSelector((state) => state.photos);
    photos = Object.values(photos);

    photos.sort((a, b) => {
      const keyA = new Date(a.createdAt);
      const keyB = new Date(b.createdAt);
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
