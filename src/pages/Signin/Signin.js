import React from 'react';
import { View, Text } from 'react-native';
import { Container, Form, Logo } from './styles';

const Signin = () => {
    return (
        <Container>
            <Form>
                <Logo source={require('assets/logo.png')} />
                <Text>Signin</Text>
            </Form>
        </Container>
    );
};

export default Signin;
