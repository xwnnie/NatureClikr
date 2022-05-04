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
  // const [photoURL, setPhotoURL] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  // useEffect(() => {
  //   if (!selectedPhoto) return;
  //   setPhotoURL(URL.createObjectURL(selectedPhoto));
  // }, [selectedPhoto])

  const onPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const payload = {
    //   url: photoURL,
    //   name,
    //   location,
    //   description,
    //   ownerId: sessionUser.id
    // };

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

    // let newPhoto = await dispatch(uploadPhoto(payload));
    console.log(newPhoto);
    if (newPhoto) {
      history.push(`/photos/${newPhoto.id}`);
      showModal(false);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/`);
  };

  return (
    <div className="upload-form">
      <h1>Upload your photo</h1>
      <form onSubmit={handleSubmit}>
        {/* <img src={image} id="select-photo-img"/> */}
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
            placeholder="name*"
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
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;