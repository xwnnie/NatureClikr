import { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setSelectedImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="upload-form">
      <h1>Upload your image</h1>
      <form>
        <img src={selectedImage} />
        <div>
          <label For="myImage" />
          Select Image:
          <input type="file" name="myImage" onChange={onImageChange} />
        </div>
        <div>
          <label For="name" />
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <div>
          <label For="tags" />
          Tags:
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          separated by comma
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Upload;