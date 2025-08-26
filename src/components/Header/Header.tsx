import './Header.scss';
import logo from '../../assets/nightshade-needle_color.png';

const Header = () => {
  return (
    <header className="nightshade_header">
      <img
        className="nightshade_header-logo"
        src={logo}
        alt="Nightshade Needle Logo"
      />
      <h1>Nightshade Needle</h1>
    </header>
  );
};

export default Header;
