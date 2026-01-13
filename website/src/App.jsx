import './styles/main.css';
import Header from './components/Header';
import Mission from './components/Mission';
import CTA from './components/CTA';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Mission />
      <CTA />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
