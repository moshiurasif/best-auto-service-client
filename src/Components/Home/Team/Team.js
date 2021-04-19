import React from 'react';
import TeamMember from './TeamMember/TeamMember';
import "./Team.css";

const teamMembers = [
  {
    name: "Nicolash Correia",
    title: "Founder of Gerez",
    image: "https://i.ibb.co/DKpWzVq/02-5.jpg",
  },
  {
    name: "Zenifar Ribeiro",
    title: "Engine Mechanic",
    image: "https://i.ibb.co/njm8vYY/04-2.jpg",
  },
  {
    name: "Renan Souza",
    title: "CEO of Gerez",
    image: "https://i.ibb.co/kKMKHF1/01-6.jpg",
  },
  {
    name: "Enzo Cardoso",
    title: "Director of Gerez",
    image: "https://i.ibb.co/8xwT8Ng/03-5.jpg",
  },
];

const Team = () => {
    return (
      <section className="team mb-5 pt-5 pb-5 pt-5">
        <div className="container">
          <div className="row text-center">
            <h5 style={{ color: "#ED1C24" }}>Our Team Member</h5>
            <h1
              className="mobile-font-size"
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginBottom: "2rem",
              }}
            >
              Expert Team Members
            </h1>
            {teamMembers.map((team) => (
              <TeamMember team={team}></TeamMember>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Team;