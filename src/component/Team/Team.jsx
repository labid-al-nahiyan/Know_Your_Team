import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Team.css'

const Team = () => {
    const { id } = useParams()
    const [team, setTeam] = useState({})

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.teams[0])
                setTeam(data.teams[0])

            })
    }, [id])
    const { intFormedYear, strCountry, strGender, strSport, strTeamBadge, strTeam, strDescriptionEN } = team;

    return (
        <div>
            <div className="header">
                <img style={{ width: '10rem' }} src={strTeamBadge} alt="" />
            </div>
            <Container>
                <Row className="team-detail">
                    <Col>
                        <div>
                            <h3>{strTeam}</h3>
                            <p>Founded : {intFormedYear}</p>
                            <p>Country : {strCountry}</p>
                            <p>Sports Type : {strSport}</p>
                            <p>Gender : {strGender}</p>
                            <p></p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src="../../img/male.png" alt="" style={{width : '100%'}}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <p>
                            {strDescriptionEN}
                        </p>
                    </Col>
                    <Col lg={12}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi sed id eligendi nostrum inventore repellat   soluta, ipsum possimus ut reprehenderit dignissimos sunt, modi, quibusdam repudiandae et rem reiciendis. Placeat?</p>
                    </Col>
                    
                </Row>
                <Row>
                    <div>
                       <div><img src="../../img/Facebook.png" alt=""/></div>
                       <div><img src="../../img/Twitter.png" alt=""/></div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Team;