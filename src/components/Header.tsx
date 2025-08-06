import '../styles/Header.scss';

function Header() {
  return (
    <header className="nightshade_header">
      {/* <img
          className={styles.headerLogo}
          src={images.LogoWhite}
          alt={`${brandName} Logo`}
        /> */}
      <h1>Nightshade Needle</h1>

      <div className="nightshade_navigation"></div>
    </header>
  );
}

export default Header;
