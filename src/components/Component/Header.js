import Uploader from "./Uploader";
import userLogo from "../../assets/images/Mohan-muruge.jpg";
import logo from "../../assets/images/BrainFlix-logo.svg";
import SearchIcon from "../Icons/SearchIcon";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          className="header__logo--brainflix-logo"
          src={logo}
          alt="BrainFlix Logo"
        />
      </div>
      <div className="header__search-container">
        <div className="header__search-container--search-bar-wrapper">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="header__search-container--search-bar-wrapper--search"
          />
        </div>
      </div>
      <img
        src={userLogo}
        alt="User Logo"
        className="header__search-container--user-logo"
      />
      <div className="header__uploader">
        <Uploader />
      </div>
    </header>
  );
};

export default Header;
