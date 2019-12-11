import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function getPersonIcon({ tintColor }) {
    return <Icon name="person-pin-circle" size={20} color={tintColor} />;
}

getPersonIcon.propTypes = {
    tintColor: PropTypes.string.isRequired,
};

export function getLiveIcon({ tintColor }) {
    return <Icon name="live-help" size={20} color={tintColor} />;
}

getLiveIcon.propTypes = {
    tintColor: PropTypes.string.isRequired,
};
