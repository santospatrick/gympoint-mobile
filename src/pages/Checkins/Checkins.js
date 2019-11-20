import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Checkins = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#000' }}>Checkins</Text>
        </View>
    );
};

Checkins.navigationOptions = {
    tabBarLabel: 'Check-ins',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="person-pin-circle" size={20} color={tintColor} />
    ),
};

export default Checkins;
