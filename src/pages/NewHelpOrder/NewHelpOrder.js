import React, { useState, useCallback } from 'react';
import { Keyboard } from 'react-native';
import { useSelector } from 'react-redux';
import api from 'services/api';
import { Container, Spacer, Button, Input } from './styles';

const NewHelpOrder = ({ navigation }) => {
    const userId = useSelector(state => state.auth.id);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');

    const handleSubmit = useCallback(async () => {
        Keyboard.dismiss();
        if (!value) return;

        try {
            setLoading(true);
            await api.post(`students/${userId}/help-orders`, {
                question: value,
            });
            navigation.goBack();
        } finally {
            setLoading(false);
        }
    }, [navigation, userId, value]);

    return (
        <Container>
            <Spacer>
                <Input
                    placeholder="Inclua seu pedido de auxílio"
                    onChangeText={setValue}
                    value={value}
                />
                <Button loading={loading} onPress={handleSubmit}>
                    Novo pedido de auxílio
                </Button>
            </Spacer>
        </Container>
    );
};

export default NewHelpOrder;
