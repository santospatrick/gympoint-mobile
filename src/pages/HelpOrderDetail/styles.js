import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #f5f5f5;
`;

export const Spacer = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const Card = styled.View`
    background: #fff;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 20px;
`;

export const Title = styled.Text`
    text-transform: uppercase;
    color: #444;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Paragraph = styled.Text`
    line-height: 26px;
    color: #666;
`;
