import React from 'react';
import { Container, Title } from './styles';

const Button = ({ children, ...rest }) => {
    return (
        <Container {...rest}>
            <Title>{children}</Title>
        </Container>
    );
};

export default Button;
