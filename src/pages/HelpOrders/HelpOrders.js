import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { useSelector } from 'react-redux';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from 'services/api';
import HelpOrder from 'components/HelpOrder';
import { Container, HelpOrdersList, Spacer, Button } from './styles';

const HelpOrders = ({ navigation, isFocused }) => {
    const userId = useSelector(state => state.auth.id);
    const [helpOrders, setHelpOrders] = useState([]);

    useEffect(() => {
        async function loadHelpOrders() {
            const response = await api.get(`students/${userId}/help-orders`);
            const data = response.data.map(item => ({
                ...item,
                formattedDate: formatDistance(
                    parseISO(item.created_at),
                    new Date(),
                    {
                        locale: pt,
                        addSuffix: true,
                    },
                ),
            }));
            setHelpOrders(data);
        }

        loadHelpOrders();
    }, [userId, isFocused]);

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

export default withNavigationFocus(HelpOrders);
