import './Team.css';

function Team() {
  const teamMembers = [
    { name: 'Zach Chen', email: 'zachchen@college.harvard.edu' },
    { name: 'Anthony Donegan', email: 'ajzd@mit.edu' },
  
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
