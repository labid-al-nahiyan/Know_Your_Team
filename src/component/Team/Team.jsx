import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams,browserHistory } from 'react-router';
import './Team.css'
import maleTeam from '../../img/male.png'
import femaleTeam from '../../img/female.png'
import facebook from "../../img/Facebook.png"
import twitter from "../../img/Twitter.png"
import youtube from "../../img/YouTube.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faFlag,faFutbol , faLandmark, faVenusMars } from '@fortawesome/free-solid-svg-icons'

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
    const { intFormedYear,
            strCountry,
            strGender,
            strSport, 
            strTeamBadge, 
            strTeam, 
            strDescriptionEN,
            strTwitter,
            strYoutube ,
            strFacebook } = team;
    const Img= strGender==='Male'?maleTeam : femaleTeam
    console.log({Img},{maleTeam})
    const ImgStyle={
        backgroundColor:(Img===maleTeam)?'blue':'red'
    }
    
    return (
        <div>
            <div className="header">
                <img style={{ width: '10rem' }} src={strTeamBadge} alt="" />
            </div>
            <Container className="team">
                <Row className="team-detail" style={ImgStyle}>
                    <Col sm={12} lg={6}>
                        <div>
                            <h3>{strTeam}</h3>
                            <p><FontAwesomeIcon icon={faLandmark}/> Founded : {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag}/> Country : {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sports Type : {strSport}</p>
                            <p><FontAwesomeIcon icon={faVenusMars}/> Gender : {strGender}</p>
                            
                        </div>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className="teamImg">
                        <img src={Img} alt="" style={{width:'100%'}} />
                        </div>
                    </Col>
                </Row>
                <Row className="team-discription">
                    <Col lg={12} >
                        <p>
                            {strDescriptionEN}
                        </p>
                    </Col>
                    <Col lg={12}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi sed id eligendi nostrum inventore repellat   soluta, ipsum possimus ut reprehenderit dignissimos sunt, modi, quibusdam repudiandae et rem reiciendis. Placeat?</p>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <div className="footer">
                            <a href={`https://${strFacebook}`} target='_blank' rel="noreferrer"><img src={facebook} alt="" /></a>
                            <a href={`https://${strTwitter}`} target='_blank' rel="noreferrer"><img src={twitter} alt="" /></a>
                            <a href={`https://${strYoutube}`} target='_blank' rel="noreferrer"><img src={youtube} alt="" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Team;