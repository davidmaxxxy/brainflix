import UploadIcon from "../Icons/UploadIcon";

const Uploader = () => {
  return (
    <div className="header__uploader">
      <button className="header__uploader__button">
        <UploadIcon />
        <h3 className="header__uploader__button--text">UPLOAD</h3>
      </button>
    </div>
  );
};

export default Uploader;
