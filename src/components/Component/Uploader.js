import UploadIcon from "../Icons/UploadIcon";

const Uploader = () => {
  return (
    <div className="header__uploader">
      <button className="header__uploader__button">
        <UploadIcon color={"white"} />
        <span>Upload</span>
      </button>
    </div>
  );
};

export default Uploader;
