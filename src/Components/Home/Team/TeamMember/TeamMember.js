import React from 'react';
import "./TeamMember.css";

const TeamMember = ({team}) => {
    return (
        <div className="col-md-3 col-12">
        <div className="team-member-card">
            <img className="img-fluid" src={team.image} alt=""/>
            <h5>{team.name}</h5>
            <h6>{team.title}</h6>
        </div>
            
        </div>
    );
};

export default TeamMember;