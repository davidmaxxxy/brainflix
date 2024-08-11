import { Link } from "react-router-dom";
import UploadIcon from "../../assets/Icons/UploadIcon";
import "../Uploader/uploader.scss";

const Uploader = () => {
  return (
    <button className="header__uploader__button">
      <UploadIcon />
      <h3 className="header__uploader__button--text">UPLOAD</h3>
    </button>
  );
};

export default Uploader;
