import React from 'react';
import {Button, Col } from 'react-bootstrap'
import {
    Link
  } from "react-router-dom";

const TeamThumbnil = ({team}) => {
    const {strTeam,strSport,strTeamBadge,idTeam}=team
    return (
        <Col  sm={12} md={6} lg={4}>
            <div className="team-thumbnil-item text-center">
                
                    <div>
                        <img src={strTeamBadge} alt='' width='100px'/>
                    </div>
                    <div>
                        <h3>{strTeam}</h3>
                        <p>
                            Sports type : {strSport}
                        </p>
                        <Link to={`/team/${idTeam}`}><Button variant="primary">Explore</Button></Link>
                    </div>
               
            </div>
        </Col>
    );
};

export default TeamThumbnil;