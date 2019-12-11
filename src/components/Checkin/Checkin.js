import React from 'react';
import PropTypes from 'prop-types';
import { Container, Number, Time } from './styles';

const Checkin = ({ data, index }) => {
    return (
        <Container>
            <Number>Check-in #{index + 1}</Number>
            <Time>{data.formattedDate}</Time>
        </Container>
    );
};

Checkin.propTypes = {
    data: PropTypes.shape({
        formattedDate: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

export default Checkin;
