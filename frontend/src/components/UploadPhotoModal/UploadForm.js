import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { uploadPhoto } from "../../store/photos";
import "./Upload.css";

const Upload = ({showModal}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const onPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newPhoto = await dispatch(uploadPhoto({
        name,
        location,
        description,
        ownerId: sessionUser.id,
        image,
      }))

    setName("");
    setLocation("");
    setDescription("");
    setImage(null);

    console.log(newPhoto);
    if (newPhoto) {
      history.push(`/photos/${newPhoto.id}`);
      showModal(false);
    }
  };

  return (
    <div className="upload-form">
      <h1>Upload your photo</h1>
      <form onSubmit={handleSubmit}>
        <div id="select-photo-div">
          <label For="photo" id="select-photo-label">
            Select a Photo*
          </label>
          <input type="file" name="photo" onChange={onPhotoChange} required/>
        </div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name*"
          required
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="location"
        />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        />
          <button type="submit" id="upload-confirm-btn">
            Upload
          </button>          
      </form>
    </div>
  );
};

export default Upload;