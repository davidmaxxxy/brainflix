import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/partials/customToastStyles.css";
import "../../styles/partials/customToastStyles.css";
import "../Page/UploadPage.scss";

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
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__form" onSubmit={handleSubmit}>
          <div className="upload__form-group">
            <h3 className="upload__form-label">VIDEO THUMBNAIL</h3>
            <div className="upload__form-thumbnail"></div>
          </div>
          <div className="upload__form-group">
            <h3 className="upload__form-label">TITLE YOUR VIDEO</h3>
            <input
              type="text"
              className="upload__form-input"
              placeholder="Add a title to your video"
            />
          </div>
          <div className="upload__form-group">
            <h3 className="upload__form-label">ADD A VIDEO DESCRIPTION</h3>
            <textarea
              className="upload__form-textarea"
              placeholder="Add a video description to your video"
            ></textarea>
          </div>
          <div className="upload__form-actions">
            <button
              type="submit"
              className="upload__form-button upload__form-button--publish"
            >
              Publish
            </button>
            <button
              type="button"
              className="upload__form-button upload__form-button--cancel"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
        <ToastContainer />
      </section>
    </>
  );
};

export default UploadPage;
