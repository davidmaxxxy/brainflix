import { Link } from "react-router-dom";
import UploadIcon from "../Icons/UploadIcon";

const Uploader = () => {
  return (
    <button className="header__uploader__button">
      <UploadIcon />
      <h3 className="header__uploader__button--text">UPLOAD</h3>
    </button>
  );
};

export default Uploader;
