import React from 'react';
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

export default Button;
