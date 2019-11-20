import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import IconComponent from 'react-native-vector-icons/MaterialIcons';

export const Container = styled(RectButton)`
    height: 150px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-top: 10px;
    padding: 20px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Left = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(IconComponent).attrs(props => ({
    name: 'check-circle',
    color: props.answered ? '#42cb59' : '#999',
    size: 20,
}))`
    margin-right: 8px;
`;

export const LeftText = styled.Text`
    color: ${props => (props.answered ? '#42cb59' : '#999')};
    font-weight: bold;
`;

export const Time = styled.Text`
    color: #666;
`;

export const Question = styled.Text.attrs({
    numberOfLines: 3,
})`
    color: #666;
    margin-top: 16px;
    line-height: 26px;
`;
