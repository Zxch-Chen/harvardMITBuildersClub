import './CTA.css';

function CTA() {
  return (
    <section className="cta">
      <p className="cta-question">Interested in joining the community?</p>
      <p className="cta-link-container">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScfZicdLxZOP_GIGsDyGz1CSItxuqVTAlbfahqi40qMtwdLgg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="cta-link">Click here to fill out our interest form.</a>
      </p>
      <p className="cta-message">Feel free to reach out to our team for more details.</p>
    </section>
  );
}

export default CTA;
