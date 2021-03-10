import React from 'react';
import './NoMatch.css'
import {Container} from 'react-bootstrap'
const NoMatch = () => {
    return (
        <div>
            <div className="header">
                <h1>Know Your Team</h1>
            </div>
            
                <Container className="text-center not-match">
                    <h2>Sorry , 404 Not FOUND</h2>
                </Container>
            
        </div>
    );
};

export default NoMatch;