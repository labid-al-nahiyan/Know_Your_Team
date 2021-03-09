import React from 'react';
import { Card, Button } from 'react-bootstrap'
import {
    Link
  } from "react-router-dom";

const TeamThumbnil = ({team}) => {
    const {strTeam,strSport,strTeamBadge,idTeam}=team
    return (
        <div className="team-thumbnil-item">
            <div className="text-center" style={{ width: '12rem',padding:'30px 20px' }}>
                <div>
                    <img src={strTeamBadge} alt='' width='100%'/>
                </div>
                <div>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        Sports type : {strSport}
                    </Card.Text>
                    <Link to={`/team/${idTeam}`}><Button variant="primary">Explore</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default TeamThumbnil;