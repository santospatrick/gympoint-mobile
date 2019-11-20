import React from 'react';
import { Container, Number, Time } from './styles';

const Checkin = ({ data, index }) => {
    return (
        <Container>
            <Number>Check-in #{index + 1}</Number>
            <Time>Hoje as 14h</Time>
        </Container>
    );
};

export default Checkin;
