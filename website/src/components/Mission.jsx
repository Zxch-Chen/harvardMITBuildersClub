import './Mission.css';

function Mission() {
  return (
    <section className="mission">
      <h2 className="mission-heading">The Lineage of Builders</h2>
      <div className="mission-content">
        <p>
          History isn't shaped by institutions; it is forged by small rooms of obsessed people. 
          From the Agora & Academy of Athens, where the dialogues of Socrates and Plato laid the logic 
          for Western civilization, to the coffee houses of the Enlightenment, where thinkers 
          like Voltaire and Newton traded pamphlets that toppled old empires, progress has always 
          been a communal act.
        </p>
        <p>
          Innovation thrives in these high-density circles. Whether it was the Homebrew Computer 
          Club sparking the personal computer revolution or the collaborative labs of Kendall Square 
          today to the startups of Silicon Valley, the pattern is the same: Ambitious creators find each other and refuse to work alone.
        </p>
      </div>
      
      <h2 className="mission-heading">The Cambridge Collider</h2>
      <div className="mission-content">
        <p>
          We are that circle. We are a community of deep thinkers and technical architects who 
          refuse to accept the status quo. We don't just discuss the hardest problems of our 
          generation—we build the infrastructure to solve them.
        </p>
        <p>
          Do not think of us as a club. Think of us as a guild bound by conviction, shared vision, 
          and the raw drive to build what others only imagine. As Steve Jobs famously noted, the 
          world around you was built by people no smarter than you. We are here to prove him right.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '2rem 0' }} />
        <p>
          <strong>What we do:</strong> Provide a bridge between the Harvard & MIT ecosystems and provide API credits, and hardware to students who want to build.
        </p>
        <p>
          <strong>Early Goal:</strong> Have a small group of highly technical, ambitious young people who want to create cool projects.
        </p>
        <p>
          <strong>Middle Goal:</strong> Allow wide access to tools for builders including API credits and hardware that students can use.
        </p>
        <p>
          <strong>End goal:</strong> We create companies that create 10B+ in value and help shape the future for the better of humanity.
        </p>
      </div>
    </section>
  );
}

export default Mission;
