import React from 'react';
import { Container, Number, Time } from './styles';

const Checkin = ({ data, index }) => {
    return (
        <Container>
            <Number>Check-in #{index + 1}</Number>
            <Time>{data.formattedDate}</Time>
        </Container>
    );
};

export default Checkin;
