import styled from 'styled-components/native';
import ButtonComponent from 'components/Button';
import InputComponent from 'components/Input';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #f5f5f5;
`;

export const Spacer = styled.ScrollView`
    flex: 1;
    padding: 0 20px;
`;

export const Button = styled(ButtonComponent)``;
export const Input = styled(InputComponent).attrs({
    multiline: true,
})`
    padding-top: 20px;
    margin-top: 20px;
    height: 300px;
    line-height: 16px;
`;
