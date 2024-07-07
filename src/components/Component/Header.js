import Uploader from "./Uploader";
import userLogo from "../../assets/images/Mohan-muruge.jpg";
import logo from "../../assets/images/BrainFlix-logo.svg";
import SearchIcon from "../Icons/SearchIcon";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        {" "}
        <img className="header__logo--brainflix-logo" src={logo}></img>
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
        <img
          src={userLogo}
          alt="User Logo"
          className="header__search-container--search-bar-wrapper--user-logo"
        />
      </div>
      <Uploader />
    </header>
  );
};

export default Header;
