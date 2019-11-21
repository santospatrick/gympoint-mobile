import React from 'react';

import { Container, Spacer, Card, Title, Paragraph } from './styles';

const HelpOrderDetail = ({ navigation }) => {
    const helpOrder = navigation.getParam('helpOrder');

    return (
        <Container>
            <Spacer>
                <Card>
                    <Title>Pergunta</Title>
                    <Paragraph>{helpOrder.question}</Paragraph>

                    <Title style={{ marginTop: 16 }}>Resposta</Title>
                    <Paragraph
                        style={{
                            color: helpOrder.answer ? '#666' : '#ee4e62',
                        }}
                    >
                        {helpOrder.answer
                            ? helpOrder.answer
                            : 'Não respondida ainda'}
                    </Paragraph>
                </Card>
            </Spacer>
        </Container>
    );
};

export default HelpOrderDetail;
