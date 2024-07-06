import UploadIcon from "../Icons/UploadIcon";

const Uploader = () => {
  return (
    <div className="header__uploader">
      <button className="header__uploader__button">
        <UploadIcon />
        <p className="header__uploader__button--text">UPLOAD</p>
      </button>
    </div>
  );
};

export default Uploader;
