import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { Container, Title } from './styles';

const Button = ({ children, loading, ...rest }) => {
    return (
        <Container enabled={!loading} {...rest}>
            {loading ? (
                <ActivityIndicator color="#fff" />
            ) : (
                <Title>{children}</Title>
            )}
        </Container>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    loading: PropTypes.bool,
};

Button.defaultProps = {
    loading: false,
};

export default Button;
