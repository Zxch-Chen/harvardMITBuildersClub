import { useState } from 'react';
import './styles/main.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Mission from './components/Mission';
import WhyWhat from './components/WhyWhat';
import CTA from './components/CTA';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'home' && (
        <>
          <Mission />
          <CTA />
          <Team />
        </>
      )}
      {activeTab === 'whywhat' && (
        <WhyWhat />
      )}
      <Footer />
    </div>
  );
}

export default App;
