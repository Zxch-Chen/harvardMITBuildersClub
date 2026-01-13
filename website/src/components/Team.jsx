import './Team.css';

function Team() {
  const teamMembers = [
    { name: 'Team Member One', email: 'member1@college.harvard.edu' },
    { name: 'Team Member Two', email: 'member2@college.harvard.edu' },
    { name: 'Team Member Three', email: 'member3@mit.edu' },
    { name: 'Team Member Four', email: 'member4@college.harvard.edu' },
  ];

  return (
    <section className="team">
      <ul className="team-list">
        {teamMembers.map((member, index) => (
          <li key={index} className="team-member">
            <span className="member-name">{member.name}: </span>
            <a href={`mailto:${member.email}`} className="member-email">
              {member.email}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Team;
