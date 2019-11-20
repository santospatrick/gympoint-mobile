import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from 'components/Button';
import Checkin from 'components/Checkin';
import { Container, CheckinsList, Spacer } from './styles';

const data = [1, 2, 3, 5];

const Checkins = () => {
    return (
        <Container>
            <Spacer>
                <Button>Novo check-in</Button>
                <CheckinsList
                    data={data}
                    keyExtractor={item => String(item)}
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
