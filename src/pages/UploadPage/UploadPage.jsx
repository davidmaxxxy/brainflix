import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/toast-styles/customToastStyles.css";
import "./UploadPage.scss";
import UploadIcon from "../../assets/Icons/UploadIcon";

const thumbnailImageUrl = `http://localhost:8080/images/upload-image-thumbnail.jpg`;

const apiUrl = "http://localhost:8080/videos";

const UploadPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newVideo = {
      id: uuidv4(),
      title: title,
      description: description,
      channel: "New Channel",
      image: thumbnailImageUrl,
      views: "0",
      likes: "0",
      duration: "0:00",
      video: "/path/to/video.mp4",
      timestamp: Date.now(),
      comments: [],
    };

    try {
      await axios.post(apiUrl, newVideo);
      toast.success("Video uploaded successfully!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error uploading video", error);
      toast.error("Failed to upload video");
    }
  };

  return (
    <>
      <div className="upload-wrapper">
        <section className="upload">
          <h1 className="upload__title">Upload Video</h1>
          <form className="upload__form" onSubmit={handleSubmit}>
            <div className="upload__form-container">
              <div className="upload__form-group upload__form-left">
                <h3 className="upload__form-label h3-light-gray">
                  VIDEO THUMBNAIL
                </h3>
                <div className="upload__form-thumbnail">
                  <img
                    src={thumbnailImageUrl}
                    alt="Video Thumbnail"
                    className="upload__form-thumbnail-image"
                  />
                </div>
              </div>
              <div className="upload__form-right">
                <div className="upload__form-group">
                  <h3 className="upload__form-label h3-light-gray">
                    TITLE YOUR VIDEO
                  </h3>
                  <input
                    type="text"
                    className="upload__form-input"
                    placeholder="Add a title to your video"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>
                <div className="upload__form-group h3-light-gray">
                  <h3 className="upload__form-label">
                    ADD A VIDEO DESCRIPTION
                  </h3>
                  <textarea
                    className="upload__form-textarea"
                    placeholder="Add a video description to your video"
                    value={description}
                    onChange={handleDescriptionChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="upload__form-actions">
              <button
                type="button"
                className="upload__form-button upload__form-button--cancel"
                onClick={() => navigate("/")}
              >
                <h3>CANCEL</h3>
              </button>
              <button
                type="submit"
                className="upload__form-button upload__form-button--publish"
              >
                <UploadIcon />
                <h3>PUBLISH</h3>
              </button>
            </div>
          </form>
          <ToastContainer />
        </section>
      </div>
    </>
  );
};

export default UploadPage;
