import Uploader from "./Uploader";
import userLogo from "../../assets/images/Mohan-muruge.jpg";
import logo from "../../assets/images/BrainFlix-logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        {" "}
        <img src={logo}></img>{" "}
      </div>
      <div className="header__search-user">
        <input type="text" placeholder="Search" className="header__search" />
        <img src={userLogo} alt="User Logo" className="header__user-logo" />
      </div>
      <Uploader />
    </header>
  );
};

export default Header;
