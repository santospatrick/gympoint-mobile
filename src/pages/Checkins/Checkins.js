import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Checkin from 'components/Checkin';
import api from 'services/api';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, CheckinsList, Spacer, Button } from './styles';

const Checkins = () => {
    const userId = useSelector(state => state.auth.id);
    const [checkins, setCheckins] = useState([]);

    const loadCheckins = useCallback(async () => {
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
    }, [userId]);

    async function handleNewCheckin() {
        try {
            await api.post(`students/${userId}/checkins`);
            loadCheckins();

            alert('Check-in registrado com sucesso!');
        } catch (error) {
            if (error.response.data && error.response.data.error) {
                alert('Limite de check-ins nos útimos 7 dias atingido');
            }
        }
    }

    useEffect(() => {
        loadCheckins();
    }, [loadCheckins]);

    return (
        <Container>
            <Spacer>
                <Button onPress={handleNewCheckin}>Novo check-in</Button>
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

export default Checkins;
