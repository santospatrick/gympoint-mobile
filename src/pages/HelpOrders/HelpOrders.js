import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from 'services/api';
import HelpOrder from 'components/HelpOrder';
import { Container, HelpOrdersList, Spacer, Button } from './styles';

const HelpOrders = ({ navigation }) => {
    const userId = useSelector(state => state.auth.id);
    const [helpOrders, setHelpOrders] = useState([]);

    useEffect(() => {
        async function loadHelpOrders() {
            const response = await api.get(`students/${userId}/help-orders`);
            setHelpOrders(response.data);
        }

        loadHelpOrders();
    }, [userId]);

    return (
        <Container>
            <Spacer>
                <Button
                    onPress={() => {
                        navigation.navigate('NewHelpOrder');
                    }}
                >
                    Novo pedido de auxílio
                </Button>
                <HelpOrdersList
                    data={helpOrders}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item: helpOrder }) => (
                        <HelpOrder
                            data={helpOrder}
                            onPress={() => {
                                navigation.navigate('HelpOrderDetail', {
                                    helpOrder,
                                });
                            }}
                        />
                    )}
                />
            </Spacer>
        </Container>
    );
};

export default HelpOrders;
