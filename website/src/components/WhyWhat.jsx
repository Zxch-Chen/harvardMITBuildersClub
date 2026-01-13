import './Mission.css';

function WhyWhat() {
  return (
    <section className="mission">
      <h2 className="mission-heading">Why We Exist</h2>
      <div className="mission-content">
        <p>
          Harvard and MIT represent the world's highest concentration of intellectual and technical talent. Yet, despite being separated by only a few blocks, our ecosystems remain siloed. This invisible wall stalls innovation and leaves immense potential untapped.
        </p>
        <p>
          The Harvard MIT Builders Club exists to tear down these silos. We believe the next generation of "unicorns"—and the solutions to our era's most pressing challenges—will not be built in isolation. By bridging the gap between Harvard's vision and MIT's technical mastery, we are creating a unified forge for the world's most ambitious builders.
        </p>
      </div>
      
      <h2 className="mission-heading">What We Do</h2>
      <div className="mission-content">
        <p>
          Our goal is simple: provide the network and the resources for students to build the future together.
        </p>
      </div>

      <h3 className="mission-subheading">Our Strategy</h3>
      <div className="mission-content">
        <p>
          <strong>Community:</strong> Facilitating consistent, high-impact networking opportunities.
        </p>
        <p>
          <strong>Workspace:</strong> Hosting dedicated builds and hack-sessions for interdisciplinary teams.
        </p>
        <p>
          <strong>Resources:</strong> Supplying students with the necessary API credits and hardware to build at the speed of thought.
        </p>
      </div>

      <p className="mission-quote">
        "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has." — Margaret Mead
      </p>
    </section>
  );
}

export default WhyWhat;
