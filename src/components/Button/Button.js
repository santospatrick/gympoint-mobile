import React from 'react';
import { Container, Title } from './styles';

const Button = ({ children }) => {
    return (
        <Container>
            <Title>{children}</Title>
        </Container>
    );
};

export default Button;
