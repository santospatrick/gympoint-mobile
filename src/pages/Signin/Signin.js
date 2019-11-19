import React from 'react';
import { Text } from 'react-native';

import Button from 'components/Button';
import Input from 'components/Input';
import { Container, Form, Logo } from './styles';

const Signin = () => {
    return (
        <Container>
            <Form>
                <Logo source={require('../../assets/logo.png')} />
                <Input
                    placeholder="Informe seu ID de cadastro"
                    returnKeyType="send"
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <Button onPress={() => {}}>Entrar no sistema</Button>
            </Form>
        </Container>
    );
};

export default Signin;
