import React, { useMemo } from 'react';
import {
    Container,
    Header,
    Left,
    Icon,
    LeftText,
    Time,
    Question,
} from './styles';

const HelpOrder = ({ data }) => {
    const answered = useMemo(() => !!data.answer, [data.answer]);

    return (
        <Container>
            <Header>
                <Left>
                    <Icon answered={answered} />
                    <LeftText answered={answered}>
                        {answered ? 'Respondido' : 'Sem resposta'}
                    </LeftText>
                </Left>
                <Time>Hoje as 14h</Time>
            </Header>
            <Question>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                aliquid vel eius delectus itaque. Nulla unde a quae aliquam
                assumenda!
            </Question>
        </Container>
    );
};

export default HelpOrder;
