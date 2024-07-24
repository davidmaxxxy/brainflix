import React from "react";
import "../Page/UploadPage.scss";

const UploadPage = () => {
  return (
    <>
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__form">
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
            <button className="upload__form-button upload__form-button--publish">
              Publish
            </button>
            <button className="upload__form-button upload__form-button--cancel">
              Cancel
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadPage;
