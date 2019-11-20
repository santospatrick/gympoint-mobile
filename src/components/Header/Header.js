import React from 'react';
import { Container, Logo } from './styles';

const Header = () => {
    return (
        <Container>
            <Logo source={require('../../assets/logo-inline.png')} />
        </Container>
    );
};

export default Header;
