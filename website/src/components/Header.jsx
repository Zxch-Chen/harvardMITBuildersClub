import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img className="logo-img" src="/3.svg" alt="Cambridge Collider Logo" />
        <h1 className="club-name">
          <span className="club-name-line club-name-cambridge">Cambridge</span>
          <span className="club-name-line club-name-collider">Collider</span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
