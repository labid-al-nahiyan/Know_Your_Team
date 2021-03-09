import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TeamThumbnil from '../TeamThumbnil/TeamThumbnil';
import './Home.css'
const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328')
            .then(res => res.json())
            .then(data => {
                setTeams(data.teams)
            })
    }, [])
    return (
        <div>
            <div className="home-title">
                <h1>See Your TEAM</h1>
            </div>
            <div style={{backgroundColor:'black'}}>
                <Container>

                    <div className="team-thumbnil">
                        {
                            teams.map((team) => {
                                return <TeamThumbnil team={team} key={team.idTeam}></TeamThumbnil>
                            })
                        }
                    </div>
                </Container>
            </div>
        </div>

    );
};

export default Home;