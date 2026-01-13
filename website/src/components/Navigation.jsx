import './Navigation.css';

function Navigation({ activeTab, setActiveTab }) {
  return (
    <nav className="navigation">
      <button 
        className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => setActiveTab('home')}
      >
        Home
      </button>
      <button 
        className={`nav-button ${activeTab === 'whywhat' ? 'active' : ''}`}
        onClick={() => setActiveTab('whywhat')}
      >
        Why & What
      </button>
    </nav>
  );
}

export default Navigation;
