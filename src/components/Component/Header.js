import Uploader from "./Uploader";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">Your Logo</div>
      <div className="header__search-user">
        <input type="text" placeholder="Search" className="header__search" />
        <img src="user.png" alt="User Logo" className="header__user-logo" />
      </div>
      <Uploader />
    </header>
  );
};

export default Header;
