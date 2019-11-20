import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/Button';
import Input from 'components/Input';
import { signIn } from 'store/modules/auth/actions';
import { Container, Form, Logo } from './styles';

const Signin = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    function handleSubmit() {
        if (!value) return;
        dispatch(signIn(value));
    }

    return (
        <Container>
            <Form>
                <Logo source={require('../../assets/logo.png')} />
                <Input
                    placeholder="Informe seu ID de cadastro"
                    returnKeyType="send"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={setValue}
                    value={value}
                />
                <Button onPress={handleSubmit}>Entrar no sistema</Button>
            </Form>
        </Container>
    );
};

export default Signin;
