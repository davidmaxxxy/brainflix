import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/partials/customToastStyles.css";
import "../../styles/partials/customToastStyles.css";
import "../Page/UploadPage.scss";
import UploadIcon from "../../components/Icons/UploadIcon";
import thumbnailImage from "../../assets/images/Upload-video-preview.jpg";

const UploadPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    toast.success("Video uploaded successfully!");

    setTimeout(() => {
      navigate("/");
    }, 3000);
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
                    src={thumbnailImage}
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
                  />
                </div>
                <div className="upload__form-group h3-light-gray">
                  <h3 className="upload__form-label">
                    ADD A VIDEO DESCRIPTION
                  </h3>
                  <textarea
                    className="upload__form-textarea"
                    placeholder="Add a video description to your video"
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
