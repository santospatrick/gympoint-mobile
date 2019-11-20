import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #f5f5f5;
`;

export const Spacer = styled.View`
    padding: 0 20px;
`;

export const CheckinsList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {},
})``;

export const Checkin = styled.View``;
