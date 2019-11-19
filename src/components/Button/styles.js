import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    height: 45px;
    background: #ee4e62;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-top: 15px;
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
`;
