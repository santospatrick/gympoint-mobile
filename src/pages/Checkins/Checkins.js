import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Checkin from 'components/Checkin';
import api from 'services/api';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, CheckinsList, Spacer, Button } from './styles';

const Checkins = () => {
    const userId = useSelector(state => state.auth.id);
    const [checkins, setCheckins] = useState([]);
    useEffect(() => {
        async function loadCheckins() {
            const response = await api.get(`students/${userId}/checkins`);
            const data = response.data.map(item => ({
                ...item,
                formattedDate: formatRelative(
                    parseISO(item.created_at),
                    new Date(),
                    { locale: pt },
                ),
            }));
            setCheckins(data);
        }
        loadCheckins();
    }, [userId]);

    return (
        <Container>
            <Spacer>
                <Button>Novo check-in</Button>
                <CheckinsList
                    data={checkins}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item, index }) => (
                        <Checkin data={item} index={index} />
                    )}
                />
            </Spacer>
        </Container>
    );
};

Checkins.navigationOptions = {
    tabBarLabel: 'Check-ins',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="person-pin-circle" size={20} color={tintColor} />
    ),
};

export default Checkins;
