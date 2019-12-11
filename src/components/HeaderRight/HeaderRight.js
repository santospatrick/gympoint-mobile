import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderRight = ({ navigation }) => {
    return (
        <Icon
            onPress={() => {
                navigation.navigate('Signin');
            }}
            style={{
                marginRight: 10,
            }}
            name="block"
            size={20}
            color="#EE4E62"
        />
    );
};

HeaderRight.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default HeaderRight;
